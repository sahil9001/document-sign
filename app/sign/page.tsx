'use client';

import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Pen, Type, Check, ArrowLeft, Move, Maximize2, Minimize2, ZoomIn, ZoomOut } from "lucide-react";
import SignaturePad from 'react-signature-canvas';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useDropzone } from 'react-dropzone';
import { Slider } from "@/components/ui/slider";
import Link from 'next/link';
import { PDFDocument } from 'pdf-lib';

export default function SignPage() {
  const [step, setStep] = useState<'upload' | 'sign'>('upload');
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [signatureType, setSignatureType] = useState<'draw' | 'type'>('draw');
  const [signaturePad, setSignaturePad] = useState<SignaturePad | null>(null);
  const [typedSignature, setTypedSignature] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [signaturePosition, setSignaturePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [pdfScale, setPdfScale] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [signatureSize, setSignatureSize] = useState(100); // Base size in pixels
  const pdfContainerRef = useRef<HTMLDivElement>(null);
  const signatureRef = useRef<HTMLDivElement>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setPdfFile(file);
      setStep('sign');
    },
  });

  useEffect(() => {
    if (pdfFile && pdfContainerRef.current) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const pdfData = e.target?.result as ArrayBuffer;
        const pdfDoc = await PDFDocument.load(pdfData);
        const page = pdfDoc.getPages()[0];
        const { width, height } = page.getSize();
        const containerWidth = pdfContainerRef.current?.clientWidth || width;
        setPdfScale(containerWidth / width);
      };
      reader.readAsArrayBuffer(pdfFile);
    }
  }, [pdfFile, isFullScreen]);

  const clearSignature = () => {
    if (signaturePad) {
      signaturePad.clear();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!signatureRef.current) return;
    setIsDragging(true);

    const container = pdfContainerRef.current?.getBoundingClientRect();
    if (!container) return;

    const x = (e.clientX - container.left) / pdfScale;
    const y = (e.clientY - container.top) / pdfScale;
    setSignaturePosition({ x, y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !signatureRef.current || !pdfContainerRef.current) return;

    const container = pdfContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - container.left) / pdfScale;
    const y = (e.clientY - container.top) / pdfScale;
    setSignaturePosition({ x, y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleSign = async () => {
    if (!pdfFile) return;

    let signatureData;
    if (signatureType === 'draw') {
      signatureData = signaturePad?.toDataURL();
    } else {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 400;
      canvas.height = 100;
      if (ctx) {
        ctx.font = '48px "Dancing Script"';
        ctx.fillText(typedSignature, 10, 50);
        signatureData = canvas.toDataURL();
      }
    }

    if (!signatureData) return;

    try {
      const pdfArrayBuffer = await pdfFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(pdfArrayBuffer);
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];

      const signatureImage = await pdfDoc.embedPng(signatureData);
      const { width, height } = firstPage.getSize();
      
      const scaledX = (signaturePosition.x / pdfScale);
      const scaledY = height - (signaturePosition.y / pdfScale) - (signatureSize / 2);
      const scaledWidth = signatureSize * 2;
      const scaledHeight = signatureSize;

      firstPage.drawImage(signatureImage, {
        x: scaledX,
        y: scaledY,
        width: scaledWidth,
        height: scaledHeight,
      });

      const signedPdfBytes = await pdfDoc.save();
      const blob = new Blob([signedPdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'signed-document.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setShowSuccess(true);
    } catch (error) {
      console.error('Error signing PDF:', error);
    }
  };

  if (step === 'upload') {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Upload Your Document</h1>
            <p className="text-muted-foreground">
              Upload a PDF document to start the signing process
            </p>
          </div>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors
              ${isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'}`}
          >
            <input {...getInputProps()} />
            <div className="space-y-4">
              <div className="flex justify-center">
                <Download className="h-12 w-12 text-muted-foreground" />
              </div>
              <div>
                <p className="text-lg font-medium">
                  {isDragActive ? 'Drop your PDF here' : 'Drag & drop your PDF here'}
                </p>
                <p className="text-sm text-muted-foreground">
                  or click to select a file
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const pdfPreview = (
    <div className="relative">
      <Card 
        className={`p-4 bg-muted overflow-hidden ${isFullScreen ? 'fixed inset-0 z-50' : 'h-[600px]'}`}
        ref={pdfContainerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <Button
            variant="secondary"
            size="icon"
            onClick={toggleFullScreen}
          >
            {isFullScreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </Button>
        </div>
        {pdfFile && (
          <>
            <iframe
              src={URL.createObjectURL(pdfFile)}
              className="w-full h-full"
              title="PDF Preview"
            />
            <div
              ref={signatureRef}
              className="absolute cursor-move bg-white p-2 rounded shadow-lg"
              style={{
                left: `${signaturePosition.x}px`,
                top: `${signaturePosition.y}px`,
                transform: 'translate(-50%, -50%)',
                width: `${signatureSize * 2}px`,
                height: `${signatureSize}px`,
              }}
              onMouseDown={handleMouseDown}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Move className="h-4 w-4" />
                Drag to position signature
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );

  const signatureControls = (
    <div className="space-y-6">
      <Card className="p-6">
        <Tabs value={signatureType} onValueChange={(v) => setSignatureType(v as 'draw' | 'type')}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="draw">
              <Pen className="mr-2 h-4 w-4" />
              Draw
            </TabsTrigger>
            <TabsTrigger value="type">
              <Type className="mr-2 h-4 w-4" />
              Type
            </TabsTrigger>
          </TabsList>

          <TabsContent value="draw" className="space-y-4">
            <div className="border rounded-lg p-4 bg-background">
              <SignaturePad
                ref={(ref) => setSignaturePad(ref)}
                canvasProps={{
                  className: 'w-full h-40 border rounded',
                  style: { 
                    width: '100%', 
                    height: '160px',
                    backgroundColor: '#fff'
                  }
                }}
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={clearSignature}>
                Clear
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="type" className="space-y-4">
            <div className="border rounded-lg p-4 bg-background">
              <input
                type="text"
                value={typedSignature}
                onChange={(e) => setTypedSignature(e.target.value)}
                placeholder="Type your signature"
                className="w-full p-2 text-2xl font-signature border-b focus:outline-none focus:border-primary"
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Signature Size</label>
            <div className="flex items-center gap-4">
              <ZoomOut className="h-4 w-4 text-muted-foreground" />
              <Slider
                value={[signatureSize]}
                onValueChange={([value]) => setSignatureSize(value)}
                min={50}
                max={200}
                step={1}
                className="flex-1"
              />
              <ZoomIn className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </Card>

      <Button className="w-full" size="lg" onClick={handleSign}>
        Sign Document
      </Button>
    </div>
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <button 
            onClick={() => setStep('upload')} 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Upload
          </button>
        </div>

        <div className={`grid grid-cols-1 ${isFullScreen ? '' : 'lg:grid-cols-2'} gap-8`}>
          {pdfPreview}
          {!isFullScreen && signatureControls}
        </div>

        {isFullScreen && (
          <div className="fixed bottom-8 right-8 z-50 w-80">
            {signatureControls}
          </div>
        )}
      </div>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              Document Signed Successfully
            </DialogTitle>
            <DialogDescription>
              Your document has been signed and downloaded.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Upload, File, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function UploadDocument() {
  const [files, setFiles] = useState<File[]>([]);
  const router = useRouter();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
    },
    maxFiles: 1,
  });

  const removeFile = (file: File) => {
    setFiles(files.filter((f) => f !== file));
  };

  const handleUpload = async () => {
    if (files.length === 0) return;
    
    // In a real app, you would upload the file to a storage service here
    // For this demo, we'll just simulate the upload and redirect to the signing page
    router.push('/sign');
  };

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'}`}
      >
        <input {...getInputProps()} />
        <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
        <p className="text-muted-foreground">
          {isDragActive
            ? 'Drop the PDF here'
            : 'Drag and drop a PDF here, or click to select'}
        </p>
      </div>

      {files.length > 0 && (
        <div className="space-y-4">
          {files.map((file) => (
            <Card key={file.name} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <File className="h-6 w-6" />
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFile(file)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
          <Button className="w-full" onClick={handleUpload}>
            Continue to Sign
          </Button>
        </div>
      )}
    </div>
  );
}
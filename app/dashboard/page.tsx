'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, FileSignature, Search } from "lucide-react";
import { DocumentCard } from "@/components/document-card";
import { UploadDocument } from "@/components/upload-document";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <FileSignature className="mr-2 h-4 w-4" />
                Upload Document
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload Document</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="text-center space-y-2">
                  <p className="text-muted-foreground">
                    Upload a PDF document to start the signing process
                  </p>
                </div>
                <UploadDocument />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Documents</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Search documents..."
            className="max-w-sm"
            prefix={<Search className="h-4 w-4" />}
          />
        </div>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Documents
                </CardTitle>
                <FileSignature className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Pending Signatures
                </CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <DocumentCard
              title="Contract Agreement.pdf"
              status="pending"
              date="2024-03-20"
              signers={['john@example.com', 'sarah@example.com']}
            />
            <DocumentCard
              title="NDA Document.pdf"
              status="completed"
              date="2024-03-19"
              signers={['mike@example.com']}
            />
            <DocumentCard
              title="Project Proposal.pdf"
              status="pending"
              date="2024-03-18"
              signers={['alice@example.com', 'bob@example.com']}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
'use client';

import { Button } from "@/components/ui/button";
import { FileText, PenTool, Shield, ArrowRight, CheckCircle2, Zap, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-32 lg:px-8 lg:pt-40">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary/10 text-primary">
                Free for everyone 🎉
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Sign documents with confidence ✨
            </h1>
            <p className="text-muted-foreground text-lg leading-8 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              The simplest way to sign documents online 📝 No account required. Just upload, sign, and download! 🚀
            </p>
            <div className="flex items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Link href="/sign">
                <Button size="lg" className="text-lg px-8 h-12">
                  Start Signing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 sm:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to sign documents digitally ✨
            </h2>
          </div>
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative overflow-hidden rounded-2xl border bg-background p-8 shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-6">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Easy Document Upload 📄</h3>
                <p className="text-muted-foreground">
                  Drag and drop your PDFs or select them from your device. Support for multiple file formats.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl border bg-background p-8 shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-6">
                  <PenTool className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Draw or Type Signatures ✍️</h3>
                <p className="text-muted-foreground">
                  Create your signature using our drawing pad or choose from professional font styles.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl border bg-background p-8 shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-6">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure & Private 🔒</h3>
                <p className="text-muted-foreground">
                  Your documents are encrypted and never stored without permission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              How it works 🎯
            </h2>
            <p className="text-muted-foreground text-lg">
              Sign documents in three simple steps ✨
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Upload Document 📄</h3>
              <p className="text-muted-foreground">
                Upload your PDF document securely to our platform
              </p>
            </div>
            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
                <PenTool className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Add Signature ✍️</h3>
              <p className="text-muted-foreground">
                Draw or type your signature using our tools
              </p>
            </div>
            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Download & Share 🚀</h3>
              <p className="text-muted-foreground">
                Get your signed document instantly
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 sm:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why choose DocSign? 🤔
            </h2>
            <p className="text-muted-foreground text-lg">
              Simple, secure, and free document signing for everyone ✨
            </p>
          </div>
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2">
              <div className="relative pl-16">
                <dt className="text-xl font-semibold">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <Zap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  Lightning Fast ⚡
                </dt>
                <dd className="mt-2 text-muted-foreground">
                  Sign documents in seconds, not minutes. No waiting, no delays.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-xl font-semibold">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <Shield className="h-6 w-6 text-primary-foreground" />
                  </div>
                  Secure & Private 🔒
                </dt>
                <dd className="mt-2 text-muted-foreground">
                  Your documents are encrypted and never stored without permission.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-xl font-semibold">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  No Account Needed 🎉
                </dt>
                <dd className="mt-2 text-muted-foreground">
                  Start signing immediately without creating an account.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-xl font-semibold">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <FileText className="h-6 w-6 text-primary-foreground" />
                  </div>
                  Multiple Formats 📑
                </dt>
                <dd className="mt-2 text-muted-foreground">
                  Support for PDF, Word, and other document formats.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to start signing? 🚀
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of users who trust DocSign for their document signing needs ✨
            </p>
            <Link href="/sign">
              <Button size="lg" className="text-lg px-8 h-12">
                Start Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
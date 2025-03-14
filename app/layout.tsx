'use client';

import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Providers } from './providers';
import { RootLayoutClient } from './root-layout-client';
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>DocSignHub - Fast and Easy Document Signing</title>
        <meta name="description" content="Get your documents signed quickly and easily with DocSignHub. Our streamlined process makes document signing simple and efficient." />
        <meta name="keywords" content="document signing, e-signature, fast signing, digital documents" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.docsignhub.com" />
        <meta property="og:title" content="DocSignHub - Fast and Easy Document Signing" />
        <meta property="og:description" content="Get your documents signed quickly and easily with DocSignHub." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.docsignhub.com" />
        <meta property="og:image" content="https://www.docsignhub.com/og-image.jpg" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <RootLayoutClient>
              {children}
            </RootLayoutClient>
          </ThemeProvider>
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-DFLXKB5Y13" />
    </html>
  );
}
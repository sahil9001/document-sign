'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Your documents and signatures are protected with bank-level security and encryption.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get your documents signed quickly with our streamlined signing process.",
  },
  {
    icon: Users,
    title: "User Focused",
    description: "Built with users in mind, making document signing simple and intuitive.",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Doc Sign Hub</h1>
        <p className="text-muted-foreground text-lg">
          We're on a mission to make document signing simple, secure, and accessible to everyone.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Founded in 2025, Doc Sign Hub was born from the need to simplify the document signing process
            while maintaining the highest levels of security and legal compliance.
          </p>
          <p className="text-muted-foreground">
            Today, we serve thousands of customers worldwide, from individual freelancers to large
            enterprises, helping them streamline their document workflows and close deals faster.
          </p>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Team collaboration"
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {values.map((value) => (
          <Card key={value.title}>
            <CardContent className="pt-6">
              <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We're always looking for talented individuals to join our team. Check out our careers page
          to see current openings and learn more about working at Doc Sign Hub.
        </p>
      </div>
    </div>
  );
}
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-muted-foreground text-lg">
          Have questions? We're here to help. Contact our support team.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 mt-1" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">support@docsign.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 mt-1" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MessageSquare className="h-6 w-6 mt-1" />
              <div>
                <h3 className="font-medium">Live Chat</h3>
                <p className="text-muted-foreground">Available Monday to Friday</p>
                <p className="text-muted-foreground">9:00 AM - 5:00 PM EST</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Office Location</h2>
            <Card>
              <CardHeader>
                <CardTitle>DocSign HQ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  123 Business Avenue<br />
                  Suite 456<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
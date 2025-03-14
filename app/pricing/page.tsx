'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for individuals and small teams getting started.",
    features: [
      "Up to 5 documents per month",
      "Basic signature tools",
      "Email notifications",
      "7-day document history",
    ],
  },
  {
    name: "Pro",
    price: "$12",
    description: "Ideal for growing businesses and professionals.",
    features: [
      "Unlimited documents",
      "Advanced signature tools",
      "Priority email support",
      "30-day document history",
      "Custom branding",
      "Team collaboration",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific requirements.",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "API access",
      "Custom integrations",
      "Advanced security features",
      "Unlimited document history",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Simple, transparent pricing</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Choose the perfect plan for your needs. All plans include our core features.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.name === "Pro" ? "default" : "outline"}>
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
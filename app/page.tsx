"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type PricingCardProps = {
  title: string;
  price: number;
  description: string;
  features: string[];
  actionLabel: string;
};

const PricingCard = ({title,price,description, features, actionLabel}:PricingCardProps) => (
  <Card className="max-w-80 space-y-6">
      <CardHeader className="pb-8 pt-4 gap-8">
        
          <CardTitle className="">
            {title}
          </CardTitle>
       
          <h3 className="text-3xl font-bold my-6">
           Rs {price}
          </h3>
      
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
      <CardDescription className="pt-1.5 h-12">{description}</CardDescription>

        {features.map((f,i)=>{
          return <span key={i} className="flex justify-center items-center gap-4 text-sm text-muted-foreground"><CheckCircle2 className="text-green-500 h-4 w-4" />{f}</span>
        })}
      </CardContent>
    <CardFooter className="mt-2">
      <Button className="w-full" asChild>
        <Link href={`/checkout/?amount=${price}`}>
        {actionLabel}

        </Link>
      </Button>
    </CardFooter>
  </Card>
);



export default function page() {
  const plans = [
    {
      title: "Basic",
      price:999,
      description: "Essential features you need to get started",
      features: [
        "Example Feature Number 1",
        "Example Feature Number 2",
        "Example Feature Number 3",
      ],
      actionLabel: "Get Basic",
    },
    {
      title: "Pro",
      price:5999,
      description: "Perfect for owners of small & medium businessess",
      features: [
        "Example Feature Number 1",
        "Example Feature Number 2",
        "Example Feature Number 3",
      ],
      actionLabel: "Get Pro",
    }
  ];
  return (
    <div className="container py-8 flex flex-col items-center justify-center text-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">Pricing Plans</h1>
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight"> Choose the plan that's right for you</h2>
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-20">
        {plans.map((plan) => {
          return <PricingCard key={plan.title} {...plan} />;
        })}
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  Users, 
  Code, 
  Palette, 
  Smartphone 
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      title: "Pro Blocks Components",
      description: "Ready-to-use application and landing page components built with shadcn/ui.",
      icon: <Zap className="size-6 text-primary" />,
      badge: "New",
    },
    {
      title: "Design System",
      description: "Comprehensive design tokens and theme system with dark mode support.",
      icon: <Palette className="size-6 text-primary" />,
    },
    {
      title: "Storybook Integration",
      description: "Full Storybook integration with interactive stories and documentation.",
      icon: <Code className="size-6 text-primary" />,
    },
    {
      title: "TypeScript Support",
      description: "Fully typed components with excellent developer experience.",
      icon: <Shield className="size-6 text-primary" />,
    },
    {
      title: "Responsive Design",
      description: "Mobile-first components that work perfectly on all devices.",
      icon: <Smartphone className="size-6 text-primary" />,
    },
    {
      title: "Team Ready",
      description: "Built for teams with consistent patterns and documentation.",
      icon: <Users className="size-6 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-400 to-primary-600 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Pro Blocks Design System
            </h1>
            <p className="mb-8 text-xl opacity-90">
              A comprehensive design system built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. 
              Featuring Pro Blocks components for rapid application development.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/test-pro-blocks">
                <Button size="lg" className="px-8 py-3 text-lg bg-white text-primary hover:bg-gray-100">
                  View Components
                </Button>
              </Link>
              <Link href="http://localhost:6006" target="_blank">
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-primary">
                  Open Storybook
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              What's included
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to build modern, responsive applications with confidence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    {feature.badge && (
                      <Badge variant="secondary">{feature.badge}</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Get started quickly
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our components and start building your next application.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>View Components</CardTitle>
                <CardDescription>
                  See all Pro Blocks components in action
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/test-pro-blocks">
                  <Button className="w-full">Test Components</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Storybook</CardTitle>
                <CardDescription>
                  Interactive documentation and testing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="http://localhost:6006" target="_blank">
                  <Button className="w-full">Open Storybook</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Documentation</CardTitle>
                <CardDescription>
                  Learn how to use the design system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="https://ui.shadcn.com" target="_blank">
                  <Button className="w-full">Read Docs</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui
          </p>
        </div>
      </footer>
    </div>
  );
}

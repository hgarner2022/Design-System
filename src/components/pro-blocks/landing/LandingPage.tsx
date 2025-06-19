"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Hero } from "./Hero"
import { Features } from "./Features"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Zap, 
  Shield, 
  Users, 
  Code, 
  Palette, 
  Smartphone,
  Check,
  Star
} from 'lucide-react'

interface LandingPageProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
  description?: string
  primaryAction?: {
    label: string
    href?: string
    onClick?: () => void
  }
  secondaryAction?: {
    label: string
    href?: string
    onClick?: () => void
  }
  showFeatures?: boolean
  showPricing?: boolean
  showTestimonials?: boolean
  showStats?: boolean
}

export function LandingPage({
  title = "Build something amazing",
  subtitle = "Welcome to Pro Blocks",
  description = "Create beautiful, responsive websites and applications with our design system. Built with modern technologies and best practices.",
  primaryAction,
  secondaryAction,
  showFeatures = true,
  showPricing = true,
  showTestimonials = true,
  showStats = true,
  className,
  ...props
}: LandingPageProps) {
  const features = [
    {
      title: "Lightning Fast",
      description: "Built with performance in mind. Our components load quickly and respond instantly to user interactions.",
      icon: <Zap className="size-6 text-primary" />,
      badge: "New",
    },
    {
      title: "Secure by Default",
      description: "Security is built into every component. We follow industry best practices to keep your data safe.",
      icon: <Shield className="size-6 text-primary" />,
    },
    {
      title: "Team Collaboration",
      description: "Designed for teams. Share components, maintain consistency, and build together faster.",
      icon: <Users className="size-6 text-primary" />,
    },
    {
      title: "Developer Experience",
      description: "Excellent TypeScript support, comprehensive documentation, and intuitive APIs.",
      icon: <Code className="size-6 text-primary" />,
    },
    {
      title: "Beautiful Design",
      description: "Carefully crafted components that look great out of the box and are easy to customize.",
      icon: <Palette className="size-6 text-primary" />,
    },
    {
      title: "Mobile First",
      description: "Responsive design that works perfectly on all devices, from mobile to desktop.",
      icon: <Smartphone className="size-6 text-primary" />,
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for getting started",
      features: [
        "Up to 10 components",
        "Basic documentation",
        "Community support",
        "MIT License",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      description: "For professional developers",
      features: [
        "Unlimited components",
        "Advanced documentation",
        "Priority support",
        "Commercial license",
        "Custom branding",
        "Analytics dashboard",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
        "Training sessions",
        "White-label options",
      ],
      popular: false,
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      company: "TechCorp",
      content: "Pro Blocks has transformed how we build our applications. The components are beautifully designed and incredibly easy to use.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "StartupXYZ",
      content: "We've reduced our development time by 60% since switching to Pro Blocks. The documentation is excellent and the support is outstanding.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "UI/UX Designer",
      company: "Design Studio",
      content: "The design system is incredibly flexible. We can easily customize it to match our brand while maintaining consistency across all our products.",
      rating: 5,
    },
  ]

  return (
    <div className={cn("min-h-screen", className)} {...props}>
      {/* Hero Section */}
      <Hero
        title={title}
        subtitle={subtitle}
        description={description}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        stats={showStats ? [
          { value: "10K+", label: "Active Users" },
          { value: "500+", label: "Components" },
          { value: "99.9%", label: "Uptime" },
        ] : undefined}
      />

      {/* Features Section */}
      {showFeatures && (
        <Features
          title="Why choose Pro Blocks?"
          subtitle="Features"
          description="Everything you need to build modern, responsive applications with confidence."
          features={features}
          columns={3}
          variant="cards"
        />
      )}

      {/* Pricing Section */}
      {showPricing && (
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Simple, transparent pricing
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the plan that's right for you and your team.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={cn(
                    "relative",
                    plan.popular && "ring-2 ring-primary"
                  )}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold">{plan.price}</div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <Check className="size-4 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {showTestimonials && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Loved by developers worldwide
              </h2>
              <p className="text-xl text-muted-foreground">
                See what our users have to say about Pro Blocks.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of developers building amazing applications with Pro Blocks.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button variant="secondary" size="lg">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent">
              View Documentation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 
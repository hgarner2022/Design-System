"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/card"

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
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
  background?: "gradient" | "solid" | "image"
  gradient?: "primary" | "secondary" | "success" | "danger" | "warning" | "info"
  image?: string
  imageAlt?: string
  stats?: Array<{
    value: string
    label: string
  }>
  children?: React.ReactNode
}

export function Hero({
  title = "Build something amazing",
  subtitle,
  description = "Create beautiful, responsive websites and applications with our design system. Built with modern technologies and best practices.",
  primaryAction,
  secondaryAction,
  background = "gradient",
  gradient = "primary",
  image,
  imageAlt,
  stats,
  children,
  className,
  ...props
}: HeroProps) {
  const gradientStyles = {
    primary: { background: "var(--gradient-primary)" },
    secondary: { background: "var(--gradient-secondary)" },
    success: { background: "var(--gradient-success)" },
    danger: { background: "var(--gradient-danger)" },
    warning: { background: "var(--gradient-warning)" },
    info: { background: "var(--gradient-info)" },
  }

  const handlePrimaryClick = () => {
    if (primaryAction?.onClick) {
      primaryAction.onClick()
    } else if (primaryAction?.href) {
      window.location.href = primaryAction.href
    }
  }

  const handleSecondaryClick = () => {
    if (secondaryAction?.onClick) {
      secondaryAction.onClick()
    } else if (secondaryAction?.href) {
      window.location.href = secondaryAction.href
    }
  }

  return (
    <section
      className={cn(
        "relative min-h-[600px] flex items-center justify-center overflow-hidden",
        background === "gradient" && "bg-gradient-to-br",
        background === "image" && image && "bg-cover bg-center bg-no-repeat",
        className
      )}
      style={
        background === "gradient"
          ? gradientStyles[gradient]
          : background === "image" && image
          ? { backgroundImage: `url(${image})` }
          : undefined
      }
      {...props}
    >
      {/* Background overlay for image */}
      {background === "image" && (
        <div className="absolute inset-0 bg-black/50" />
      )}

      <div className="container relative z-10 mx-auto px-4 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          {subtitle && (
            <p className="mb-4 text-lg font-medium text-muted-foreground">
              {subtitle}
            </p>
          )}
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          
          <p className="mb-8 text-xl text-muted-foreground">
            {description}
          </p>

          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            {primaryAction && (
              <Button
                size="lg"
                className="px-8 py-3 text-lg"
                onClick={handlePrimaryClick}
              >
                {primaryAction.label}
              </Button>
            )}
            
            {secondaryAction && (
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg"
                onClick={handleSecondaryClick}
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>

          {stats && stats.length > 0 && (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  )
} 
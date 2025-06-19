"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Feature {
  title: string
  description: string
  icon?: React.ReactNode
  badge?: string
  href?: string
  onClick?: () => void
}

interface FeaturesProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
  description?: string
  features: Feature[]
  columns?: 1 | 2 | 3 | 4
  variant?: "default" | "cards" | "list"
  align?: "left" | "center"
}

export function Features({
  title = "Features",
  subtitle,
  description,
  features,
  columns = 3,
  variant = "default",
  align = "left",
  className,
  ...props
}: FeaturesProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  const handleFeatureClick = (feature: Feature) => {
    if (feature.onClick) {
      feature.onClick()
    } else if (feature.href) {
      window.location.href = feature.href
    }
  }

  return (
    <section className={cn("py-16", className)} {...props}>
      <div className="container mx-auto px-4">
        <div className={cn("mx-auto max-w-3xl text-center mb-12", align === "left" && "text-left")}>
          {subtitle && (
            <p className="text-lg font-medium text-muted-foreground mb-2">
              {subtitle}
            </p>
          )}
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {title}
          </h2>
          
          {description && (
            <p className="text-xl text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        <div className={cn("grid gap-8", gridCols[columns])}>
          {features.map((feature, index) => (
            <div key={index} className="group">
              {variant === "cards" ? (
                <Card 
                  className={cn(
                    "h-full transition-all hover:shadow-lg",
                    (feature.href || feature.onClick) && "cursor-pointer hover:scale-105"
                  )}
                  onClick={() => handleFeatureClick(feature)}
                >
                  <CardHeader>
                    {feature.icon && (
                      <div className="mb-4 size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        {feature.icon}
                      </div>
                    )}
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
              ) : variant === "list" ? (
                <div 
                  className={cn(
                    "flex items-start gap-4 p-4 rounded-lg transition-colors",
                    (feature.href || feature.onClick) && "cursor-pointer hover:bg-accent"
                  )}
                  onClick={() => handleFeatureClick(feature)}
                >
                  {feature.icon && (
                    <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      {feature.badge && (
                        <Badge variant="secondary" className="ml-2">{feature.badge}</Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ) : (
                <div 
                  className={cn(
                    "text-center",
                    (feature.href || feature.onClick) && "cursor-pointer"
                  )}
                  onClick={() => handleFeatureClick(feature)}
                >
                  {feature.icon && (
                    <div className="mx-auto mb-4 size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  )}
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    {feature.badge && (
                      <Badge variant="secondary">{feature.badge}</Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
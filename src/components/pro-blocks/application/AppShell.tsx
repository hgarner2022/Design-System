"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ResizablePanelGroup, ResizablePanel } from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"

interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  sidebar?: React.ReactNode
  header?: React.ReactNode
  children?: React.ReactNode
}

export function AppShell({
  sidebar,
  header,
  children,
  className,
  ...props
}: AppShellProps) {
  return (
    <div
      className={cn(
        "grid h-screen grid-rows-[auto_1fr]",
        className
      )}
      {...props}
    >
      {header && (
        <>
          <header className="bg-background border-b px-6 py-3">
            {header}
          </header>
          <Separator />
        </>
      )}
      <ResizablePanelGroup direction="horizontal">
        {sidebar && (
          <>
            <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
              <ScrollArea className="h-screen">
                <div className="p-6">
                  {sidebar}
                </div>
              </ScrollArea>
            </ResizablePanel>
            <Separator orientation="vertical" />
          </>
        )}
        <ResizablePanel defaultSize={sidebar ? 80 : 100}>
          <ScrollArea className="h-screen">
            <main className="p-6">
              {children}
            </main>
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

interface AppShellHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: React.ReactNode
  actions?: React.ReactNode
}

export function AppShellHeader({
  logo,
  actions,
  children,
  className,
  ...props
}: AppShellHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4",
        className
      )}
      {...props}
    >
      {logo && (
        <div className="flex items-center gap-4">
          {logo}
        </div>
      )}
      {children && (
        <NavigationMenu>
          <NavigationMenuList>
            {React.Children.map(children, (child, index) => (
              <NavigationMenuItem key={index}>
                {child}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      )}
      {actions && (
        <div className="flex items-center gap-4">
          {actions}
        </div>
      )}
    </div>
  )
}

interface AppShellNavLinkProps extends React.ComponentProps<typeof NavigationMenuLink> {
  active?: boolean
}

export function AppShellNavLink({
  active,
  className,
  ...props
}: AppShellNavLinkProps) {
  return (
    <NavigationMenuLink
      className={cn(
        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
        active && "bg-accent/50",
        className
      )}
      {...props}
    />
  )
} 
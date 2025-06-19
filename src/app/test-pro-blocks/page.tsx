import { AppShell, AppShellHeader, AppShellNavLink } from "@/components/pro-blocks/application/AppShell"
import { Hero } from "@/components/pro-blocks/landing/Hero"
import { Features } from "@/components/pro-blocks/landing/Features"
import { LandingPage } from "@/components/pro-blocks/landing/LandingPage"
import { Button } from "@/components/ui/Button"
import { 
  Zap, 
  Shield, 
  Users, 
  Code, 
  Palette, 
  Smartphone 
} from 'lucide-react'

export default function TestProBlocksPage() {
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

  return (
    <div className="min-h-screen">
      {/* Test AppShell */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">AppShell Component</h2>
        <div className="h-96 border rounded-lg overflow-hidden">
          <AppShell
            header={
              <AppShellHeader
                logo={
                  <div className="flex items-center gap-2">
                    <div className="size-8 rounded-lg bg-primary"></div>
                    <span className="font-bold">Pro Blocks</span>
                  </div>
                }
                actions={
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Sign In</Button>
                    <Button size="sm">Get Started</Button>
                  </div>
                }
              >
                <AppShellNavLink href="#" active>Dashboard</AppShellNavLink>
                <AppShellNavLink href="#">Projects</AppShellNavLink>
                <AppShellNavLink href="#">Settings</AppShellNavLink>
              </AppShellHeader>
            }
            sidebar={
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium">Navigation</h3>
                  <div className="flex flex-col gap-1">
                    <Button variant="ghost" className="justify-start">Dashboard</Button>
                    <Button variant="ghost" className="justify-start">Projects</Button>
                    <Button variant="ghost" className="justify-start">Settings</Button>
                  </div>
                </div>
              </div>
            }
          >
            <div className="p-4">
              <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
              <p>This is the main content area of the AppShell component.</p>
            </div>
          </AppShell>
        </div>
      </div>

      {/* Test Hero */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Hero Component</h2>
        <Hero
          title="Test Hero Section"
          subtitle="Testing our components"
          description="This is a test of the Hero component with different configurations."
          primaryAction={{
            label: "Get Started",
            onClick: () => console.log("Hero primary action clicked"),
          }}
          secondaryAction={{
            label: "Learn More",
            onClick: () => console.log("Hero secondary action clicked"),
          }}
          stats={[
            { value: "10K+", label: "Active Users" },
            { value: "500+", label: "Components" },
            { value: "99.9%", label: "Uptime" },
          ]}
        />
      </div>

      {/* Test Features */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Features Component</h2>
        <Features
          title="Test Features"
          subtitle="Component showcase"
          description="Testing the Features component with different variants."
          features={features}
          columns={3}
          variant="cards"
        />
      </div>

      {/* Test LandingPage */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">LandingPage Component</h2>
        <LandingPage
          title="Complete Landing Page"
          subtitle="Full integration test"
          description="Testing the complete LandingPage component with all sections."
          primaryAction={{
            label: "Start Testing",
            onClick: () => console.log("Landing page primary action clicked"),
          }}
          showFeatures={true}
          showPricing={true}
          showTestimonials={true}
          showStats={true}
        />
      </div>
    </div>
  )
} 
import type { Meta, StoryObj } from '@storybook/react';
import { LandingPage } from './LandingPage';

const meta: Meta<typeof LandingPage> = {
  title: 'Pro Blocks/Landing/LandingPage',
  component: LandingPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    showFeatures: {
      control: { type: 'boolean' },
    },
    showPricing: {
      control: { type: 'boolean' },
    },
    showTestimonials: {
      control: { type: 'boolean' },
    },
    showStats: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LandingPage>;

export const Default: Story = {
  args: {
    title: "Build something amazing",
    subtitle: "Welcome to Pro Blocks",
    description: "Create beautiful, responsive websites and applications with our design system. Built with modern technologies and best practices.",
    primaryAction: {
      label: "Get Started",
      onClick: () => console.log("Get Started clicked"),
    },
    secondaryAction: {
      label: "Learn More",
      onClick: () => console.log("Learn More clicked"),
    },
    showFeatures: true,
    showPricing: true,
    showTestimonials: true,
    showStats: true,
  },
};

export const Minimal: Story = {
  args: {
    title: "Simple and clean",
    subtitle: "Minimal landing page",
    description: "A minimal landing page with just the essentials.",
    primaryAction: {
      label: "Get Started",
      onClick: () => console.log("Get Started clicked"),
    },
    showFeatures: false,
    showPricing: false,
    showTestimonials: false,
    showStats: false,
  },
};

export const FeaturesOnly: Story = {
  args: {
    title: "Feature showcase",
    subtitle: "See what we offer",
    description: "Focus on showcasing your product features.",
    primaryAction: {
      label: "Learn More",
      onClick: () => console.log("Learn More clicked"),
    },
    showFeatures: true,
    showPricing: false,
    showTestimonials: false,
    showStats: true,
  },
};

export const PricingFocus: Story = {
  args: {
    title: "Choose your plan",
    subtitle: "Simple pricing",
    description: "Clear pricing plans for different user needs.",
    primaryAction: {
      label: "Start Free Trial",
      onClick: () => console.log("Start Free Trial clicked"),
    },
    secondaryAction: {
      label: "Contact Sales",
      onClick: () => console.log("Contact Sales clicked"),
    },
    showFeatures: true,
    showPricing: true,
    showTestimonials: false,
    showStats: true,
  },
};

export const SocialProof: Story = {
  args: {
    title: "Trusted by thousands",
    subtitle: "Join the community",
    description: "See what others are saying about our platform.",
    primaryAction: {
      label: "Join Now",
      onClick: () => console.log("Join Now clicked"),
    },
    showFeatures: true,
    showPricing: false,
    showTestimonials: true,
    showStats: true,
  },
};

export const CustomContent: Story = {
  args: {
    title: "Custom landing page",
    subtitle: "Tailored for your needs",
    description: "A fully customizable landing page that adapts to your specific requirements and branding.",
    primaryAction: {
      label: "Customize Now",
      onClick: () => console.log("Customize Now clicked"),
    },
    secondaryAction: {
      label: "View Examples",
      onClick: () => console.log("View Examples clicked"),
    },
    showFeatures: true,
    showPricing: true,
    showTestimonials: true,
    showStats: true,
  },
}; 
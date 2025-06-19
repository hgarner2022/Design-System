import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Pro Blocks/Landing/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    background: {
      control: { type: 'select' },
      options: ['gradient', 'solid', 'image'],
    },
    gradient: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

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
  },
};

export const WithStats: Story = {
  args: {
    title: "Trusted by developers worldwide",
    subtitle: "Pro Blocks Design System",
    description: "Join thousands of developers who are building better products faster with our comprehensive design system.",
    primaryAction: {
      label: "Start Building",
      onClick: () => console.log("Start Building clicked"),
    },
    secondaryAction: {
      label: "View Documentation",
      onClick: () => console.log("View Documentation clicked"),
    },
    stats: [
      { value: "10K+", label: "Active Users" },
      { value: "500+", label: "Components" },
      { value: "99.9%", label: "Uptime" },
    ],
  },
};

export const SuccessGradient: Story = {
  args: {
    title: "Success is within reach",
    subtitle: "Achieve your goals",
    description: "Take the next step towards success with our proven tools and methodologies.",
    primaryAction: {
      label: "Start Today",
      onClick: () => console.log("Start Today clicked"),
    },
    gradient: "success",
  },
};

export const WarningGradient: Story = {
  args: {
    title: "Stay ahead of the curve",
    subtitle: "Innovation awaits",
    description: "Don't miss out on the latest trends and technologies that will shape the future.",
    primaryAction: {
      label: "Explore Now",
      onClick: () => console.log("Explore Now clicked"),
    },
    gradient: "warning",
  },
};

export const InfoGradient: Story = {
  args: {
    title: "Discover new possibilities",
    subtitle: "Knowledge is power",
    description: "Expand your horizons with our comprehensive resources and expert guidance.",
    primaryAction: {
      label: "Learn More",
      onClick: () => console.log("Learn More clicked"),
    },
    gradient: "info",
  },
};

export const SolidBackground: Story = {
  args: {
    title: "Clean and simple",
    subtitle: "Minimalist approach",
    description: "Sometimes less is more. Our clean design philosophy focuses on what matters most.",
    primaryAction: {
      label: "Get Started",
      onClick: () => console.log("Get Started clicked"),
    },
    background: "solid",
  },
};

export const Minimal: Story = {
  args: {
    title: "Just the essentials",
    description: "A simple hero section with minimal content for when you want to keep things clean and focused.",
    primaryAction: {
      label: "Continue",
      onClick: () => console.log("Continue clicked"),
    },
  },
};

export const NoActions: Story = {
  args: {
    title: "Information only",
    subtitle: "Read and learn",
    description: "Sometimes you just want to present information without any calls to action.",
  },
}; 
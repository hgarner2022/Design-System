import type { Meta, StoryObj } from '@storybook/react';
import { Features } from './Features';
import { 
  Zap, 
  Shield, 
  Users, 
  Code, 
  Palette, 
  Smartphone,
  Globe,
  Lock,
  Star,
  TrendingUp,
  Settings,
  Heart
} from 'lucide-react';

const meta: Meta<typeof Features> = {
  title: 'Pro Blocks/Landing/Features',
  component: Features,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'cards', 'list'],
    },
    columns: {
      control: { type: 'select' },
      options: [1, 2, 3, 4],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Features>;

const defaultFeatures = [
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
];

const premiumFeatures = [
  {
    title: "Global CDN",
    description: "Lightning-fast delivery worldwide with our global content delivery network.",
    icon: <Globe className="size-6 text-primary" />,
    badge: "Pro",
  },
  {
    title: "Advanced Security",
    description: "Enterprise-grade security features including encryption and access controls.",
    icon: <Lock className="size-6 text-primary" />,
    badge: "Pro",
  },
  {
    title: "Priority Support",
    description: "Get help when you need it with our dedicated support team.",
    icon: <Star className="size-6 text-primary" />,
    badge: "Pro",
  },
  {
    title: "Analytics Dashboard",
    description: "Track usage, performance, and user behavior with detailed analytics.",
    icon: <TrendingUp className="size-6 text-primary" />,
    badge: "Pro",
  },
  {
    title: "Custom Branding",
    description: "Customize colors, fonts, and styling to match your brand perfectly.",
    icon: <Settings className="size-6 text-primary" />,
    badge: "Pro",
  },
  {
    title: "Lifetime Updates",
    description: "Get all future updates and new features included with your purchase.",
    icon: <Heart className="size-6 text-primary" />,
    badge: "Pro",
  },
];

export const Default: Story = {
  args: {
    title: "Why choose Pro Blocks?",
    subtitle: "Features",
    description: "Everything you need to build modern, responsive applications with confidence.",
    features: defaultFeatures,
    columns: 3,
    variant: "default",
  },
};

export const Cards: Story = {
  args: {
    title: "Premium Features",
    subtitle: "Pro Plan",
    description: "Unlock advanced features and take your applications to the next level.",
    features: premiumFeatures,
    columns: 3,
    variant: "cards",
  },
};

export const List: Story = {
  args: {
    title: "Core Features",
    subtitle: "What's included",
    description: "All the essential features you need to get started building amazing applications.",
    features: defaultFeatures.slice(0, 4),
    columns: 1,
    variant: "list",
    align: "left",
  },
};

export const TwoColumns: Story = {
  args: {
    title: "Key Benefits",
    subtitle: "Why Pro Blocks?",
    description: "Discover what makes our design system the perfect choice for your next project.",
    features: defaultFeatures.slice(0, 4),
    columns: 2,
    variant: "default",
  },
};

export const FourColumns: Story = {
  args: {
    title: "All Features",
    subtitle: "Complete overview",
    description: "A comprehensive list of all available features in our design system.",
    features: defaultFeatures,
    columns: 4,
    variant: "default",
  },
};

export const Minimal: Story = {
  args: {
    title: "Simple Features",
    features: [
      {
        title: "Easy to Use",
        description: "Intuitive components that work out of the box.",
      },
      {
        title: "Well Documented",
        description: "Comprehensive documentation and examples for every component.",
      },
      {
        title: "Highly Customizable",
        description: "Easily customize colors, spacing, and styling to match your brand.",
      },
    ],
    columns: 3,
    variant: "default",
  },
};

export const WithClickHandlers: Story = {
  args: {
    title: "Interactive Features",
    subtitle: "Click to learn more",
    description: "Click on any feature to learn more about it.",
    features: defaultFeatures.map(feature => ({
      ...feature,
      onClick: () => console.log(`Clicked: ${feature.title}`),
    })),
    columns: 3,
    variant: "cards",
  },
}; 
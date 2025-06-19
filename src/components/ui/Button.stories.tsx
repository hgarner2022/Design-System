import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Design System/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    status: 'ready',
    docs: {
      description: {
        component: `
A versatile button component that supports different variants, sizes, and states.

## Accessibility
- Uses native button element
- Supports keyboard navigation
- ARIA labels for icon-only buttons
- Focus visible indicators

## Usage
\`\`\`tsx
import { Button } from "@/components/ui/Button"

function App() {
  return (
    <Button variant="default" size="default">
      Click Me
    </Button>
  )
}
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    children: {
      control: 'text',
      description: 'The content of the button',
    },
  },
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default button style.
 */
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

/**
 * Destructive buttons are used for destructive actions like delete.
 */
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete',
  },
};

/**
 * Secondary buttons are used for secondary actions.
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

/**
 * Outline buttons are used for less prominent actions.
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

/**
 * Ghost buttons are used for the least prominent actions.
 */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

/**
 * Link buttons appear as links but maintain button behavior.
 */
export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

/**
 * Buttons can be disabled to indicate they are not interactive.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

/**
 * Buttons come in different sizes to suit different contexts.
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">🔍</Button>
    </div>
  ),
};

/**
 * A playground for testing different button configurations.
 */
export const Playground: Story = {
  args: {
    variant: 'default',
    size: 'default',
    disabled: false,
    children: 'Playground Button',
  },
}; 
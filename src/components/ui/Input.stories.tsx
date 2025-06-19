import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Design System/Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    status: 'ready',
    docs: {
      description: {
        component: `
A flexible input component that supports different states and variations.

## Accessibility
- Uses native input element
- Supports form labels and descriptions
- Error states with ARIA attributes
- Focus management

## Usage
\`\`\`tsx
import { Input } from "@/components/ui/Input"

function App() {
  return (
    <Input
      type="text"
      placeholder="Enter your name"
      aria-label="Name"
    />
  )
}
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
      description: 'The type of input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default input style.
 */
export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
  },
};

/**
 * Email input with validation.
 */
export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter email address...',
  },
};

/**
 * Password input with hidden text.
 */
export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
  },
};

/**
 * Number input for numeric values.
 */
export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter number...',
  },
};

/**
 * Search input with search icon.
 */
export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
};

/**
 * Disabled input state.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};

/**
 * Input with error state.
 */
export const WithError: Story = {
  render: () => (
    <div className="space-y-2">
      <Input
        type="email"
        placeholder="Enter email..."
        className="border-red-500 focus-visible:ring-red-500"
      />
      <p className="text-sm text-red-500">Please enter a valid email address</p>
    </div>
  ),
};

/**
 * Input with label and helper text.
 */
export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        Email Address
        <Input
          type="email"
          placeholder="Enter email..."
          className="mt-1.5"
        />
      </label>
      <p className="text-sm text-muted-foreground">We'll never share your email.</p>
    </div>
  ),
};

/**
 * A playground for testing different input configurations.
 */
export const Playground: Story = {
  args: {
    type: 'text',
    placeholder: 'Playground input...',
    disabled: false,
  },
}; 
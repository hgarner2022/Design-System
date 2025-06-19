import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ColorPicker } from './ColorPicker'

const meta = {
  title: 'Design System/Atoms/ColorPicker',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
    status: 'ready',
    docs: {
      description: {
        component: `
A color picker component that allows users to select colors through a visual interface.
It provides both predefined color options and a custom color picker with RGB and hex input support.

## Accessibility
- Supports keyboard navigation
- Color values are displayed as hex codes for screen readers
- High contrast indicators for selected state

## Usage
\`\`\`tsx
import { ColorPicker } from "@/components/ui/ColorPicker"

function App() {
  const [color, setColor] = useState("#9333EA")
  return <ColorPicker value={color} onChange={setColor} />
}
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'color',
      description: 'The current color value in hex format',
    },
    onChange: {
      description: 'Callback function when the color changes',
    },
    defaultExpanded: {
      control: 'boolean',
      description: 'Whether the color picker should be expanded by default',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the component',
    }
  },
  decorators: [
    (Story) => (
      <div className="w-[400px] p-6 bg-background">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ColorPicker>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The default state of the ColorPicker shows a collapsed view with the current color.
 */
export const Default: Story = {
  args: {
    value: "#9333EA",
    onChange: () => {},
  },
  render: (args) => {
    const [color, setColor] = useState(args.value)
    return (
      <ColorPicker
        {...args}
        value={color}
        onChange={setColor}
      />
    )
  },
}

/**
 * The expanded state shows all color selection options including quick colors and the custom color picker.
 */
export const Expanded: Story = {
  args: {
    value: "#EC4899",
    onChange: () => {},
    defaultExpanded: true,
  },
  render: (args) => {
    const [color, setColor] = useState(args.value)
    return (
      <ColorPicker
        {...args}
        value={color}
        onChange={setColor}
      />
    )
  },
}

/**
 * A playground for testing different props and configurations.
 */
export const Playground: Story = {
  args: {
    value: '#9333EA',
    onChange: () => {},
    defaultExpanded: false,
  },
  render: (args) => {
    const [color, setColor] = useState(args.value)
    return (
      <ColorPicker
        {...args}
        value={color}
        onChange={setColor}
      />
    )
  },
}

/**
 * Example of using the ColorPicker in a theme customization scenario.
 */
export const ThemeCustomization: Story = {
  args: {
    value: "#9333EA",
    onChange: () => {},
  },
  render: () => {
    const [primaryColor, setPrimaryColor] = useState("#9333EA")
    const [accentColor, setAccentColor] = useState("#EC4899")
    
    return (
      <div className="space-y-6">
        <ColorPicker
          value={primaryColor}
          onChange={setPrimaryColor}
        />
        <ColorPicker
          value={accentColor}
          onChange={setAccentColor}
        />
        <div className="p-4 rounded-lg border border-border space-y-4">
          <h3 className="font-medium">Preview</h3>
          <div className="space-x-2">
            <button 
              className="px-4 py-2 rounded-md text-white transition-colors"
              style={{ backgroundColor: primaryColor }}
            >
              Primary Button
            </button>
            <button 
              className="px-4 py-2 rounded-md text-white transition-colors"
              style={{ backgroundColor: accentColor }}
            >
              Accent Button
            </button>
          </div>
        </div>
      </div>
    )
  },
} 
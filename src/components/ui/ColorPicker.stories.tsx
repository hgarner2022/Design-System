import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ColorPicker } from './ColorPicker'

const meta: Meta<typeof ColorPicker> = {
  title: 'UI/ColorPicker',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [color, setColor] = useState('#3b82f6')
    return (
      <div className="space-y-4">
        <ColorPicker
          value={color}
          onChange={setColor}
          placeholder="Choose a color"
        />
        <div className="text-sm text-muted-foreground font-sans">
          Selected color: {color}
        </div>
      </div>
    )
  },
}

export const WithInitialValue: Story = {
  render: () => {
    const [color, setColor] = useState('#ef4444')
    return (
      <div className="space-y-4">
        <ColorPicker
          value={color}
          onChange={setColor}
        />
        <div className="text-sm text-muted-foreground font-sans">
          Selected color: {color}
        </div>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: '#10b981',
  },
  render: (args) => (
    <ColorPicker {...args} />
  ),
}

export const CustomPlaceholder: Story = {
  render: () => {
    const [color, setColor] = useState('')
    return (
      <div className="space-y-4">
        <ColorPicker
          value={color}
          onChange={setColor}
          placeholder="Select your favorite color"
        />
        <div className="text-sm text-muted-foreground font-sans">
          {color ? `Selected: ${color}` : 'No color selected'}
        </div>
      </div>
    )
  },
}

export const Multiple: Story = {
  render: () => {
    const [colors, setColors] = useState(['#3b82f6', '#ef4444', '#10b981', '#f59e0b'])
    
    const updateColor = (index: number, newColor: string) => {
      const newColors = [...colors]
      newColors[index] = newColor
      setColors(newColors)
    }
    
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {colors.map((color, index) => (
            <div key={index} className="space-y-2">
              <ColorPicker
                value={color}
                onChange={(newColor) => updateColor(index, newColor)}
              />
              <div className="text-xs text-muted-foreground font-sans">
                Color {index + 1}: {color}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
} 
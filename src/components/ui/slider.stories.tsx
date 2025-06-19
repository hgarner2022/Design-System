import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './slider'

const meta: Meta<typeof Slider> = {
  title: 'UI/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: { type: 'object' },
    },
    max: {
      control: { type: 'number' },
    },
    step: {
      control: { type: 'number' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: [33],
    max: 100,
    step: 1,
  },
}

export const Range: Story = {
  args: {
    defaultValue: [20, 80],
    max: 100,
    step: 1,
  },
}

export const WithSteps: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 10,
  },
}

export const Multiple: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Volume</label>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Brightness</label>
        <Slider defaultValue={[75]} max={100} step={1} />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Price Range</label>
        <Slider defaultValue={[20, 80]} max={100} step={1} />
      </div>
    </div>
  ),
} 
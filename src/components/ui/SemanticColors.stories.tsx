import type { Meta, StoryObj } from '@storybook/react'
import { theme } from '../../lib/theme'

const meta = {
  title: 'Design System/Atoms/Semantic Colors',
  parameters: {
    layout: 'centered',
    status: 'ready',
    docs: {
      description: {
        component: `
Semantic colors provide consistent meaning across our design system. They help users understand the context and importance of different elements.

## Usage Guidelines

- **Success**: Use for positive actions, completed states, and confirmations
- **Warning**: Use for cautionary messages and potential issues
- **Error**: Use for error states, failed actions, and critical issues
- **Info**: Use for informational content and helpful tips

## Accessibility

All semantic colors meet WCAG contrast requirements and are tested for color blindness compatibility.
        `
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

/**
 * Success colors are used for positive actions and states.
 */
export const Success: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Success Colors</h3>
      <div className="grid grid-cols-5 gap-2">
        {Object.entries(theme.colors.success).map(([key, value]) => (
          <div key={key} className="text-center">
            <div 
              className="w-16 h-16 rounded-lg border border-gray-200 mb-2"
              style={{ backgroundColor: value }}
            />
            <div className="text-xs font-mono">{key}</div>
            <div className="text-xs text-gray-500">{value}</div>
          </div>
        ))}
      </div>
    </div>
  ),
}

/**
 * Warning colors are used for cautionary messages.
 */
export const Warning: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Warning Colors</h3>
      <div className="grid grid-cols-5 gap-2">
        {Object.entries(theme.colors.warning).map(([key, value]) => (
          <div key={key} className="text-center">
            <div 
              className="w-16 h-16 rounded-lg border border-gray-200 mb-2"
              style={{ backgroundColor: value }}
            />
            <div className="text-xs font-mono">{key}</div>
            <div className="text-xs text-gray-500">{value}</div>
          </div>
        ))}
      </div>
    </div>
  ),
}

/**
 * Error colors are used for error states and critical issues.
 */
export const Error: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Error Colors</h3>
      <div className="grid grid-cols-5 gap-2">
        {Object.entries(theme.colors.error).map(([key, value]) => (
          <div key={key} className="text-center">
            <div 
              className="w-16 h-16 rounded-lg border border-gray-200 mb-2"
              style={{ backgroundColor: value }}
            />
            <div className="text-xs font-mono">{key}</div>
            <div className="text-xs text-gray-500">{value}</div>
          </div>
        ))}
      </div>
    </div>
  ),
}

/**
 * Info colors are used for informational content.
 */
export const Info: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Info Colors</h3>
      <div className="grid grid-cols-5 gap-2">
        {Object.entries(theme.colors.info).map(([key, value]) => (
          <div key={key} className="text-center">
            <div 
              className="w-16 h-16 rounded-lg border border-gray-200 mb-2"
              style={{ backgroundColor: value }}
            />
            <div className="text-xs font-mono">{key}</div>
            <div className="text-xs text-gray-500">{value}</div>
          </div>
        ))}
      </div>
    </div>
  ),
}

/**
 * All semantic colors together for comparison.
 */
export const AllSemanticColors: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Success</h3>
        <div className="flex gap-2">
          {Object.entries(theme.colors.success).slice(0, 5).map(([key, value]) => (
            <div key={key} className="text-center">
              <div 
                className="w-12 h-12 rounded border border-gray-200 mb-1"
                style={{ backgroundColor: value }}
              />
              <div className="text-xs font-mono">{key}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Warning</h3>
        <div className="flex gap-2">
          {Object.entries(theme.colors.warning).slice(0, 5).map(([key, value]) => (
            <div key={key} className="text-center">
              <div 
                className="w-12 h-12 rounded border border-gray-200 mb-1"
                style={{ backgroundColor: value }}
              />
              <div className="text-xs font-mono">{key}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Error</h3>
        <div className="flex gap-2">
          {Object.entries(theme.colors.error).slice(0, 5).map(([key, value]) => (
            <div key={key} className="text-center">
              <div 
                className="w-12 h-12 rounded border border-gray-200 mb-1"
                style={{ backgroundColor: value }}
              />
              <div className="text-xs font-mono">{key}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Info</h3>
        <div className="flex gap-2">
          {Object.entries(theme.colors.info).slice(0, 5).map(([key, value]) => (
            <div key={key} className="text-center">
              <div 
                className="w-12 h-12 rounded border border-gray-200 mb-1"
                style={{ backgroundColor: value }}
              />
              <div className="text-xs font-mono">{key}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}

/**
 * Example usage of semantic colors in UI components.
 */
export const UsageExamples: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <div className="p-4 rounded-lg border" style={{ 
        backgroundColor: theme.colors.success[50], 
        borderColor: theme.colors.success[200],
        color: theme.colors.success[700]
      }}>
        <h4 className="font-semibold mb-1">Success Message</h4>
        <p className="text-sm">Your changes have been saved successfully.</p>
      </div>
      
      <div className="p-4 rounded-lg border" style={{ 
        backgroundColor: theme.colors.warning[50], 
        borderColor: theme.colors.warning[200],
        color: theme.colors.warning[700]
      }}>
        <h4 className="font-semibold mb-1">Warning Alert</h4>
        <p className="text-sm">Please review your input before proceeding.</p>
      </div>
      
      <div className="p-4 rounded-lg border" style={{ 
        backgroundColor: theme.colors.error[50], 
        borderColor: theme.colors.error[200],
        color: theme.colors.error[700]
      }}>
        <h4 className="font-semibold mb-1">Error State</h4>
        <p className="text-sm">Unable to save changes. Please try again.</p>
      </div>
      
      <div className="p-4 rounded-lg border" style={{ 
        backgroundColor: theme.colors.info[50], 
        borderColor: theme.colors.info[200],
        color: theme.colors.info[700]
      }}>
        <h4 className="font-semibold mb-1">Info Notice</h4>
        <p className="text-sm">New features are available in the latest update.</p>
      </div>
    </div>
  ),
} 
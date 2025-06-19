import type { Meta, StoryObj } from '@storybook/react'
import { theme } from '@/lib/theme'

const meta = {
  title: 'Design System/Atoms/SemanticColors',
  parameters: {
    layout: 'padded',
    status: 'ready',
    docs: {
      description: {
        component: `
Semantic color tokens that provide consistent meaning across the design system.
These colors are used to convey specific states and meanings in the interface.

## Color Meanings
- **Primary**: Main brand color and primary actions
- **Success**: Positive states, confirmations, and successful actions
- **Warning**: Caution states and non-critical warnings
- **Error**: Error states, destructive actions, and critical issues
- **Info**: Informational states and neutral actions

## Usage
\`\`\`tsx
import { theme } from "@/lib/theme"

// Using semantic colors
const primaryColor = theme.colors.primary[500] // #9333EA
const successColor = theme.colors.success[500] // #22C55E
const errorColor = theme.colors.error[500]     // #EF4444
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

/**
 * Overview of all semantic color palettes available in the design system.
 */
export const Overview: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Semantic Color Palettes</h2>
        <p className="text-gray-600 mb-8">
          Our design system uses semantic colors to ensure consistent meaning across all components.
          Each color has a specific purpose and should be used appropriately.
        </p>
      </div>

      {/* Primary Colors */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Primary Colors</h3>
        <p className="text-sm text-gray-600 mb-4">
          Used for main brand elements, primary actions, and key interface elements.
        </p>
        <div className="grid grid-cols-5 gap-2">
          {Object.entries(theme.colors.primary).map(([key, value]) => (
            <div key={key} className="text-center">
              <div 
                className="w-full h-16 rounded-lg border border-gray-200 mb-2"
                style={{ backgroundColor: value }}
              />
              <div className="text-xs font-mono">{key}</div>
              <div className="text-xs text-gray-500">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Colors */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Success Colors</h3>
        <p className="text-sm text-gray-600 mb-4">
          Used for positive states, confirmations, and successful actions.
        </p>
        <div className="grid grid-cols-5 gap-2">
          {Object.entries(theme.colors.success).map(([key, value]) => (
            <div key={key} className="text-center">
              <div 
                className="w-full h-16 rounded-lg border border-gray-200 mb-2"
                style={{ backgroundColor: value }}
              />
              <div className="text-xs font-mono">{key}</div>
              <div className="text-xs text-gray-500">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Warning Colors */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Warning Colors</h3>
        <p className="text-sm text-gray-600 mb-4">
          Used for caution states and non-critical warnings.
        </p>
        <div className="grid grid-cols-5 gap-2">
          {Object.entries(theme.colors.warning).map(([key, value]) => (
            <div key={key} className="text-center">
              <div 
                className="w-full h-16 rounded-lg border border-gray-200 mb-2"
                style={{ backgroundColor: value }}
              />
              <div className="text-xs font-mono">{key}</div>
              <div className="text-xs text-gray-500">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Error Colors */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Error Colors</h3>
        <p className="text-sm text-gray-600 mb-4">
          Used for error states, destructive actions, and critical issues.
        </p>
        <div className="grid grid-cols-5 gap-2">
          {Object.entries(theme.colors.error).map(([key, value]) => (
            <div key={key} className="text-center">
              <div 
                className="w-full h-16 rounded-lg border border-gray-200 mb-2"
                style={{ backgroundColor: value }}
              />
              <div className="text-xs font-mono">{key}</div>
              <div className="text-xs text-gray-500">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Colors */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Info Colors</h3>
        <p className="text-sm text-gray-600 mb-4">
          Used for informational states and neutral actions.
        </p>
        <div className="grid grid-cols-5 gap-2">
          {Object.entries(theme.colors.info).map(([key, value]) => (
            <div key={key} className="text-center">
              <div 
                className="w-full h-16 rounded-lg border border-gray-200 mb-2"
                style={{ backgroundColor: value }}
              />
              <div className="text-xs font-mono">{key}</div>
              <div className="text-xs text-gray-500">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}

/**
 * Examples of how semantic colors are used in common UI patterns.
 */
export const UsageExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">Usage Examples</h2>

      {/* Buttons */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Buttons</h3>
        <div className="flex flex-wrap gap-3">
          <button 
            className="px-4 py-2 rounded-md text-white font-medium"
            style={{ backgroundColor: theme.colors.primary[500] }}
          >
            Primary Action
          </button>
          <button 
            className="px-4 py-2 rounded-md text-white font-medium"
            style={{ backgroundColor: theme.colors.success[500] }}
          >
            Success Action
          </button>
          <button 
            className="px-4 py-2 rounded-md text-white font-medium"
            style={{ backgroundColor: theme.colors.warning[500] }}
          >
            Warning Action
          </button>
          <button 
            className="px-4 py-2 rounded-md text-white font-medium"
            style={{ backgroundColor: theme.colors.error[500] }}
          >
            Destructive Action
          </button>
          <button 
            className="px-4 py-2 rounded-md text-white font-medium"
            style={{ backgroundColor: theme.colors.info[500] }}
          >
            Info Action
          </button>
        </div>
      </div>

      {/* Alerts */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Alerts</h3>
        <div className="space-y-3">
          <div 
            className="p-4 rounded-lg border-l-4"
            style={{ 
              backgroundColor: theme.colors.success[50],
              borderLeftColor: theme.colors.success[500]
            }}
          >
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5" style={{ color: theme.colors.success[500] }} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm" style={{ color: theme.colors.success[700] }}>
                  Your changes have been saved successfully.
                </p>
              </div>
            </div>
          </div>

          <div 
            className="p-4 rounded-lg border-l-4"
            style={{ 
              backgroundColor: theme.colors.warning[50],
              borderLeftColor: theme.colors.warning[500]
            }}
          >
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5" style={{ color: theme.colors.warning[500] }} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm" style={{ color: theme.colors.warning[700] }}>
                  Please review your information before proceeding.
                </p>
              </div>
            </div>
          </div>

          <div 
            className="p-4 rounded-lg border-l-4"
            style={{ 
              backgroundColor: theme.colors.error[50],
              borderLeftColor: theme.colors.error[500]
            }}
          >
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5" style={{ color: theme.colors.error[500] }} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm" style={{ color: theme.colors.error[700] }}>
                  There was an error processing your request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Indicators */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Status Indicators</h3>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: theme.colors.success[500] }}
            />
            <span className="text-sm">Online</span>
          </div>
          <div className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: theme.colors.warning[500] }}
            />
            <span className="text-sm">Away</span>
          </div>
          <div className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: theme.colors.error[500] }}
            />
            <span className="text-sm">Offline</span>
          </div>
          <div className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: theme.colors.info[500] }}
            />
            <span className="text-sm">Busy</span>
          </div>
        </div>
      </div>
    </div>
  ),
}

/**
 * Interactive playground for testing semantic colors.
 */
export const Playground: Story = {
  render: () => {
    const colorTypes = ['primary', 'success', 'warning', 'error', 'info'] as const
    const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] as const
    
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Color Playground</h2>
        <p className="text-gray-600">
          Explore different semantic colors and their shades. Click on any color to copy its hex value.
        </p>
        
        <div className="space-y-4">
          {colorTypes.map((colorType) => (
            <div key={colorType}>
              <h3 className="text-lg font-semibold mb-3 capitalize">{colorType} Colors</h3>
              <div className="grid grid-cols-5 gap-2">
                {shades.map((shade) => {
                  const colorValue = theme.colors[colorType][shade]
                  return (
                    <button
                      key={shade}
                      className="text-center group"
                      onClick={() => navigator.clipboard.writeText(colorValue)}
                      title={`Click to copy ${colorValue}`}
                    >
                      <div 
                        className="w-full h-16 rounded-lg border border-gray-200 mb-2 transition-transform group-hover:scale-105"
                        style={{ backgroundColor: colorValue }}
                      />
                      <div className="text-xs font-mono">{shade}</div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-700">{colorValue}</div>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
} 
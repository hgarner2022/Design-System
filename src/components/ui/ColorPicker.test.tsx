import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ColorPicker } from './ColorPicker'

describe('ColorPicker', () => {
  it('renders with default props', () => {
    render(<ColorPicker />)
    const colorInput = screen.getByRole('textbox')
    expect(colorInput).toBeInTheDocument()
    expect(colorInput).toHaveAttribute('type', 'color')
  })

  it('renders with initial value', () => {
    const testColor = '#ff0000'
    render(<ColorPicker value={testColor} />)
    const colorInput = screen.getByRole('textbox')
    expect(colorInput).toHaveValue(testColor)
  })

  it('calls onChange when color is changed', () => {
    const mockOnChange = vi.fn()
    const testColor = '#00ff00'
    render(<ColorPicker onChange={mockOnChange} />)
    
    const colorInput = screen.getByRole('textbox')
    fireEvent.change(colorInput, { target: { value: testColor } })
    
    expect(mockOnChange).toHaveBeenCalledWith(testColor)
  })

  it('renders disabled state', () => {
    render(<ColorPicker disabled />)
    const colorInput = screen.getByRole('textbox')
    expect(colorInput).toBeDisabled()
  })

  it('renders with custom placeholder', () => {
    const placeholder = 'Custom placeholder'
    render(<ColorPicker placeholder={placeholder} />)
    expect(screen.getByText(placeholder)).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const customClass = 'custom-class'
    render(<ColorPicker className={customClass} />)
    const colorInput = screen.getByRole('textbox')
    expect(colorInput).toHaveClass(customClass)
  })
}) 
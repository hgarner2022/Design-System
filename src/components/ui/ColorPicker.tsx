"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ColorPickerProps {
  value?: string
  onChange?: (color: string) => void
  className?: string
  disabled?: boolean
  placeholder?: string
}

const ColorPicker = React.forwardRef<HTMLInputElement, ColorPickerProps>(
  ({ value, onChange, className, disabled, placeholder = "Pick a color", ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value)
    }

    return (
      <div className={cn("relative", className)}>
        <input
          ref={ref}
          type="color"
          value={value || "#000000"}
          onChange={handleChange}
          disabled={disabled}
          className={cn(
            "h-10 w-full cursor-pointer appearance-none rounded-md border border-border bg-surface p-2",
            "focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "dark:focus:ring-offset-background",
            className
          )}
          {...props}
        />
        {!value && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="text-sm text-muted-foreground font-sans">
              {placeholder}
            </span>
          </div>
        )}
      </div>
    )
  }
)

ColorPicker.displayName = "ColorPicker"

export { ColorPicker } 
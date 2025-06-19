"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Label } from "./label"
import { Input } from "./Input"

interface ColorPickerProps {
  value: string
  onChange: (color: string) => void
  className?: string
  defaultExpanded?: boolean
}

const quickColors = [
  '#9333EA', // Updated primary color
  '#EC4899',
  '#F59E0B',
  '#EF4444',
  '#3B82F6',
  '#10B981',
  '#6B7280',
  '#000000'
]

export function ColorPicker({ value, onChange, className = "", defaultExpanded = false }: ColorPickerProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const [isDragging, setIsDragging] = useState(false)
  const [dragType, setDragType] = useState<'picker' | 'hue' | null>(null)
  const pickerRef = useRef<HTMLDivElement>(null)
  const hueRef = useRef<HTMLDivElement>(null)

  // Simple color conversion functions
  const hexToHsv = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255
    const g = parseInt(hex.slice(3, 5), 16) / 255
    const b = parseInt(hex.slice(5, 7), 16) / 255
    
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const diff = max - min
    
    let h = 0
    if (diff !== 0) {
      if (max === r) h = ((g - b) / diff) % 6
      else if (max === g) h = (b - r) / diff + 2
      else h = (r - g) / diff + 4
    }
    h = Math.round(h * 60)
    if (h < 0) h += 360
    
    const s = max === 0 ? 0 : (diff / max) * 100
    const v = max * 100
    
    return { h, s, v }
  }

  const hsvToHex = (h: number, s: number, v: number) => {
    s = s / 100
    v = v / 100
    
    const c = v * s
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
    const m = v - c
    
    let r, g, b
    if (h >= 0 && h < 60) [r, g, b] = [c, x, 0]
    else if (h >= 60 && h < 120) [r, g, b] = [x, c, 0]
    else if (h >= 120 && h < 180) [r, g, b] = [0, c, x]
    else if (h >= 180 && h < 240) [r, g, b] = [0, x, c]
    else if (h >= 240 && h < 300) [r, g, b] = [x, 0, c]
    else [r, g, b] = [c, 0, x]
    
    const toHex = (n: number) => {
      const hex = Math.round((n + m) * 255).toString(16)
      return hex.length === 1 ? '0' + hex : hex
    }
    
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
  }

  const currentHsv = hexToHsv(value)

  const handlePickerMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    setDragType('picker')
    handlePickerMove(e)
  }

  const handleHueMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    setDragType('hue')
    handleHueMove(e)
  }

  const handlePickerMove = (e: React.MouseEvent | MouseEvent) => {
    if (!pickerRef.current) return
    
    const rect = pickerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left))
    const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top))
    
    const s = (x / rect.width) * 100
    const v = ((rect.height - y) / rect.height) * 100
    
    const newColor = hsvToHex(currentHsv.h, s, v)
    onChange(newColor)
  }

  const handleHueMove = (e: React.MouseEvent | MouseEvent) => {
    if (!hueRef.current) return
    
    const rect = hueRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left))
    const h = (x / rect.width) * 360
    
    const newColor = hsvToHex(h, currentHsv.s, currentHsv.v)
    onChange(newColor)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      
      if (dragType === 'picker') {
        handlePickerMove(e)
      } else if (dragType === 'hue') {
        handleHueMove(e)
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      setDragType(null)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, dragType, currentHsv])

  // Create the picker background with the current hue
  const pickerBackground = `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, hsl(${currentHsv.h}, 100%, 50%))`
  
  // Calculate picker position
  const pickerX = (currentHsv.s / 100) * 100
  const pickerY = 100 - (currentHsv.v / 100) * 100
  
  // Calculate hue position
  const hueX = (currentHsv.h / 360) * 100

  return (
    <div className={`w-full max-w-[400px] ${className}`}>
      {/* Header Button */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left group p-3 rounded-lg hover:bg-accent/50 transition-smooth -m-3"
      >
        <div className="space-y-1.5">
          <Label className="cursor-pointer font-medium">Primary Color</Label>
          {!isExpanded && <p className="text-sm text-muted-foreground leading-relaxed">The main color used for buttons and interactive elements</p>}
        </div>
        <div className="flex items-center space-x-3">
          <div 
            className="w-8 h-8 rounded-full border-2 border-white shadow-soft relative overflow-hidden transition-transform-smooth group-hover:scale-105"
            style={{ 
              background: 'conic-gradient(from 0deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)'
            }}
          >
            <div 
              className="absolute inset-0.5 rounded-full"
              style={{ backgroundColor: value }}
            />
          </div>
          {isExpanded ? 
            <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors-smooth" /> : 
            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors-smooth" />
          }
        </div>
      </button>
      
      {isExpanded && (
        <div className="space-y-6 pt-2">
          <div>
            <Label className="text-sm mb-3 block font-medium">Quick Colors</Label>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
              {quickColors.map((color) => (
                <button
                  key={color}
                  className={`aspect-square w-full rounded-lg border shadow-sm transition-all hover:scale-105 ${
                    value === color 
                      ? 'border-foreground ring-1 ring-foreground/20' 
                      : 'border-border hover:border-foreground/50'
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => onChange(color)}
                  title={color}
                />
              ))}
            </div>
          </div>
          
          <div>
            <Label className="text-sm mb-3 block font-medium">Custom Color</Label>
            <div className="p-4 bg-accent/30 border border-border rounded-xl space-y-4">
              {/* Main Color Picker */}
              <div className="relative">
                <div
                  ref={pickerRef}
                  className="w-full h-48 rounded-xl border border-border cursor-crosshair relative overflow-hidden"
                  style={{ background: pickerBackground }}
                  onMouseDown={handlePickerMouseDown}
                >
                  {/* Picker indicator */}
                  <div
                    className="absolute w-4 h-4 border-2 border-white rounded-full transform -translate-x-2 -translate-y-2 pointer-events-none shadow-sm"
                    style={{
                      left: `${pickerX}%`,
                      top: `${pickerY}%`,
                    }}
                  />
                </div>
              </div>

              {/* Hue Strip */}
              <div className="relative">
                <div
                  ref={hueRef}
                  className="w-full h-6 rounded-lg border border-border cursor-pointer relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(to right, #ff0000 0%, #ffff00 16.66%, #00ff00 33.33%, #00ffff 50%, #0000ff 66.66%, #ff00ff 83.33%, #ff0000 100%)'
                  }}
                  onMouseDown={handleHueMouseDown}
                >
                  {/* Hue indicator */}
                  <div
                    className="absolute w-4 h-6 border-2 border-white rounded-sm transform -translate-x-2 pointer-events-none shadow-sm"
                    style={{
                      left: `${hueX}%`,
                    }}
                  />
                </div>
              </div>

              {/* Hex Input */}
              <div className="relative">
                <Input
                  value={value}
                  onChange={(e) => {
                    const hex = e.target.value
                    if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
                      onChange(hex)
                    }
                  }}
                  className="font-mono"
                />
                <div 
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-border"
                  style={{ backgroundColor: value }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 
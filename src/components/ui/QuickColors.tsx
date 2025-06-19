import { cn } from "@/lib/utils";

interface QuickColorsProps {
  selectedColor: string;
  onColorSelect: (color: string) => void;
  className?: string;
}

const PREDEFINED_COLORS = [
  "#ef4444", "#f97316", "#eab308", "#22c55e",
  "#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899"
];

export function QuickColors({ selectedColor, onColorSelect, className }: QuickColorsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      {PREDEFINED_COLORS.map((color) => (
        <button
          key={color}
          className={cn(
            "w-8 h-8 rounded-md border-2 shadow-soft transition-smooth hover:scale-110",
            selectedColor === color 
              ? "border-foreground ring-2 ring-foreground/20 shadow-medium" 
              : "border-border hover:border-foreground/50"
          )}
          style={{ backgroundColor: color }}
          onClick={() => onColorSelect(color)}
          title={color}
        />
      ))}
    </div>
  );
} 
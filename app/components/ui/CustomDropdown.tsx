import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  className?: string;
}

export function CustomDropdown({
  options,
  value,
  onChange,
  label,
  className,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
        {label && (
            <label className="block text-sm font-medium text-cmpt_muted-foreground mb-2">
            {label}
            </label>
        )}

        {/* Dropdown Button */}
        <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
            "w-full flex items-center justify-between gap-2 px-4 py-2.5",
            "bg-cmpt_secondary/50 border border-cmpt_border rounded-cmpt_md",
            "text-cmpt_foreground text-sm font-medium",
            "hover:bg-cmpt_secondary/80 hover:border-cmpt_primary/30",
            "focus:outline-none focus:ring-2 focus:ring-cmpt_primary/30",
            "transition-all duration-200"
            )}
        >
            <span>{selectedOption?.label}</span>

            <ChevronDown
            className={cn(
                "w-4 h-4 text-cmpt_muted-foreground transition-transform duration-200",
                isOpen && "rotate-180"
            )}
            />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
            <div
            className={cn(
                "absolute z-50 w-full mt-2 py-1",
                "bg-cmpt_popover border border-cmpt_border rounded-cmpt_md shadow-xl",
                "animate-slide-down"
            )}
            >
            {options.map((option) => (
                <button
                key={option.value}
                type="button"
                onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                }}
                className={cn(
                    "w-full px-4 py-2.5 text-left text-sm transition-colors duration-150",

                    // Selected item
                    option.value === value
                    ? "text-cmpt_primary font-medium bg-cmpt_primary/10"
                    : "text-cmpt_foreground hover:bg-cmpt_secondary/50"
                )}
                >
                {option.label}
                </button>
            ))}
            </div>
        )}
    </div>
  );
}
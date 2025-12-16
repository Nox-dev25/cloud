import { cn } from "@/lib/utils";

interface PricingToggleProps {
  value: "monthly" | "hourly";
  onChange: (value: "monthly" | "hourly") => void;
  className?: string;
}

export function PricingToggle({ value, onChange, className }: PricingToggleProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
        <label className="block text-sm font-medium text-cmpt_muted-foreground">
            Pricing Interval
        </label>

        <div className="relative flex items-center bg-cmpt_secondary/50 border border-cmpt_border rounded-cmpt_md p-1">
            {/* Sliding background */}
            <div
            className={cn(
                "absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-cmpt_primary rounded-cmpt_sm",
                "transition-all duration-300 ease-out",
                value === "monthly" ? "left-1" : "left-[calc(50%+2px)]"
            )}
            />

            {/* Monthly button */}
            <button
            type="button"
            onClick={() => onChange("monthly")}
            className={cn(
                "relative z-10 flex-1 px-4 py-2 text-sm font-medium rounded-cmpt_sm",
                "transition-colors duration-300",
                value === "monthly"
                ? "text-cmpt_primary-foreground"
                : "text-cmpt_muted-foreground hover:text-cmpt_foreground"
            )}
            >
            Monthly
            </button>

            {/* Hourly button */}
            <button
            type="button"
            onClick={() => onChange("hourly")}
            className={cn(
                "relative z-10 flex-1 px-4 py-2 text-sm font-medium rounded-cmpt_sm",
                "transition-colors duration-300",
                value === "hourly"
                ? "text-cmpt_primary-foreground"
                : "text-cmpt_muted-foreground hover:text-cmpt_foreground"
            )}
            >
            Hourly
            </button>
        </div>
    </div>
  );
}
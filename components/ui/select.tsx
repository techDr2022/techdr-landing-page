"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectContextValue {
  value: string;
  onValueChange: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SelectContext = React.createContext<SelectContextValue | null>(null);

const useSelect = () => {
  const ctx = React.useContext(SelectContext);
  if (!ctx) throw new Error("Select components must be used within Select");
  return ctx;
};

interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

function Select({ value = "", onValueChange, children, className }: SelectProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <SelectContext.Provider
      value={{
        value,
        onValueChange: onValueChange ?? (() => {}),
        open,
        setOpen,
      }}
    >
      <div className={cn("relative", className)}>{children}</div>
    </SelectContext.Provider>
  );
}

const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { placeholder?: string }
>(({ className, placeholder = "Select...", children, ...props }, ref) => {
  const { value, setOpen, open } = useSelect();
  return (
    <button
      ref={ref}
      type="button"
      onClick={() => setOpen(!open)}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className
      )}
      {...props}
    >
      {children ?? (value ? value : placeholder)}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  );
});
SelectTrigger.displayName = "SelectTrigger";

interface SelectContentProps {
  children: React.ReactNode;
  className?: string;
}

function SelectContent({ children, className }: SelectContentProps) {
  const { open, setOpen } = useSelect();
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-border bg-background py-1 shadow-soft-lg",
        className
      )}
    >
      {children}
    </div>
  );
}

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

function SelectItem({ value, children, className }: SelectItemProps) {
  const { value: selected, onValueChange, setOpen } = useSelect();
  return (
    <div
      role="option"
      aria-selected={selected === value}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-md py-2 pl-3 pr-8 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      )}
      onClick={() => {
        onValueChange(value);
        setOpen(false);
      }}
    >
      {children}
    </div>
  );
}

export { Select, SelectTrigger, SelectContent, SelectItem };

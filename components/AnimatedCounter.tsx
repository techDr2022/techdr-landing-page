"use client";

import { useEffect, useState } from "react";

type AnimatedCounterProps = {
  value: string;
  duration?: number;
  className?: string;
};

export function AnimatedCounter({
  value,
  duration = 2000,
  className = "",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    // Extract number and suffix/prefix from value
    const match = value.match(/([+\-]?)(\d+\.?\d*)([%×]?)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const targetNum = parseFloat(numStr);
    const isPercentage = suffix === "%";
    const isMultiplier = suffix === "×" || value.includes("×");

    if (isNaN(targetNum)) {
      setDisplayValue(value);
      return;
    }

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      let currentValue = startValue + (targetNum - startValue) * easeOutQuart;

      if (isPercentage) {
        setDisplayValue(`${prefix}${Math.round(currentValue)}${suffix}`);
      } else if (isMultiplier) {
        setDisplayValue(`${currentValue.toFixed(1)}×`);
      } else {
        setDisplayValue(`${prefix}${Math.round(currentValue)}${suffix || ""}`);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animate();
  }, [value, duration]);

  return <span className={className}>{displayValue}</span>;
}

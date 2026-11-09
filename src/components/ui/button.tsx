"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg" | "sm";
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      children,
      href,
      target,
      rel,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "spotlight-card relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer";

    const variants = {
      primary:
        "bg-white/[0.08] hover:bg-white/[0.12] text-white border border-white/[0.14] shadow-[0_0_24px_rgba(255,255,255,0.08)]",
      secondary:
        "bg-white/[0.035] hover:bg-white/[0.06] text-[#e5e5e5] hover:text-white border border-white/[0.10] hover:border-white/20",
      ghost:
        "text-text-secondary hover:text-white hover:bg-white/5 border border-transparent",
    };

    const sizes = {
      sm: "px-4 py-2 text-body-sm gap-2",
      default: "px-6 py-3 text-body-sm gap-2",
      lg: "px-8 py-4 text-body gap-3",
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <motion.a
          href={href}
          target={target}
          rel={rel}
          className={combinedClassName}
          data-spotlight
          onClick={onClick as any}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 inline-flex items-center justify-center gap-[inherit] w-full">
            {children}
          </span>
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        data-spotlight
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      >
        <span className="relative z-10 inline-flex items-center justify-center gap-[inherit] w-full">
          {children}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";

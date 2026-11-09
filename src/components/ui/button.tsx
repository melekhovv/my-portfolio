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
      "spotlight-card relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer whitespace-nowrap select-none backdrop-blur-md";

    const variants = {
      primary:
        "text-white bg-gradient-to-b from-white/[0.18] to-white/[0.08] hover:from-white/[0.26] hover:to-white/[0.13] border border-white/35 hover:border-white/55 shadow-[0_0_35px_rgba(255,255,255,0.18),inset_0_1px_0_0_rgba(255,255,255,0.48)] hover:shadow-[0_0_48px_rgba(255,255,255,0.28),inset_0_1px_0_0_rgba(255,255,255,0.7)]",
      secondary:
        "text-[#e5e5e5] hover:text-white bg-white/[0.035] hover:bg-white/[0.07] border border-white/[0.12] hover:border-white/25",
      ghost:
        "text-text-secondary hover:text-white hover:bg-white/5 border border-transparent",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs gap-1.5",
      default: "h-11 px-6 text-sm gap-2",
      lg: "min-h-[50px] px-8 py-3.5 text-sm sm:text-base gap-3",
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

"use client";

import React from "react";
import { cn } from "@/lib/utils";
import SpecularButton, { SpecularButtonProps } from "./SpecularButton";

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
    const variantStyles = {
      primary: {
        tint: "#ffffff",
        tintOpacity: 0.12,
        textColor: "#ffffff",
        lineColor: "#ffffff",
        baseColor: "#666666",
        intensity: 1.15,
        idleIntensity: 0.25,
        thickness: 1.3,
        glow: 1.1,
      },
      secondary: {
        tint: "#ffffff",
        tintOpacity: 0.04,
        textColor: "#e5e5e5",
        lineColor: "#ffffff",
        baseColor: "#404040",
        intensity: 0.95,
        idleIntensity: 0.2,
        thickness: 1.2,
        glow: 0.8,
      },
      ghost: {
        tint: "#ffffff",
        tintOpacity: 0.01,
        textColor: "#a3a3a3",
        lineColor: "#ffffff",
        baseColor: "#262626",
        intensity: 0.7,
        idleIntensity: 0.1,
        thickness: 1.0,
        glow: 0.5,
      },
    }[variant];

    const sizeMap = {
      sm: "sm" as const,
      default: "md" as const,
      lg: "lg" as const,
    }[size];

    return (
      <SpecularButton
        href={href}
        target={target}
        rel={rel}
        size={sizeMap}
        radius={12}
        className={cn(
          "font-medium tracking-tight transition-transform duration-200 active:scale-[0.98]",
          variant === "primary" && "shadow-[0_0_24px_rgba(255,255,255,0.08)]",
          className
        )}
        onClick={onClick}
        {...variantStyles}
        {...(props as any)}
      >
        {children}
      </SpecularButton>
    );
  }
);

Button.displayName = "Button";

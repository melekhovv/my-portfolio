"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);

  const x = useSpring(mouseX, {
    stiffness: 900,
    damping: 45,
    mass: 0.08,
  });

  const y = useSpring(mouseY, {
    stiffness: 900,
    damping: 45,
    mass: 0.08,
  });

  const glowX = useSpring(mouseX, {
    stiffness: 80,
    damping: 24,
    mass: 0.35,
  });

  const glowY = useSpring(mouseY, {
    stiffness: 80,
    damping: 24,
    mass: 0.35,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = (e.target as Element | null)?.closest?.("[data-spotlight]");
      if (target instanceof HTMLElement) {
        const rect = target.getBoundingClientRect();
        target.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
        target.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
      }
    };

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    const interactive = document.querySelectorAll(
      "a,button,input,textarea,select,[role='button'],[data-spotlight]"
    );

    interactive.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);

      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.055)_32%,transparent_70%)] blur-xl md:block"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full bg-white md:block"
        animate={{
          width: hovered ? 12 : 6,
          height: hovered ? 12 : 6,
          scale: pressed ? 0.75 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 25,
        }}
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: hovered
            ? "0 0 18px rgba(255,255,255,.45)"
            : "0 0 8px rgba(255,255,255,.25)",
        }}
      />
    </>
  );
}

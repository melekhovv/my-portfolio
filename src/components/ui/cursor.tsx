"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

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

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    const interactive = document.querySelectorAll(
      "a,button,input,textarea,select,[role='button']"
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
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-white"
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
  );
}
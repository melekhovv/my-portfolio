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
      const clientX = e.clientX;
      const clientY = e.clientY;
      mouseX.set(clientX);
      mouseY.set(clientY);

      const elements = document.querySelectorAll<HTMLElement>("[data-spotlight]");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const padding = 220;

        if (
          clientX < rect.left - padding ||
          clientX > rect.right + padding ||
          clientY < rect.top - padding ||
          clientY > rect.bottom + padding
        ) {
          if (el.style.getPropertyValue("--edge-opacity") !== "0") {
            el.style.setProperty("--edge-opacity", "0");
          }
          return;
        }

        const w = rect.width;
        const h = rect.height;
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const computedBorderRadius = parseFloat(window.getComputedStyle(el).borderRadius) || 16;
        const r = Math.min(computedBorderRadius, w / 2, h / 2);

        const dx = Math.max(0, -x, x - w);
        const dy = Math.max(0, -y, y - h);
        const dist = Math.hypot(dx, dy);

        const proximity = 200;
        const t = Math.max(0, Math.min(1, 1 - dist / proximity));
        const intensity = t * t * (3 - 2 * t);

        // Project strictly to the edge/rim closest to the cursor
        let edgeX = x;
        let edgeY = y;

        if (x < r && y < r) {
          const angle = Math.atan2(y - r, x - r);
          edgeX = r + r * Math.cos(angle);
          edgeY = r + r * Math.sin(angle);
        } else if (x > w - r && y < r) {
          const angle = Math.atan2(y - r, x - (w - r));
          edgeX = w - r + r * Math.cos(angle);
          edgeY = r + r * Math.sin(angle);
        } else if (x > w - r && y > h - r) {
          const angle = Math.atan2(y - (h - r), x - (w - r));
          edgeX = w - r + r * Math.cos(angle);
          edgeY = h - r + r * Math.sin(angle);
        } else if (x < r && y > h - r) {
          const angle = Math.atan2(y - (h - r), x - r);
          edgeX = r + r * Math.cos(angle);
          edgeY = h - r + r * Math.sin(angle);
        } else if (x < 0) {
          edgeX = 0;
          edgeY = Math.max(r, Math.min(h - r, y));
        } else if (x > w) {
          edgeX = w;
          edgeY = Math.max(r, Math.min(h - r, y));
        } else if (y < 0) {
          edgeX = Math.max(r, Math.min(w - r, x));
          edgeY = 0;
        } else if (y > h) {
          edgeX = Math.max(r, Math.min(w - r, x));
          edgeY = h;
        } else {
          // Inside: snap to the nearest boundary edge
          const dTop = y;
          const dBottom = h - y;
          const dLeft = x;
          const dRight = w - x;
          const minD = Math.min(dTop, dBottom, dLeft, dRight);

          if (minD === dTop) {
            edgeX = Math.max(r, Math.min(w - r, x));
            edgeY = 0;
          } else if (minD === dBottom) {
            edgeX = Math.max(r, Math.min(w - r, x));
            edgeY = h;
          } else if (minD === dLeft) {
            edgeX = 0;
            edgeY = Math.max(r, Math.min(h - r, y));
          } else {
            edgeX = w;
            edgeY = Math.max(r, Math.min(h - r, y));
          }
        }

        el.style.setProperty("--edge-x", `${edgeX.toFixed(1)}px`);
        el.style.setProperty("--edge-y", `${edgeY.toFixed(1)}px`);
        el.style.setProperty("--edge-opacity", intensity.toFixed(3));
        el.style.setProperty("--spotlight-x", `${x.toFixed(1)}px`);
        el.style.setProperty("--spotlight-y", `${y.toFixed(1)}px`);
      });
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

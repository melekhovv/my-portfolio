"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [enabled, setEnabled] = useState(false);

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
    // Only activate custom cursor on fine pointer devices (desktop mouse/trackpad)
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    setEnabled(true);

    let rafId = 0;
    let pendingX = -400;
    let pendingY = -400;
    let hasMoved = false;

    // Cache elements and their bounding boxes to avoid layout thrashing on mousemove
    let cachedElements: {
      el: HTMLElement;
      rect: DOMRect;
      radius: number;
      active: boolean;
    }[] = [];

    const updateCachedElements = () => {
      const els = document.querySelectorAll<HTMLElement>("[data-spotlight]");
      cachedElements = Array.from(els).map((el) => {
        const rect = el.getBoundingClientRect();
        const r = parseFloat(window.getComputedStyle(el).borderRadius) || 16;
        return { el, rect, radius: r, active: false };
      });
    };

    updateCachedElements();

    const onScrollOrResize = () => {
      for (let i = 0; i < cachedElements.length; i++) {
        cachedElements[i].rect = cachedElements[i].el.getBoundingClientRect();
      }
    };

    const updateSpotlights = () => {
      rafId = 0;
      if (!hasMoved) return;

      const clientX = pendingX;
      const clientY = pendingY;
      mouseX.set(clientX);
      mouseY.set(clientY);

      const padding = 200;

      for (let i = 0; i < cachedElements.length; i++) {
        const item = cachedElements[i];
        const { el, rect, radius } = item;

        // Fast AABB rejection
        if (
          clientX < rect.left - padding ||
          clientX > rect.right + padding ||
          clientY < rect.top - padding ||
          clientY > rect.bottom + padding
        ) {
          if (item.active) {
            el.style.setProperty("--edge-opacity", "0");
            item.active = false;
          }
          continue;
        }

        const w = rect.width;
        const h = rect.height;
        const lx = clientX - rect.left;
        const ly = clientY - rect.top;
        const r = Math.min(radius, w / 2, h / 2);

        const dx = Math.max(0, -lx, lx - w);
        const dy = Math.max(0, -ly, ly - h);
        const dist = Math.hypot(dx, dy);

        if (dist > padding) {
          if (item.active) {
            el.style.setProperty("--edge-opacity", "0");
            item.active = false;
          }
          continue;
        }

        item.active = true;
        const t = Math.max(0, Math.min(1, 1 - dist / padding));
        const intensity = t * t * (3 - 2 * t);

        let edgeX = lx;
        let edgeY = ly;

        if (lx < r && ly < r) {
          const angle = Math.atan2(ly - r, lx - r);
          edgeX = r + r * Math.cos(angle);
          edgeY = r + r * Math.sin(angle);
        } else if (lx > w - r && ly < r) {
          const angle = Math.atan2(ly - r, lx - (w - r));
          edgeX = w - r + r * Math.cos(angle);
          edgeY = r + r * Math.sin(angle);
        } else if (lx > w - r && ly > h - r) {
          const angle = Math.atan2(ly - (h - r), lx - (w - r));
          edgeX = w - r + r * Math.cos(angle);
          edgeY = h - r + r * Math.sin(angle);
        } else if (lx < r && ly > h - r) {
          const angle = Math.atan2(ly - (h - r), lx - r);
          edgeX = r + r * Math.cos(angle);
          edgeY = h - r + r * Math.sin(angle);
        } else if (lx < 0) {
          edgeX = 0;
          edgeY = Math.max(r, Math.min(h - r, ly));
        } else if (lx > w) {
          edgeX = w;
          edgeY = Math.max(r, Math.min(h - r, ly));
        } else if (ly < 0) {
          edgeX = Math.max(r, Math.min(w - r, lx));
          edgeY = 0;
        } else if (ly > h) {
          edgeX = Math.max(r, Math.min(w - r, lx));
          edgeY = h;
        } else {
          const dTop = ly;
          const dBottom = h - ly;
          const dLeft = lx;
          const dRight = w - lx;
          const minD = Math.min(dTop, dBottom, dLeft, dRight);

          if (minD === dTop) {
            edgeX = Math.max(r, Math.min(w - r, lx));
            edgeY = 0;
          } else if (minD === dBottom) {
            edgeX = Math.max(r, Math.min(w - r, lx));
            edgeY = h;
          } else if (minD === dLeft) {
            edgeX = 0;
            edgeY = Math.max(r, Math.min(h - r, ly));
          } else {
            edgeX = w;
            edgeY = Math.max(r, Math.min(h - r, ly));
          }
        }

        el.style.setProperty("--edge-x", `${edgeX.toFixed(1)}px`);
        el.style.setProperty("--edge-y", `${edgeY.toFixed(1)}px`);
        el.style.setProperty("--edge-opacity", intensity.toFixed(3));
        el.style.setProperty("--spotlight-x", `${lx.toFixed(1)}px`);
        el.style.setProperty("--spotlight-y", `${ly.toFixed(1)}px`);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      hasMoved = true;
      if (!rafId) {
        rafId = requestAnimationFrame(updateSpotlights);
      }
    };

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", down, { passive: true });
    window.addEventListener("mouseup", up, { passive: true });
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    const observer = new MutationObserver(updateCachedElements);
    observer.observe(document.body, { childList: true, subtree: true });

    const interactive = document.querySelectorAll(
      "a,button,input,textarea,select,[role='button'],[data-spotlight]"
    );
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

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

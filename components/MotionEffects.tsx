"use client";

import { useEffect } from "react";
import { animate, inView, stagger } from "motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Entrance + scroll-reveal animations (ported from the original inline script). Renders nothing. */
export default function MotionEffects() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    document.documentElement.dataset.motion = "enabled";
    animate(".hero-motion", { opacity: [0, 1], y: [22, 0] }, { duration: 0.8, delay: stagger(0.08), ease });

    const stopInView = inView(
      ".reveal",
      (element) => {
        if (!reduced.matches) animate(element, { opacity: [0.4, 1], y: [18, 0] }, { duration: 0.65, ease });
      },
      { amount: 0.15 },
    );

    // Lift project cards on mouse hover
    const cleanups: Array<() => void> = [];
    document.querySelectorAll<HTMLElement>(".project").forEach((card) => {
      const enter = (e: PointerEvent) => {
        if (e.pointerType === "mouse" && !reduced.matches) animate(card, { y: -5 }, { duration: 0.25, ease });
      };
      const leave = () => {
        if (!reduced.matches) animate(card, { y: 0 }, { duration: 0.25, ease });
      };
      card.addEventListener("pointerenter", enter);
      card.addEventListener("pointerleave", leave);
      cleanups.push(() => {
        card.removeEventListener("pointerenter", enter);
        card.removeEventListener("pointerleave", leave);
      });
    });

    return () => {
      stopInView();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}

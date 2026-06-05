"use client";

import { useEffect } from "react";

/**
 * Fast, fixed-duration smooth scrolling for in-page anchor links (href="#id").
 * Native CSS smooth-scroll has no speed control (and gets slow over long
 * distances); this animates with a constant short duration so every jump
 * feels equally snappy. Also offsets for the sticky nav and closes the
 * mobile menu after a tap.
 */
const NAV_OFFSET = 62; // sticky nav height (px)
const DURATION = 360; // ms — high speed

const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

export default function SmoothScroll() {
  useEffect(() => {
    let raf = 0;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;
      const hash = link.getAttribute("href") || "";
      if (hash.length < 2) return;
      const target = document.getElementById(hash.slice(1));
      if (!target) return;

      e.preventDefault();

      // close the mobile menu if open
      const cb = document.getElementById("rv-menu") as HTMLInputElement | null;
      if (cb) cb.checked = false;

      const startY = window.scrollY;
      const endY = Math.max(0, startY + target.getBoundingClientRect().top - NAV_OFFSET);
      const dist = endY - startY;
      if (Math.abs(dist) < 2) return;

      cancelAnimationFrame(raf);
      let startTs = 0;
      const step = (ts: number) => {
        if (!startTs) startTs = ts;
        const p = Math.min((ts - startTs) / DURATION, 1);
        window.scrollTo(0, startY + dist * easeInOutQuad(p));
        if (p < 1) raf = requestAnimationFrame(step);
        else history.replaceState(null, "", hash);
      };
      raf = requestAnimationFrame(step);
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}

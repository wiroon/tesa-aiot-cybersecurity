"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import "@/app/deck.css";

export type SlideDef = {
  label: string; // e.g. "02 Why It Matters"
  node: ReactNode; // server-rendered <section className="slide ...">
};

const STAGE_W = 1536;
const STAGE_H = 1024;

/**
 * Deck shell — a React re-implementation of the prototype's <deck-stage>:
 *  - auto-scales the fixed 1536×1024 canvas to fit the area ABOVE the rail
 *    (absolute-centered with translate so it works at any viewport — including
 *    phones, where the old grid-centering pushed the oversized stage off-screen)
 *  - bottom thumbnail rail: live mini-previews of every slide, click to jump
 *  - keyboard nav: ←/→, PgUp/PgDn, Space, ↑/↓, Home/End, number keys
 *  - tap left/right third of the stage to go prev/next
 */
export default function Deck({ slides }: { slides: SlideDef[] }) {
  const total = slides.length;
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [thumbW, setThumbW] = useState(120);
  const rootRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (next: number) => setIndex(() => Math.max(0, Math.min(total - 1, next))),
    [total],
  );

  // fit the stage to the available area (the flex child above the rail)
  useEffect(() => {
    const fit = () => {
      const el = rootRef.current;
      if (!el) return;
      const w = el.clientWidth;
      const h = el.clientHeight;
      setScale(Math.min(w / STAGE_W, h / STAGE_H));
      // responsive thumbnail width: fill the row but clamp for sanity.
      // Arrows are hidden ≤640px (see deck.css), so reserve less width there.
      const vw = window.innerWidth;
      const reserve = vw > 640 ? 104 : 30;
      const items = total + 1; // +1 for the responsive-view link tile
      const tw = Math.max(44, Math.min(120, Math.floor((vw - reserve - (items - 1) * 10) / items)));
      setThumbW(tw);
    };
    fit();
    const ro = new ResizeObserver(fit);
    if (rootRef.current) ro.observe(rootRef.current);
    window.addEventListener("resize", fit);
    window.addEventListener("orientationchange", fit);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fit);
      window.removeEventListener("orientationchange", fit);
    };
  }, [total]);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ":
          e.preventDefault();
          go(index + 1);
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          go(index - 1);
          break;
        case "Home":
          e.preventDefault();
          go(0);
          break;
        case "End":
          e.preventDefault();
          go(total - 1);
          break;
        default:
          if (/^[1-9]$/.test(e.key)) {
            const n = Number(e.key) - 1;
            if (n < total) {
              e.preventDefault();
              go(n);
            }
          }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, total, go]);

  const onStageClick = (e: React.MouseEvent) => {
    const el = e.target as HTMLElement;
    if (el.closest("a,button,input,textarea,select,[role=button]")) return;
    const x = e.clientX / window.innerWidth;
    if (x > 0.66) go(index + 1);
    else if (x < 0.34) go(index - 1);
  };

  const thumbScale = thumbW / STAGE_W;

  return (
    <div className="deck-viewport">
      <div className="deck-root" ref={rootRef} onClick={onStageClick}>
        <div
          className="deck-stage"
          style={{ width: STAGE_W, height: STAGE_H, transform: `translate(-50%, -50%) scale(${scale})` }}
        >
          {slides.map(({ node }, i) => (
            <div
              key={i}
              className="deck-slide"
              aria-hidden={i !== index}
              data-active={i === index}
              style={{
                visibility: i === index ? "visible" : "hidden",
                opacity: i === index ? 1 : 0,
                pointerEvents: i === index ? "auto" : "none",
              }}
            >
              {node}
            </div>
          ))}
        </div>
      </div>

      {/* bottom thumbnail rail */}
      <nav className="deck-rail" aria-label="Slide thumbnails">
        <button
          className="deck-rail-arrow"
          aria-label="Previous slide"
          onClick={() => go(index - 1)}
          disabled={index === 0}
        >
          ‹
        </button>
        <div className="deck-thumbs">
          {/* responsive web-view entry point */}
          <a
            className="deck-thumb deck-thumb-link"
            href="/responsive"
            aria-label="เปิดมุมมองเว็บแบบ responsive (เลื่อนอ่านได้)"
            title="Responsive web view"
            style={{ width: thumbW }}
          >
            <span className="canvas" style={{ width: thumbW, height: thumbW * (STAGE_H / STAGE_W) }}>
              <span className="link-tile" aria-hidden>
                <svg viewBox="0 0 48 32">
                  <rect x="3" y="4" width="30" height="22" rx="2.5" fill="none" stroke="#bfe6ff" strokeWidth="2" />
                  <line x1="3" y1="22" x2="33" y2="22" stroke="#bfe6ff" strokeWidth="1.4" />
                  <rect x="34" y="9" width="11" height="19" rx="2" fill="#0a1e44" stroke="#7fe0a0" strokeWidth="2" />
                  <line x1="37" y1="24" x2="42" y2="24" stroke="#7fe0a0" strokeWidth="1.4" />
                </svg>
                <span className="link-label">WEB VIEW</span>
              </span>
            </span>
            <span className="num">↗</span>
          </a>
          {slides.map(({ node, label }, i) => (
            <button
              key={i}
              className="deck-thumb"
              data-active={i === index}
              aria-label={`Go to slide ${i + 1}: ${label}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => go(i)}
              style={{ width: thumbW }}
            >
              <span className="canvas" style={{ width: thumbW, height: thumbW * (STAGE_H / STAGE_W) }}>
                <span
                  className="mini"
                  aria-hidden
                  style={{ width: STAGE_W, height: STAGE_H, transform: `scale(${thumbScale})` }}
                >
                  {node}
                </span>
              </span>
              <span className="num">{i + 1}</span>
            </button>
          ))}
        </div>
        <button
          className="deck-rail-arrow"
          aria-label="Next slide"
          onClick={() => go(index + 1)}
          disabled={index === total - 1}
        >
          ›
        </button>
      </nav>
    </div>
  );
}

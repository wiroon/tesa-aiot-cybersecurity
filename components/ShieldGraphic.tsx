// Shield + padlock hero graphic (glowing network sphere), reused from slide 1.
import * as React from "react";

export default function ShieldGraphic() {
  return (
    <svg viewBox="0 0 360 360" width="360" height="360">
      <defs>
        <radialGradient id="netG" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3da6ff" stopOpacity="0.55" />
          <stop offset="65%" stopColor="#3da6ff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#3da6ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="shieldFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bfeaff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#1f86d6" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="lockFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cdeeff" stopOpacity="0.85" />
          <stop offset="1" stopColor="#4dc1ff" stopOpacity="0.75" />
        </linearGradient>
        <filter id="neon" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="b1" />
          <feMerge>
            <feMergeNode in="b1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="neonStrong" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="b1" />
          <feMerge>
            <feMergeNode in="b1" />
            <feMergeNode in="b1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="180" cy="180" r="172" fill="url(#netG)" />
      <g fill="none" stroke="#7ec9ff" strokeWidth="0.6" opacity="0.55">
        <ellipse cx="180" cy="180" rx="170" ry="40" />
        <ellipse cx="180" cy="180" rx="170" ry="80" />
        <ellipse cx="180" cy="180" rx="170" ry="120" />
        <ellipse cx="180" cy="180" rx="170" ry="160" />
        <ellipse cx="180" cy="180" rx="40" ry="170" />
        <ellipse cx="180" cy="180" rx="80" ry="170" />
        <ellipse cx="180" cy="180" rx="120" ry="170" />
        <ellipse cx="180" cy="180" rx="160" ry="170" />
        <circle cx="180" cy="180" r="170" />
      </g>
      <g fill="#cfeeff">
        <circle cx="50" cy="120" r="1.6" />
        <circle cx="320" cy="100" r="1.6" />
        <circle cx="80" cy="260" r="1.6" />
        <circle cx="310" cy="260" r="1.6" />
        <circle cx="180" cy="20" r="1.8" />
        <circle cx="180" cy="340" r="1.6" />
        <circle cx="20" cy="200" r="1.6" />
        <circle cx="350" cy="200" r="1.6" />
        <circle cx="120" cy="60" r="1.4" />
        <circle cx="250" cy="60" r="1.4" />
        <circle cx="120" cy="300" r="1.4" />
        <circle cx="250" cy="300" r="1.4" />
        <circle cx="40" cy="270" r="1.2" />
        <circle cx="340" cy="280" r="1.2" />
      </g>
      <path
        d="M180 70 L286 102 V190 C286 246 240 286 180 304 C120 286 74 246 74 190 V102 Z"
        fill="none"
        stroke="#5fc6ff"
        strokeWidth="10"
        opacity="0.4"
        filter="url(#neonStrong)"
      />
      <path
        d="M180 70 L286 102 V190 C286 246 240 286 180 304 C120 286 74 246 74 190 V102 Z"
        fill="url(#shieldFill)"
        opacity="0.55"
      />
      <path
        d="M180 70 L286 102 V190 C286 246 240 286 180 304 C120 286 74 246 74 190 V102 Z"
        fill="none"
        stroke="#dff4ff"
        strokeWidth="3.2"
        strokeLinejoin="round"
        filter="url(#neon)"
      />
      <path
        d="M180 84 L274 112 V188 C274 238 233 273 180 290 C127 273 86 238 86 188 V112 Z"
        fill="none"
        stroke="#9fdcff"
        strokeWidth="1.6"
        strokeLinejoin="round"
        opacity="0.85"
      />
      <path
        d="M150 188 V160 C150 144 163 132 180 132 C197 132 210 144 210 160 V188"
        fill="none"
        stroke="#dff4ff"
        strokeWidth="6.5"
        strokeLinecap="round"
        filter="url(#neon)"
      />
      <path
        d="M150 188 V160 C150 144 163 132 180 132 C197 132 210 144 210 160 V188"
        fill="none"
        stroke="#bfeaff"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <rect x="128" y="186" width="104" height="78" rx="9" fill="#5fc6ff" opacity="0.3" filter="url(#neonStrong)" />
      <rect x="132" y="188" width="96" height="74" rx="8" fill="url(#lockFill)" opacity="0.9" />
      <rect x="132" y="188" width="96" height="74" rx="8" fill="none" stroke="#eaf8ff" strokeWidth="2.4" filter="url(#neon)" />
      <g fill="#0a2a5c">
        <circle cx="180" cy="217" r="9" />
        <path d="M174 220 L186 220 L184 240 L176 240 Z" />
      </g>
    </svg>
  );
}

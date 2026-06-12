// Hero graphic for the NT edition (/ver02): a telecom tower broadcasting signal
// over a connected-network sphere, guarded by a cyber shield + lock. Conveys the
// convergence of Telecom · AIoT · Cybersecurity · Critical Infrastructure.
import * as React from "react";

export default function TelecomHero() {
  return (
    <svg viewBox="0 0 360 360" width="360" height="360">
      <defs>
        <radialGradient id="thNet" cx="50%" cy="46%" r="55%">
          <stop offset="0%" stopColor="#3da6ff" stopOpacity="0.5" />
          <stop offset="62%" stopColor="#3da6ff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#3da6ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="thMast" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dff4ff" />
          <stop offset="1" stopColor="#5fc6ff" />
        </linearGradient>
        <linearGradient id="thShield" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bfeaff" stopOpacity="0.4" />
          <stop offset="1" stopColor="#1f86d6" stopOpacity="0.28" />
        </linearGradient>
        <linearGradient id="thLock" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cdeeff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#4dc1ff" stopOpacity="0.8" />
        </linearGradient>
        <filter id="thNeon" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="2.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="thGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* network sphere */}
      <circle cx="180" cy="172" r="168" fill="url(#thNet)" />
      <g fill="none" stroke="#7ec9ff" strokeWidth="0.55" opacity="0.5">
        <ellipse cx="180" cy="172" rx="166" ry="42" />
        <ellipse cx="180" cy="172" rx="166" ry="86" />
        <ellipse cx="180" cy="172" rx="166" ry="128" />
        <ellipse cx="180" cy="172" rx="46" ry="166" />
        <ellipse cx="180" cy="172" rx="96" ry="166" />
        <ellipse cx="180" cy="172" rx="138" ry="166" />
        <circle cx="180" cy="172" r="166" />
      </g>

      {/* connected device nodes + links */}
      <g stroke="#6fc6ff" strokeWidth="0.8" opacity="0.5">
        <line x1="180" y1="120" x2="64" y2="96" />
        <line x1="180" y1="120" x2="300" y2="92" />
        <line x1="180" y1="120" x2="40" y2="210" />
        <line x1="180" y1="120" x2="322" y2="210" />
        <line x1="64" y1="96" x2="40" y2="210" />
        <line x1="300" y1="92" x2="322" y2="210" />
      </g>
      <g fill="#cfeeff">
        <circle cx="64" cy="96" r="2" />
        <circle cx="300" cy="92" r="2" />
        <circle cx="40" cy="210" r="2" />
        <circle cx="322" cy="210" r="2" />
        <circle cx="118" cy="58" r="1.6" />
        <circle cx="246" cy="56" r="1.6" />
        <circle cx="20" cy="150" r="1.5" />
        <circle cx="340" cy="150" r="1.5" />
      </g>

      {/* signal arcs from antenna top */}
      <g fill="none" stroke="#7fd6ff" strokeLinecap="round" filter="url(#thNeon)">
        <path d="M150 70 A44 44 0 0 1 210 70" strokeWidth="3" opacity="0.9" />
        <path d="M138 60 A62 62 0 0 1 222 60" strokeWidth="2.4" opacity="0.6" />
        <path d="M126 50 A82 82 0 0 1 234 50" strokeWidth="2" opacity="0.38" />
      </g>
      <circle cx="180" cy="78" r="4.5" fill="#eaf8ff" filter="url(#thGlow)" />

      {/* telecom tower (lattice mast) */}
      <g stroke="url(#thMast)" strokeLinecap="round" filter="url(#thNeon)">
        {/* legs */}
        <path d="M168 250 L178 86" strokeWidth="3.4" fill="none" />
        <path d="M192 250 L182 86" strokeWidth="3.4" fill="none" />
        {/* cross-bracing */}
        <g strokeWidth="1.7" opacity="0.92">
          <path d="M170 226 L190 226" />
          <path d="M171 206 L189 206" />
          <path d="M172 186 L188 186" />
          <path d="M173 166 L187 166" />
          <path d="M174 146 L186 146" />
          <path d="M175 126 L185 126" />
          <path d="M176 108 L184 108" />
          <path d="M170 226 L189 206" />
          <path d="M190 226 L171 206" />
          <path d="M171 206 L188 186" />
          <path d="M189 206 L172 186" />
          <path d="M172 186 L187 166" />
          <path d="M188 186 L173 166" />
          <path d="M173 166 L186 146" />
          <path d="M187 166 L174 146" />
          <path d="M174 146 L185 126" />
          <path d="M186 146 L175 126" />
        </g>
        {/* antenna tip */}
        <path d="M180 96 L180 70" strokeWidth="2.6" fill="none" />
      </g>
      {/* side micro-antennas */}
      <g stroke="#bfeaff" strokeWidth="2" strokeLinecap="round" opacity="0.85">
        <path d="M178 112 L160 104" />
        <path d="M182 112 L200 104" />
      </g>

      {/* shield + lock at base */}
      <path
        d="M180 196 L246 216 V262 C246 296 218 320 180 332 C142 320 114 296 114 262 V216 Z"
        fill="none"
        stroke="#5fc6ff"
        strokeWidth="8"
        opacity="0.4"
        filter="url(#thGlow)"
      />
      <path
        d="M180 196 L246 216 V262 C246 296 218 320 180 332 C142 320 114 296 114 262 V216 Z"
        fill="url(#thShield)"
        opacity="0.6"
      />
      <path
        d="M180 196 L246 216 V262 C246 296 218 320 180 332 C142 320 114 296 114 262 V216 Z"
        fill="none"
        stroke="#dff4ff"
        strokeWidth="2.6"
        strokeLinejoin="round"
        filter="url(#thNeon)"
      />
      {/* padlock */}
      <path
        d="M166 256 V246 C166 238 172 232 180 232 C188 232 194 238 194 246 V256"
        fill="none"
        stroke="#dff4ff"
        strokeWidth="4.6"
        strokeLinecap="round"
        filter="url(#thNeon)"
      />
      <rect x="160" y="255" width="40" height="34" rx="6" fill="#5fc6ff" opacity="0.3" filter="url(#thGlow)" />
      <rect x="162" y="256" width="36" height="31" rx="5" fill="url(#thLock)" opacity="0.92" />
      <rect x="162" y="256" width="36" height="31" rx="5" fill="none" stroke="#eaf8ff" strokeWidth="1.8" filter="url(#thNeon)" />
      <g fill="#0a2a5c">
        <circle cx="180" cy="269" r="3.6" />
        <path d="M177.6 270.5 L182.4 270.5 L181.4 280 L178.6 280 Z" />
      </g>
    </svg>
  );
}

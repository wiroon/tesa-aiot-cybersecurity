// Premium "AIoT × NT × Cybersecurity Convergence Hub" infographic for the
// "Why NT Should Attend" section (web /ver02#why and slide 02). A glowing core
// (protected connected infrastructure) with four satellite nodes mapping 1:1 to
// the four reasons (01 AIoT devices · 02 NCSA guideline · 03 risk reduction ·
// 04 people-ready), tied together by flowing connectors. Transparent bg —
// drop it on a dark panel so the neon reads. Self-contained CSS (animation).
import * as React from "react";

const CX = 280;
const CY = 276;

type Node = {
  n: string;
  cx: number;
  cy: number;
  label: string;
  labelAbove: boolean;
  icon: (cx: number, cy: number) => React.ReactNode;
};

/* ---- node icons (line art, centered at cx,cy) ---- */
const meshIcon = (cx: number, cy: number) => (
  <g fill="none" stroke="#dff4ff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1={cx} y1={cy} x2={cx - 17} y2={cy - 13} />
    <line x1={cx} y1={cy} x2={cx + 17} y2={cy - 12} />
    <line x1={cx} y1={cy} x2={cx - 13} y2={cy + 16} />
    <line x1={cx} y1={cy} x2={cx + 15} y2={cy + 15} />
    <circle cx={cx} cy={cy} r="4.2" fill="#7fe0ff" stroke="none" />
    <rect x={cx - 22} y={cy - 19} width="11" height="11" rx="2.5" />
    <rect x={cx + 11} y={cy - 18} width="11" height="11" rx="2.5" />
    <rect x={cx - 19} y={cy + 11} width="11" height="11" rx="2.5" />
    <rect x={cx + 9} y={cy + 9} width="12" height="12" rx="2.5" />
  </g>
);
const policyIcon = (cx: number, cy: number) => (
  <g fill="none" stroke="#dff4ff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d={`M${cx - 16} ${cy - 21} H${cx + 9} L${cx + 16} ${cy - 14} V${cy + 21} H${cx - 16} Z`} />
    <path d={`M${cx + 9} ${cy - 21} V${cy - 14} H${cx + 16}`} />
    <line x1={cx - 9} y1={cy - 6} x2={cx + 9} y2={cy - 6} />
    <line x1={cx - 9} y1={cy + 1} x2={cx + 9} y2={cy + 1} />
    <line x1={cx - 9} y1={cy + 8} x2={cx + 2} y2={cy + 8} />
    <circle cx={cx + 13} cy={cy + 12} r="9" fill="#0b2a55" stroke="#5fe0a0" />
    <path d={`M${cx + 8.5} ${cy + 12} l3 3 5-6`} stroke="#5fe0a0" strokeWidth="2.2" />
  </g>
);
const riskIcon = (cx: number, cy: number) => (
  <g fill="none" stroke="#dff4ff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d={`M${cx} ${cy - 22} L${cx + 19} ${cy - 15} V${cy + 1} C${cx + 19} ${cy + 15} ${cx + 11} ${cy + 22} ${cx} ${cy + 25} C${cx - 11} ${cy + 22} ${cx - 19} ${cy + 15} ${cx - 19} ${cy + 1} V${cy - 15} Z`} />
    <path d={`M${cx} ${cy - 12} V${cy + 9}`} stroke="#ff9a5a" />
    <path d={`M${cx - 7} ${cy + 2} L${cx} ${cy + 11} L${cx + 7} ${cy + 2}`} stroke="#ff9a5a" />
  </g>
);
const peopleIcon = (cx: number, cy: number) => (
  <g fill="none" stroke="#dff4ff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx={cx - 11} cy={cy - 10} r="7" />
    <path d={`M${cx - 23} ${cy + 18} c0 -10 6 -16 12 -16 c6 0 12 6 12 16`} />
    <circle cx={cx + 12} cy={cy - 12} r="6" />
    <path d={`M${cx + 2} ${cy + 16} c0 -9 5 -14 10 -14 c6 0 11 5 11 15`} />
  </g>
);

const NODES: Node[] = [
  { n: "01", cx: 128, cy: 150, label: "AIoT DEVICES", labelAbove: true, icon: meshIcon },
  { n: "02", cx: 432, cy: 150, label: "NCSA GUIDELINE", labelAbove: true, icon: policyIcon },
  { n: "03", cx: 432, cy: 402, label: "RISK REDUCTION", labelAbove: false, icon: riskIcon },
  { n: "04", cx: 128, cy: 402, label: "PEOPLE READY", labelAbove: false, icon: peopleIcon },
];

const HEX = "280,182 361.4,229 361.4,323 280,370 198.6,323 198.6,229";

export default function WhyInfographic() {
  return (
    <svg className="why-svg" viewBox="0 0 560 560" role="img" aria-label="AIoT, NT และ Cybersecurity convergence">
      <defs>
        <radialGradient id="wiCore" cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#1e6fd0" />
          <stop offset="60%" stopColor="#123e8f" />
          <stop offset="100%" stopColor="#0a2350" />
        </radialGradient>
        <linearGradient id="wiEdge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7fe0ff" />
          <stop offset="1" stopColor="#1f86d6" />
        </linearGradient>
        <radialGradient id="wiNode" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#143a72" />
          <stop offset="100%" stopColor="#0a2148" />
        </radialGradient>
        <linearGradient id="wiConn" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#37c0ff" stopOpacity="0.1" />
          <stop offset="0.5" stopColor="#37c0ff" stopOpacity="0.8" />
          <stop offset="1" stopColor="#37c0ff" stopOpacity="0.1" />
        </linearGradient>
        <radialGradient id="wiBadge" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#ffe27a" />
          <stop offset="100%" stopColor="#f4a91d" />
        </radialGradient>
        <filter id="wiGlowF" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="wiSoft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      <style>{`
        @keyframes wiDash { to { stroke-dashoffset: -28; } }
        @keyframes wiPulse { 0%,100%{ opacity:.3; transform:scale(.8);} 50%{ opacity:1; transform:scale(1.1);} }
        @keyframes wiHalo { 0%,100%{ opacity:.45;} 50%{ opacity:.85;} }
        .why-svg .wi-flow { stroke-dasharray: 5 9; animation: wiDash 1.1s linear infinite; }
        .why-svg .wi-dot { transform-box: fill-box; transform-origin: center; animation: wiPulse 2.4s ease-in-out infinite; }
        .why-svg .wi-halo { animation: wiHalo 3.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce){
          .why-svg .wi-flow,.why-svg .wi-dot,.why-svg .wi-halo{ animation:none; }
        }
      `}</style>

      {/* faint orbit rings */}
      <g fill="none" stroke="#3f7fd0" opacity="0.22">
        <circle cx={CX} cy={CY} r="150" />
        <circle cx={CX} cy={CY} r="210" strokeDasharray="2 8" />
      </g>

      {/* connectors (behind nodes & core) */}
      {NODES.map((nd, i) => {
        const mx = (CX + nd.cx) / 2;
        const my = (CY + nd.cy) / 2;
        return (
          <g key={`c${i}`}>
            <line x1={CX} y1={CY} x2={nd.cx} y2={nd.cy} stroke="url(#wiConn)" strokeWidth="3" />
            <line x1={CX} y1={CY} x2={nd.cx} y2={nd.cy} stroke="#9fe6ff" strokeWidth="1.4" className="wi-flow" opacity="0.85" />
            <circle cx={mx} cy={my} r="4" fill="#bff0ff" className="wi-dot" filter="url(#wiGlowF)" />
          </g>
        );
      })}

      {/* core */}
      <circle cx={CX} cy={CY} r="104" fill="#37a6ff" opacity="0.28" filter="url(#wiSoft)" className="wi-halo" />
      <polygon points={HEX} fill="url(#wiCore)" stroke="url(#wiEdge)" strokeWidth="3" filter="url(#wiGlowF)" />
      {/* core glyph: protected connected infrastructure (shield + check) */}
      <g>
        <path
          d={`M${CX} ${CY - 50} L${CX + 46} ${CY - 34} V${CY + 6} C${CX + 46} ${CY + 34} ${CX + 26} ${CY + 52} ${CX} ${CY + 62} C${CX - 26} ${CY + 52} ${CX - 46} ${CY + 34} ${CX - 46} ${CY + 6} V${CY - 34} Z`}
          fill="rgba(13,42,85,0.6)"
          stroke="#dff4ff"
          strokeWidth="3"
          strokeLinejoin="round"
          filter="url(#wiGlowF)"
        />
        <path d={`M${CX - 20} ${CY + 6} L${CX - 5} ${CY + 21} L${CX + 22} ${CY - 12}`} fill="none" stroke="#5fe0a0" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" filter="url(#wiGlowF)" />
      </g>
      <text x={CX} y={CY + 92} textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight={800} fontSize="15" letterSpacing="2" fill="#bfe3ff">
        PROTECTED CORE
      </text>

      {/* nodes */}
      {NODES.map((nd) => (
        <g key={nd.n}>
          <circle cx={nd.cx} cy={nd.cy} r="60" fill="#37a6ff" opacity="0.16" filter="url(#wiSoft)" />
          <circle cx={nd.cx} cy={nd.cy} r="52" fill="url(#wiNode)" stroke="url(#wiEdge)" strokeWidth="2.4" filter="url(#wiGlowF)" />
          {nd.icon(nd.cx, nd.cy)}
          {/* number badge */}
          <circle cx={nd.cx - 40} cy={nd.cy - 40} r="17" fill="url(#wiBadge)" filter="url(#wiGlowF)" />
          <text x={nd.cx - 40} y={nd.cy - 34} textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight={900} fontSize="16" fill="#0a2350">
            {nd.n}
          </text>
          {/* label */}
          <text
            x={nd.cx}
            y={nd.labelAbove ? nd.cy - 70 : nd.cy + 82}
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontWeight={800}
            fontSize="17"
            letterSpacing="1"
            fill="#eaf6ff"
          >
            {nd.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

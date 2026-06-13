// Version 2 — NT × TESA edition. Content from
// "AIoT Cybersecurity Guideline Readiness Workshop — Full Production Spec v4".
// Reuses the .rv design system (responsive.css) with NT-specific additions in
// app/ver02/ver02.css. Audience: NT executives, managers, engineers, operators.
import SvgDefs from "@/components/SvgDefs";
import SmoothScroll from "@/components/SmoothScroll";
import TelecomHero from "@/components/TelecomHero";
import WhyInfographic from "@/components/WhyInfographic";

/* hero pillars — the convergence the workshop addresses */
const PILLARS = [
  { sym: "i-bank", t1: "TELECOM INFRASTRUCTURE", t2: "โครงสร้างพื้นฐานโทรคมนาคมของ NT" },
  { sym: "i-ai-chip", t1: "AIoT CONVERGENCE", t2: "อุปกรณ์ AIoT เชื่อมต่อจำนวนมหาศาล" },
  { sym: "i-shield-check", t1: "CYBER RESILIENCE", t2: "ลดความเสี่ยงและภัยคุกคามไซเบอร์" },
  { sym: "i-eye", t1: "NCSA READINESS", t2: "พร้อมรับแนวทาง สกมช. ในอนาคต" },
];

/* why NT should attend — 4 messages + explanations */
const WHY = [
  {
    th: "Network Operator ที่ต้องรองรับการมาของ AIoT จำนวนมหาศาล",
    en: "NT infrastructure increasingly connects AIoT devices.",
  },
  {
    th: "ข้อกำหนดด้าน Cybersecurity ของ สกมช. ที่ต้องคำนึงในการดำเนินการในอนาคต",
    en: "Future governance requirements should be understood early.",
  },
  {
    th: "เตรียมพร้อมต่อความเสี่ยงจากภัยคุกคามไซเบอร์ ให้ความปลอดภัยต่อบริการและข้อมูลสำคัญขององค์กร",
    en: "Cybersecurity readiness reduces operational risk.",
  },
  {
    th: "เสริมสร้างศักยภาพบุคลากร ให้พร้อมรับมือเทคโนโลยีและภัยคุกคามรูปแบบใหม่",
    en: "People readiness is a strategic investment.",
  },
];

/* program agenda */
const DAY1 = [
  ["AIoT Threat Landscape for Network Operators", "เข้าใจภัยคุกคามที่เกิดขึ้นจริงในปัจจุบัน"],
  ["NCSA Direction & AIoT Cybersecurity Guideline", "เข้าใจทิศทางระดับชาติของ สกมช. ในอนาคต"],
  ["Critical Information Infrastructure Protection", "เข้าใจการปกป้องโครงสร้างพื้นฐานสำคัญ"],
  ["AIoT Risk Assessment & Management", "เข้าใจวิธีประเมินและบริหารความเสี่ยง"],
  ["Cyber Drill Case Studies, Policy & Compliance", "เข้าใจความรับผิดชอบด้านการกำกับดูแล"],
];
const DAY2 = [
  ["Asset Visibility & Inventory for AIoT", "รู้ว่ามีสินทรัพย์อะไรในระบบบ้าง"],
  ["Device Identity & PKI Fundamentals", "เข้าใจการสร้างความน่าเชื่อถือของอุปกรณ์"],
  ["Secure Connectivity & Network Segmentation", "ลดพื้นที่การโจมตีด้วยการแบ่งเครือข่าย"],
  ["Threat Detection, Monitoring & Incident Response", "ตรวจจับและตอบสนองต่อภัยคุกคาม"],
  ["Case Studies & Best Practices", "เรียนรู้จากกรณีศึกษาและตัวอย่างจริง"],
];

/* designed for every role */
const ROLES = [
  {
    sym: "p-cio",
    cls: "a",
    role: "ผู้บริหารและผู้นำ",
    en: "EXECUTIVES & LEADERS",
    who: "VP · SVP · Director · Department Head",
    items: ["เข้าใจผลกระทบเชิงธุรกิจ", "เข้าใจความรับผิดชอบด้านการกำกับดูแล", "เตรียมทิศทางเชิงกลยุทธ์"],
    take: "เข้าใจทิศทาง Cybersecurity ในอนาคตและผลกระทบต่อองค์กร",
  },
  {
    sym: "p-compliance",
    cls: "b",
    role: "ผู้จัดการและหัวหน้าทีม",
    en: "MANAGERS & TEAM LEADERS",
    who: "Team Leader · Project Manager · Operations Manager",
    items: ["แปลงนโยบายสู่การปฏิบัติ", "บริหารโครงการด้านความมั่นคงปลอดภัย", "ประเมินความเสี่ยงเชิงปฏิบัติการ"],
    take: "แปลงนโยบายเป็นแผนการดำเนินงานที่ทำได้จริง",
  },
  {
    sym: "p-engineer",
    cls: "c",
    role: "วิศวกรและทีมปฏิบัติการ",
    en: "ENGINEERS & OPERATIONS",
    who: "Network · Infrastructure · Operations · Security Engineers",
    items: ["เข้าใจมาตรการควบคุมเชิงเทคนิค", "นำแนวคิดไปประยุกต์ใช้จริง", "เพิ่มความมั่นใจในการทำงาน"],
    take: "เข้าใจมาตรการความมั่นคงปลอดภัย AIoT เชิงปฏิบัติ",
  },
];

/* what you will get */
const DELIVERABLES = [
  { t1: "NCSA-ALIGNED KNOWLEDGE", t2: "องค์ความรู้ที่สอดคล้องกับทิศทางของ สกมช." },
  { t1: "PRACTICAL GUIDANCE FOR NT", t2: "แนวทางปฏิบัติที่นำไปใช้กับ NT ได้จริง" },
  { t1: "AIoT RISK MITIGATION", t2: "แนวคิดลดความเสี่ยง AIoT ที่ลงมือทำได้" },
  { t1: "TESA CERTIFICATE", t2: "ใบรับรองการเข้าร่วมจาก TESA" },
];

/* key outcomes */
const OUTCOMES = [
  "เข้าใจแนวคิด AIoT Cybersecurity",
  "ประเมินความเสี่ยงและกำหนดมาตรการควบคุม",
  "เข้าใจเทคโนโลยีด้านความมั่นคงปลอดภัย",
  "เตรียมพร้อมรับมาตรฐานในอนาคต",
  "เพิ่มความมั่นใจและความพร้อม",
];

const INCLUDED = [
  "ค่าวิทยากรผู้เชี่ยวชาญ",
  "ค่าดำเนินการจัดอบรมทั้งหมด",
  "Coffee Break ตลอดงาน",
  "อาหารว่างและเครื่องดื่มทั้ง 2 วัน",
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22">
      <circle cx="12" cy="12" r="11" fill="#22c55e" />
      <path d="M6 12 L10.5 16.5 L18 8.5" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Target() {
  return (
    <svg viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="22" fill="none" stroke="#0e2f6d" strokeWidth="3" />
      <circle cx="32" cy="32" r="11" fill="none" stroke="#0e2f6d" strokeWidth="3" />
      <circle cx="32" cy="32" r="3.4" fill="#22c55e" />
    </svg>
  );
}
function Gift() {
  return (
    <svg viewBox="0 0 64 64">
      <rect x="12" y="26" width="40" height="30" rx="3" fill="none" stroke="#0e2f6d" strokeWidth="3" />
      <path d="M10 26 H54 V36 H10 Z" fill="none" stroke="#0e2f6d" strokeWidth="3" />
      <path d="M32 26 V56" stroke="#0e2f6d" strokeWidth="3" />
      <path d="M32 26 C26 16 14 18 18 24 C20 27 28 26 32 26 Z" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinejoin="round" />
      <path d="M32 26 C38 16 50 18 46 24 C44 27 36 26 32 26 Z" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

/* ---- infographic line-art icons (navy line + green accent), one per item ---- */
const ICO = {
  stroke: "#0e2f6d",
  accent: "#22c55e",
} as const;

/* deliverables */
function IcoKnowledge() {
  // open book + verified check = NCSA-aligned knowledge
  return (
    <svg viewBox="0 0 64 64">
      <path d="M32 18 C26 14 17 14 12 16 V46 C17 44 26 44 32 48 C38 44 47 44 52 46 V16 C47 14 38 14 32 18 Z" fill="none" stroke={ICO.stroke} strokeWidth="3" strokeLinejoin="round" />
      <path d="M32 18 V48" stroke={ICO.stroke} strokeWidth="3" />
      <circle cx="47" cy="43" r="9" fill={ICO.accent} />
      <path d="M43 43 l3 3 5-6" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IcoGuidance() {
  // clipboard checklist = practical guidance
  return (
    <svg viewBox="0 0 64 64">
      <rect x="16" y="15" width="32" height="40" rx="3" fill="none" stroke={ICO.stroke} strokeWidth="3" />
      <rect x="25" y="11" width="14" height="8" rx="2" fill="none" stroke={ICO.stroke} strokeWidth="3" />
      <path d="M22 29 l3 3 5-6" stroke={ICO.accent} strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="34" y1="29" x2="43" y2="29" stroke={ICO.stroke} strokeWidth="3" strokeLinecap="round" />
      <path d="M22 41 l3 3 5-6" stroke={ICO.accent} strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="34" y1="41" x2="43" y2="41" stroke={ICO.stroke} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
function IcoRisk() {
  // shield with down arrow = risk mitigation
  return (
    <svg viewBox="0 0 64 64">
      <path d="M32 10 L50 17 V33 C50 44 42 52 32 56 C22 52 14 44 14 33 V17 Z" fill="none" stroke={ICO.stroke} strokeWidth="3" strokeLinejoin="round" />
      <line x1="32" y1="22" x2="32" y2="37" stroke={ICO.accent} strokeWidth="3" strokeLinecap="round" />
      <path d="M25 31 l7 7 7-7" stroke={ICO.accent} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IcoCert() {
  // medal + ribbon = certificate
  return (
    <svg viewBox="0 0 64 64">
      <path d="M24 36 L19 55 L32 49 L45 55 L40 36" fill="none" stroke={ICO.stroke} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="32" cy="25" r="14" fill="none" stroke={ICO.stroke} strokeWidth="3" />
      <path d="M32 18 l2.4 4.9 5.4 .6 -4 3.7 1.1 5.3 -4.9-2.7 -4.9 2.7 1.1-5.3 -4-3.7 5.4-.6 Z" fill={ICO.accent} />
    </svg>
  );
}

/* outcomes */
function IcoConcept() {
  // lightbulb + check = understand the concept
  return (
    <svg viewBox="0 0 64 64">
      <path d="M32 12 C22 12 16 19 16 27 C16 33 20 37 23 41 V45 H41 V41 C44 37 48 33 48 27 C48 19 42 12 32 12 Z" fill="none" stroke={ICO.stroke} strokeWidth="3" strokeLinejoin="round" />
      <line x1="25" y1="50" x2="39" y2="50" stroke={ICO.stroke} strokeWidth="3" strokeLinecap="round" />
      <line x1="28" y1="54" x2="36" y2="54" stroke={ICO.stroke} strokeWidth="3" strokeLinecap="round" />
      <path d="M26 29 l4 4 8-8" stroke={ICO.accent} strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IcoAssess() {
  // risk gauge = assess risk & set controls
  return (
    <svg viewBox="0 0 64 64">
      <path d="M14 44 A18 18 0 0 1 50 44" fill="none" stroke={ICO.stroke} strokeWidth="3" strokeLinecap="round" />
      <line x1="17" y1="41" x2="20" y2="39" stroke={ICO.stroke} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="32" y1="26" x2="32" y2="29" stroke={ICO.stroke} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="47" y1="41" x2="44" y2="39" stroke={ICO.stroke} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="32" y1="44" x2="43" y2="32" stroke={ICO.accent} strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="44" r="3.6" fill={ICO.stroke} />
    </svg>
  );
}
function IcoChip() {
  // microchip + lock = security technology
  return (
    <svg viewBox="0 0 64 64">
      <rect x="20" y="20" width="24" height="24" rx="3" fill="none" stroke={ICO.stroke} strokeWidth="3" />
      <g stroke={ICO.stroke} strokeWidth="3" strokeLinecap="round">
        <line x1="26" y1="16" x2="26" y2="20" />
        <line x1="38" y1="16" x2="38" y2="20" />
        <line x1="26" y1="44" x2="26" y2="48" />
        <line x1="38" y1="44" x2="38" y2="48" />
        <line x1="16" y1="26" x2="20" y2="26" />
        <line x1="16" y1="38" x2="20" y2="38" />
        <line x1="44" y1="26" x2="48" y2="26" />
        <line x1="44" y1="38" x2="48" y2="38" />
      </g>
      <rect x="27" y="31" width="10" height="8" rx="1.5" fill={ICO.accent} />
      <path d="M29 31 v-2.5 a3 3 0 0 1 6 0 V31" fill="none" stroke={ICO.accent} strokeWidth="2.2" />
    </svg>
  );
}
function IcoFuture() {
  // calendar + check = ready for future standards
  return (
    <svg viewBox="0 0 64 64">
      <rect x="14" y="18" width="36" height="34" rx="3" fill="none" stroke={ICO.stroke} strokeWidth="3" />
      <line x1="14" y1="28" x2="50" y2="28" stroke={ICO.stroke} strokeWidth="3" />
      <line x1="23" y1="13" x2="23" y2="22" stroke={ICO.stroke} strokeWidth="3" strokeLinecap="round" />
      <line x1="41" y1="13" x2="41" y2="22" stroke={ICO.stroke} strokeWidth="3" strokeLinecap="round" />
      <path d="M23 39 l5 5 10-10" stroke={ICO.accent} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IcoConfidence() {
  // rising bars + up trend = more confidence & readiness
  return (
    <svg viewBox="0 0 64 64">
      <rect x="14" y="40" width="8" height="12" rx="1.5" fill="none" stroke={ICO.stroke} strokeWidth="3" />
      <rect x="28" y="33" width="8" height="19" rx="1.5" fill="none" stroke={ICO.stroke} strokeWidth="3" />
      <rect x="42" y="26" width="8" height="26" rx="1.5" fill="none" stroke={ICO.stroke} strokeWidth="3" />
      <path d="M14 30 L26 22 L36 27 L52 13" fill="none" stroke={ICO.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M45 13 H52 V20" fill="none" stroke={ICO.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const DELIVERABLE_ICONS = [<IcoKnowledge />, <IcoGuidance />, <IcoRisk />, <IcoCert />];
const OUTCOME_ICONS = [<IcoConcept />, <IcoAssess />, <IcoChip />, <IcoFuture />, <IcoConfidence />];

export default function Version2() {
  return (
    <div className="rv rv-v2">
      <SvgDefs />
      <SmoothScroll />

      {/* ---------------- nav ---------------- */}
      <header className="rv-nav">
        <div className="container inner">
          <input type="checkbox" id="rv-menu" className="menu-toggle" />
          <a className="brand dual" href="#top">
            <img className="nt-logo" src="/assets/nt-logo.svg" alt="NT — National Telecom" />
                  <span className="x">×</span>
            <img className="brand-logo" src="/assets/tesa-logo.svg" alt="TESA" />
            <span className="green">AIoT</span>
          </a>
          <label htmlFor="rv-menu" className="menu-btn" aria-label="เมนู">
            <span />
            <span />
            <span />
          </label>
          <nav className="links">
            <a href="#why">Why NT</a>
            <a href="#agenda">Agenda</a>
            <a href="#roles">Roles</a>
            <a href="#register">Sponsorship</a>
            <a href="#register">Register</a>
          </nav>
          <div className="cta">
            {/* Standard Edition (/ver01) temporarily hidden — nginx also
                redirects /, /ver01, /responsive → /ver02. Uncomment when the
                team re-enables the Standard Edition.
            <a className="rv-btn ghost" href="/ver01">Standard Edition →</a>
            */}
            <a className="rv-btn ghost" href="/ver02/slides">▦ Slides</a>
          </div>
        </div>
      </header>

      <main>
        {/* ---------------- hero ---------------- */}
        <section id="top" className="rv-hero">
          <div className="container">
            <div className="hero-row">
              <div className="hero-text">
                <div className="eyebrow">NT × TESA · OFFICIAL COLLABORATION</div>
                <span className="rv-badge">2-DAY INTENSIVE PROGRAM</span>
                <h1>
                  <span className="tesa">TESA</span> <span className="aiot">AIoT</span> CYBERSECURITY <span className="guide">GUIDELINE</span> READINESS WORKSHOP
                </h1>
                <p className="sub-en">Understanding Future AIoT Cybersecurity Requirements for Network Operators</p>
                <p className="lead">
                  เตรียมความพร้อมบุคลากร NT ให้เข้าใจแนวทาง AIoT Cybersecurity Guideline ของ สกมช. (NCSA)
                  และสามารถประยุกต์ใช้กับโครงสร้างพื้นฐานและบริการขององค์กรได้อย่างมีประสิทธิภาพ
                </p>
                <div className="hero-cta">
                  <a className="rv-btn green" href="#register">REGISTER NOW</a>
                  <a className="rv-btn ghost" href="#register">★ สนับสนุนเต็มจำนวนโดย TESA</a>
                </div>
                <div className="pills">
                  <span><span className="green">FREE</span>&nbsp;FOR NT</span>
                  <span>WORKSHOP + HANDS-ON LAB</span>
                  <span>THAI LANGUAGE</span>
                </div>
              </div>
              <div className="shield-wrap">
                <TelecomHero />
              </div>
            </div>

            <div className="rv-feats">
              {PILLARS.map((f) => (
                <div className="rv-feat" key={f.t1}>
                  <div className="ic">
                    <svg viewBox="0 0 32 32">
                      <use href={`#${f.sym}`} />
                    </svg>
                  </div>
                  <div>
                    <div className="t1">{f.t1}</div>
                    <div className="t2">{f.t2}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- why NT ---------------- */}
        <section id="why" className="rv-sec alt">
          <div className="container">
            <div className="rv-head">
              <div className="eyebrow">WHY NT SHOULD ATTEND</div>
              <h2>Why NT Should Attend</h2>
              <p>ทำไมบุคลากร NT จึงควรเตรียมความพร้อมตั้งแต่วันนี้</p>
            </div>
            <div className="why-stage">
              <div className="why-grid">
                {WHY.map((w, i) => (
                  <div className={`why-pin wp${i + 1}`} key={i}>
                    <div className="pin-body">
                      <h3>{w.th}</h3>
                      <p>{w.en}</p>
                    </div>
                  </div>
                ))}
                <div className="why-figure">
                  <WhyInfographic />
                </div>
              </div>
              <div className="why-cap">
                <span className="t">AIoT × NT × CYBERSECURITY</span>
                <span className="s">โครงสร้างพื้นฐานที่เชื่อมต่อ ต้องพร้อมรับมือตั้งแต่วันนี้</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- program agenda ---------------- */}
        <section id="agenda" className="rv-sec">
          <div className="container">
            <div className="rv-head">
              <div className="eyebrow">PROGRAM AGENDA</div>
              <h2>2-Day Program Agenda</h2>
              <p>จากความเข้าใจภัยคุกคาม สู่มาตรการควบคุมเชิงปฏิบัติ</p>
            </div>
            <div className="rv-grid cols2">
              <div className="rv-card rv-day">
                <div className="chd d1">
                  <div className="tag">DAY 1</div>
                  <div className="nm">UNDERSTANDING AIoT CYBERSECURITY</div>
                </div>
                <div className="cbody">
                  <div className="rv-mods">
                    {DAY1.map(([md, sub], i) => (
                      <div className="rv-mod" key={md}>
                        <div className="tm">{`0${i + 1}`}</div>
                        <div className="md">
                          <b>{md}</b>
                          <span>{sub}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rv-outcome o1">
                    <b>FOCUS:</b> เข้าใจภัยคุกคาม ทิศทาง สกมช. และการประเมินความเสี่ยงของโครงสร้างพื้นฐาน
                  </div>
                </div>
              </div>

              <div className="rv-card rv-day">
                <div className="chd d2">
                  <div className="tag">DAY 2</div>
                  <div className="nm">PRACTICAL SECURITY CONTROLS</div>
                </div>
                <div className="cbody">
                  <div className="rv-mods">
                    {DAY2.map(([md, sub], i) => (
                      <div className="rv-mod" key={md}>
                        <div className="tm">{`0${i + 1}`}</div>
                        <div className="md">
                          <b>{md}</b>
                          <span>{sub}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rv-outcome o2">
                    <b>FOCUS:</b> ลงมือกับมาตรการควบคุมจริง ตั้งแต่การมองเห็นสินทรัพย์ถึงการตอบสนองเหตุ
                  </div>
                </div>
              </div>
            </div>

            <div className="rv-meta-row">
              <span><b>09:00 – 16:30</b> ทั้ง 2 วัน</span>
              <span>Workshop + Hands-on Lab</span>
              <span>บรรยายภาษาไทย</span>
            </div>
          </div>
        </section>

        {/* ---------------- designed for every role ---------------- */}
        <section id="roles" className="rv-sec alt">
          <div className="container">
            <div className="rv-head">
              <div className="eyebrow">DESIGNED FOR EVERY ROLE</div>
              <h2>Designed for Every Role</h2>
              <p>เนื้อหาเดียวที่ตอบโจทย์ทั้งผู้บริหาร ผู้จัดการ และวิศวกรพร้อมกัน</p>
            </div>
            <div className="rv-grid cols3">
              {ROLES.map((r) => (
                <div className={`rv-card rv-role ${r.cls}`} key={r.en}>
                  <div className="chd">
                    <div className="ic">
                      <svg viewBox="0 0 64 64">
                        <use href={`#${r.sym}`} />
                      </svg>
                    </div>
                    <div className="ht">{r.en}</div>
                    <div className="hs">{r.role}</div>
                  </div>
                  <div className="cbody">
                    <div className="who">{r.who}</div>
                    <ul>
                      {r.items.map((it) => (
                        <li key={it}><span>{it}</span></li>
                      ))}
                    </ul>
                    <div className="take">
                      <b>สิ่งที่จะได้รับ:</b> {r.take}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- deliverables / outcomes ---------------- */}
        <section id="outcomes" className="rv-sec">
          <div className="container">
            <div className="rv-head">
              <div className="eyebrow">WHAT YOU WILL GET</div>
              <h2>What You Will Get</h2>
            </div>
            <div className="rv-grid cols6">
              {DELIVERABLES.map((d, i) => (
                <div className="rv-tile" key={d.t1}>
                  <div className="ic">{DELIVERABLE_ICONS[i]}</div>
                  <div className="t1">{d.t1}</div>
                  <div className="t2">{d.t2}</div>
                </div>
              ))}
            </div>

            <div className="rv-head" style={{ marginTop: "clamp(40px,5vw,60px)" }}>
              <div className="eyebrow">KEY OUTCOMES</div>
              <h2>Key Outcomes</h2>
            </div>
            <div className="rv-grid cols6">
              {OUTCOMES.map((o, i) => (
                <div className="rv-tile" key={o}>
                  <div className="ic">{OUTCOME_ICONS[i]}</div>
                  <div className="t1" style={{ fontWeight: 700 }}>{o}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- register + sponsorship (merged) ---------------- */}
        <section id="register" className="rv-sec rv-register">
          <div className="container">
            <div className="rv-head">
              <div className="eyebrow">REGISTER NOW</div>
              <h2>สมัครเข้าร่วมอบรม</h2>
              <p>เตรียมความพร้อมทีม NT รับมือแนวทาง AIoT Cybersecurity ของ สกมช.</p>
            </div>
            <div className="reg-merge">
              {/* left: free / sponsorship */}
              <div className="spon-card">
                <div className="spon-badge">พิเศษ!</div>
                <h3 className="spon-h">ผู้อบรม NT ไม่มีค่าใช้จ่ายใด ๆ</h3>
                <div className="spon-value">
                  <div className="vlbl">มูลค่ารวม</div>
                  <div className="vamt">
                    <s>20,000</s> บาท<span>/ท่าน</span>
                  </div>
                  <div className="vfree">ฟรี! สำหรับบุคลากร NT</div>
                </div>
                <div className="spon-incl">
                  {INCLUDED.map((it) => (
                    <div className="incl" key={it}>
                      <Check />
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* right: course details + QR / CTA */}
              <div className="reg-right">
                <div className="rv-info">
                  {[
                    ["DURATION", "2 วัน"],
                    ["TIME", "09:00 – 16:30"],
                    ["FORMAT", "Workshop + Hands-on Lab"],
                    ["LANGUAGE", "ภาษาไทย"],
                    ["TARGET GROUP", "ผู้บริหาร · ผู้จัดการ · วิศวกร · ทีมปฏิบัติการ NT"],
                  ].map(([lbl, val]) => (
                    <div className="row" key={lbl}>
                      <div className="ic">
                        <svg viewBox="0 0 24 24">
                          <path d="M12 2 L20 5 V12 C20 17 16 21 12 22 C8 21 4 17 4 12 V5 Z" fill="none" stroke="#7fd0ff" strokeWidth="2" />
                          <path d="M9 12 L11 14 L15 9.5" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <div className="lbl">{lbl}</div>
                        <div className="val">{val}</div>
                      </div>
                    </div>
                  ))}
                  <div className="reg-contact">
                    <span>☎ 085-495-4294</span>
                    <span>✉ contact@tesa.or.th</span>
                    <span>🌐 www.tesa.or.th</span>
                  </div>
                </div>
                <div className="rv-qr">
                  <div className="qbox">
                    <img src="/assets/qr.svg" alt="QR สำหรับลงทะเบียน" />
                  </div>
                  <a className="rv-btn green" href="#register">REGISTER NOW!</a>
                  <div className="scan">สแกนเพื่อสมัครเข้าร่วมอบรม</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="rv-foot">
        <div className="container inner">
          <div className="brand">
            <img className="nt-logo" src="/assets/nt-logo.svg" alt="NT — National Telecom" />
                  <span className="x">×</span>
            <img className="brand-logo" src="/assets/tesa-logo.svg" alt="TESA" />
            <span className="green">AIoT</span>
          </div>
          <div className="contact">
            <span>☎ 085-495-4294</span>
            <span>✉ contact@tesa.or.th</span>
            <span>🌐 www.tesa.or.th</span>
          </div>
          <div className="copy">© TESA — Thai Embedded Systems Association</div>
        </div>
      </footer>
    </div>
  );
}

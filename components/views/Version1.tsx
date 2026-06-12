// Version 1 — the original scrollable, responsive web view of the TESA AIoT
// Cybersecurity course. Rendered at both /ver01 and /responsive (alias).
// Same palette/branding as the slide deck; layout reflowed for reading.
import SvgDefs from "@/components/SvgDefs";
import SmoothScroll from "@/components/SmoothScroll";
import ShieldGraphic from "@/components/ShieldGraphic";

/* ---- tiny inline icons for outcome / highlight tiles ---- */
function Target() {
  return (
    <svg viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="22" fill="none" stroke="#0e2f6d" strokeWidth="3" />
      <circle cx="32" cy="32" r="11" fill="none" stroke="#0e2f6d" strokeWidth="3" />
      <circle cx="32" cy="32" r="3.4" fill="#22c55e" />
    </svg>
  );
}
function Spark() {
  return (
    <svg viewBox="0 0 64 64">
      <path
        d="M32 8 L37 27 L56 32 L37 37 L32 56 L27 37 L8 32 L27 27 Z"
        fill="none"
        stroke="#0e2f6d"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="32" r="3" fill="#22c55e" />
    </svg>
  );
}

const FEATURES = [
  { sym: "i-shield-check", t1: "SECURE", t2: "AIoT / OT / ICS ENVIRONMENTS" },
  { sym: "i-eye", t1: "REAL-TIME", t2: "VISIBILITY & THREAT DETECTION" },
  { sym: "i-ai-chip", t1: "AI-POWERED", t2: "INTELLIGENCE" },
  { sym: "i-bank", t1: "GOVERNANCE", t2: "COMPLIANCE & RESILIENCE" },
];

const AUDIENCE = [
  { sym: "p-cio", t1: "CIO / CISO", t2: "ผู้นำด้านเทคโนโลยีและความมั่นคงปลอดภัย" },
  { sym: "p-engineer", t1: "OT / IT SECURITY ENGINEERS", t2: "วิศวกรความมั่นคงปลอดภัย OT / IT" },
  { sym: "p-ops", t1: "INFRASTRUCTURE OPERATORS", t2: "ผู้ปฏิบัติงานโครงสร้างพื้นฐานและระบบสำคัญ" },
  { sym: "p-compliance", t1: "COMPLIANCE / RISK MANAGERS", t2: "ผู้จัดการความเสี่ยงและการกำกับ" },
  { sym: "p-dpo", t1: "DATA PROTECTION OFFICERS", t2: "เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล" },
  { sym: "p-gov", t1: "GOVERNMENT & REGULATORS", t2: "หน่วยงานกำกับดูแลและภาครัฐ" },
];

const OUTCOMES = [
  "มองเห็นและควบคุม AIoT / OT ได้จริง",
  "ลดความเสี่ยงและเหตุขัดข้อง",
  "เพิ่มประสิทธิภาพด้วย AI",
  "สอดคล้องมาตรฐานและ PDPA",
  "สร้างความเชื่อมั่นและความต่อเนื่องในการให้บริการ",
  "เตรียมพร้อมรับมือภัยคุกคามและเหตุฉุกเฉิน",
];

const HIGHLIGHTS = [
  { t1: "Executive & Technical Balanced", t2: "ผสานมุมมองเชิงบริหารและเชิงเทคนิค" },
  { t1: "Hands-on Experience", t2: "เวิร์กชอปปฏิบัติจริงจากสถานการณ์จริง" },
  { t1: "AI-Powered Security", t2: "เสริมประสิทธิภาพด้วยเทคโนโลยี AI" },
  { t1: "OT / ICS Focused", t2: "เจาะลึกความมั่นคงปลอดภัยระบบ OT / ICS" },
  { t1: "Best Practices & Standards", t2: "อ้างอิงแนวทางสากลและมาตรฐานสำคัญ" },
  { t1: "Networking & Expert Sharing", t2: "แลกเปลี่ยนกับผู้เชี่ยวชาญและเครือข่าย" },
];

const DAY1 = [
  ["09:00", "M0 · ภูมิทัศน์ภัยคุกคาม AIoT", "Mirai · baby monitor · ความเสี่ยงใหม่จาก AI"],
  ["09:30", "M1 · ฐานกฎหมาย + PDPA", "มาตรา ๙(๔) พ.ร.บ.ไซเบอร์ฯ และ PDPA"],
  ["11:00", "M2 · กรอบแนวคิดและขอบเขต", "จำแนกขอบเขตผลิตภัณฑ์ของตน"],
  ["13:15", "M3 · โครงสร้าง 4 ระดับ", "เลือกระดับความปลอดภัยที่เหมาะสม"],
  ["14:30", "M4 · บทบาท + ความรับผิด", "แยก Track · วาง internal policy"],
  ["15:45", "M5 · VDP + SDLC", "แยก Track · VDP / CSAF / incident playbook"],
  ["16:45", "M6 · สรุป + เตรียม Day 2", "Self-assessment ระดับเป้าหมาย"],
];
const DAY2 = [
  ["09:00", "M0 · ตั้งค่า Lab", "เชื่อม cloud range · network diagram"],
  ["09:30", "M1 · Network Visibility", "Port scanning ด้วย nmap"],
  ["11:00", "M2 · Auth & Password", "ตรวจ credential ด้วย Wireshark"],
  ["13:15", "M3 · Secure Communication", "สแกน TLS ด้วย testssl.sh"],
  ["14:30", "M4 · Vulnerability Mgmt", "แยก Track · SBOM (syft) · CVSS"],
  ["15:45", "M5 · Pentest & Fuzz", "แยก Track · OpenVAS · fuzz API"],
  ["16:45", "M6 · Action Plan", "Gap analysis เทียบ 4 ระดับ"],
];

const STANDARDS = [
  ["ETSI EN 303 645", "Consumer IoT"],
  ["ISO/IEC 27400", "IoT Security & Privacy"],
  ["ISO/IEC 27402", "IoT Cybersecurity Baseline"],
  ["ISO/IEC 29147", "Vulnerability Disclosure"],
  ["ISO/IEC 30111", "Vulnerability Handling"],
  ["NIST SP 800-52 / 131A", "TLS / Crypto"],
  ["OASIS CSAF", "Security Advisory Framework"],
  ["OWASP IoT Top 10", ""],
];
const TOOLS = ["nmap", "Wireshark", "testssl.sh", "tcpdump", "syft", "grype", "OpenVAS", "boofuzz", "ffuf", "searchsploit", "CVSS calc", "Burp Suite"];

export default function Version1() {
  return (
    <div className="rv">
      <SvgDefs />
      <SmoothScroll />

      {/* ---------------- nav ---------------- */}
      <header className="rv-nav">
        <div className="container inner">
          <input type="checkbox" id="rv-menu" className="menu-toggle" />
          <a className="brand" href="#top">
            <img className="brand-logo" src="/assets/tesa-logo.svg" alt="TESA" />
            <span className="green">AIoT</span>
          </a>
          <label htmlFor="rv-menu" className="menu-btn" aria-label="เมนู">
            <span />
            <span />
            <span />
          </label>
          <nav className="links">
            <a href="#why">Why It Matters</a>
            <a href="#program">Program</a>
            <a href="#course">Tracks</a>
            <a href="#audience">Audience</a>
            <a href="#register">Register</a>
          </nav>
          <div className="cta">
            <a className="rv-btn ghost" href="/ver02">NT Edition →</a>
            <a className="rv-btn ghost" href="/">▦ Slide View</a>
            <a className="rv-btn green" href="#register">REGISTER</a>
          </div>
        </div>
      </header>

      <main>
        {/* ---------------- hero ---------------- */}
        <section id="top" className="rv-hero">
          <div className="container">
            <div className="hero-row">
            <div className="hero-text">
            <div className="eyebrow">FOR CRITICAL INFORMATION INFRASTRUCTURE</div>
            <h1>
              <span className="tesa">TESA</span> <span className="aiot">AIoT</span> CYBERSECURITY
            </h1>
            <p className="lead">
              ยกระดับความมั่นคงปลอดภัยของโครงสร้างพื้นฐานสำคัญ ด้วยนโยบายที่เข้มแข็งและการปฏิบัติจริง —
              หลักสูตรอบรมเข้มข้น 2 วัน จากนโยบายสู่การลงมือทำ
            </p>
            <div className="hero-cta">
              <a className="rv-btn green" href="#register">REGISTER NOW</a>
              <a className="rv-btn ghost" href="/">▦ ดูแบบสไลด์</a>
            </div>
            <div className="pills">
              <span>
                <span className="green">2-DAY</span>&nbsp;INTENSIVE PROGRAM
              </span>
              <span>POLICY TO PRACTICE</span>
              <span>HANDS-ON EXPERIENCE</span>
            </div>
            </div>
            <div className="shield-wrap">
              <ShieldGraphic />
            </div>
            </div>

            <div className="rv-feats">
              {FEATURES.map((f) => (
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

        {/* ---------------- why ---------------- */}
        <section id="why" className="rv-sec alt">
          <div className="container">
            <div className="rv-head">
              <div className="eyebrow">WHY IT MATTERS</div>
              <h2>Why AIoT Cybersecurity Matters</h2>
              <p>ภัยคุกคามเพิ่มขึ้น ซับซ้อนขึ้น และส่งผลกระทบต่อความมั่นคงของประเทศโดยตรง</p>
            </div>
            <div className="rv-grid cols3">
              <div className="rv-card">
                <div className="chd">
                  <div className="ht">THE NEW REALITY</div>
                  <div className="hs">ความเสี่ยงที่องค์กรต้องเผชิญ</div>
                </div>
                <div className="cbody">
                  {[
                    ["EXPANDING ATTACK SURFACE", "อุปกรณ์ AIoT/OT เชื่อมต่อจำนวนมาก"],
                    ["RANSOMWARE & DISRUPTION", "หยุดชะงักบริการและเรียกค่าไถ่"],
                    ["SUPPLY CHAIN RISK", "ความเสี่ยงจากซัพพลายเชน"],
                    ["LIMITED VISIBILITY", "มองไม่เห็นอุปกรณ์แบบเรียลไทม์"],
                    ["COMPLIANCE & REGULATION", "กฎหมาย มาตรฐาน และ PDPA"],
                  ].map(([a, b]) => (
                    <div className="rv-row" key={a}>
                      <div className="ic">
                        <svg viewBox="0 0 32 32">
                          <use href="#i-shield-check" />
                        </svg>
                      </div>
                      <div>
                        <div className="t1">{a}</div>
                        <div className="t2">{b}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rv-card">
                <div className="chd">
                  <div className="ht">THE IMPACT</div>
                  <div className="hs">ผลกระทบที่เกิดขึ้นจริง</div>
                </div>
                <div className="cbody">
                  <div className="rv-impact">
                    {[
                      ["หยุดชะงักบริการ", "กระทบธุรกิจและประชาชน"],
                      ["สูญเสียรายได้", "กระทบความเชื่อมั่น"],
                      ["กระทบความปลอดภัย", "เสี่ยงต่อชีวิตและทรัพย์สิน"],
                      ["เสียหายด้านชื่อเสียง", "กู้คืนความเชื่อมั่นยาก"],
                      ["บทลงโทษทางกฎหมาย", "จากการไม่ปฏิบัติตาม"],
                      ["เสี่ยงความมั่นคงชาติ", "โครงสร้างพื้นฐานสำคัญ"],
                    ].map(([a, b]) => (
                      <div className="cell" key={a}>
                        <div className="t1">{a}</div>
                        <div className="t2">{b}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rv-card">
                <div className="chd">
                  <div className="ht">VISIBILITY GAP</div>
                  <div className="hs">ปัญหาที่พบบ่อย</div>
                </div>
                <div className="cbody">
                  <div className="rv-vg">
                    <div className="b ok">
                      <div className="lab">
                        IT ENVIRONMENT
                        <svg viewBox="0 0 24 24" width="22" height="22">
                          <circle cx="12" cy="12" r="11" fill="#22c55e" />
                          <path d="M6 12 L10.5 16.5 L18 8.5" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="sub">มองเห็นและควบคุมได้</div>
                    </div>
                    <div className="b bad">
                      <div className="lab">
                        OT / AIoT ENVIRONMENT
                        <svg viewBox="0 0 24 24" width="22" height="22">
                          <circle cx="12" cy="12" r="11" fill="#ef4444" />
                          <path d="M8 8 L16 16 M16 8 L8 16" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="sub">มองไม่เห็น ไม่ควบคุม มีความเสี่ยงสูง</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rv-banner">
              <svg viewBox="0 0 32 32">
                <path d="M16 3 L28 7 V16 C28 23 22 28 16 30 C10 28 4 23 4 16 V7 Z" fill="none" stroke="#7fd0ff" strokeWidth="2" />
                <path d="M10 16 L14.5 20.5 L22 12.5" stroke="#22c55e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <div className="t">
                การปกป้องโครงสร้างพื้นฐานสำคัญ ต้องเริ่มจาก <span className="accent">"การมองเห็น"</span> และ{" "}
                <span className="accent">"การปฏิบัติที่ถูกต้อง"</span> อย่างเป็นระบบ
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- program ---------------- */}
        <section id="program" className="rv-sec">
          <div className="container">
            <div className="rv-head">
              <div className="eyebrow">2-DAY INTENSIVE PROGRAM</div>
              <h2>2-Day Intensive Program Overview</h2>
              <p>จากนโยบาย สู่การปฏิบัติจริง — From Governance to Real Operations</p>
            </div>
            <div className="rv-grid cols2">
              <div className="rv-card rv-day">
                <div className="chd d1">
                  <div className="tag">DAY 1</div>
                  <div className="nm">POLICY &amp; GOVERNANCE</div>
                </div>
                <div className="cbody">
                  <div className="rv-mods">
                    {DAY1.map(([tm, md, sub]) => (
                      <div className="rv-mod" key={md}>
                        <div className="tm">{tm}</div>
                        <div className="md">
                          <b>{md}</b>
                          <span>{sub}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rv-outcome o1">
                    <b>OUTCOME:</b> วางรากฐานนโยบายและกลยุทธ์ เพื่อการปกป้องโครงสร้างพื้นฐานอย่างยั่งยืน
                  </div>
                </div>
              </div>

              <div className="rv-card rv-day">
                <div className="chd d2">
                  <div className="tag">DAY 2</div>
                  <div className="nm">HANDS-ON &amp; VISIBILITY</div>
                </div>
                <div className="cbody">
                  <div className="rv-mods">
                    {DAY2.map(([tm, md, sub]) => (
                      <div className="rv-mod" key={md}>
                        <div className="tm">{tm}</div>
                        <div className="md">
                          <b>{md}</b>
                          <span>{sub}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rv-outcome o2">
                    <b>OUTCOME:</b> ปฏิบัติการจริงด้วยเครื่องมือ เพิ่มการมองเห็น ป้องกัน และตอบสนองได้ทันที
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- course / tracks ---------------- */}
        <section id="course" className="rv-sec alt">
          <div className="container">
            <div className="rv-head">
              <div className="eyebrow">COURSE OVERVIEW</div>
              <h2>Course Structure &amp; Tracks</h2>
              <p>อิงร่างแนวปฏิบัติของ สกมช. (4 ระดับ · 26 ข้อกำหนด) — Common Core + Role-based Depth</p>
            </div>

            <div className="rv-stats">
              {[
                ["80%", "Hands-on ปฏิบัติจริง"],
                ["2 วัน", "14 โมดูล · 09:00–16:45"],
                ["3 Tracks", "แยกตามบทบาท"],
                ["สกมช.", "อิงข้อ ๖.๑–๖.๒๖"],
                ["8", "มาตรฐานสากลที่อ้างอิง"],
              ].map(([sv, sl]) => (
                <div className="rv-stat" key={sl}>
                  <div className="ic">
                    <svg viewBox="0 0 32 32">
                      <use href="#i-shield-check" />
                    </svg>
                  </div>
                  <div>
                    <div className="sv">{sv}</div>
                    <div className="sl">{sl}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rv-core">
              เช้า: <b>COMMON CORE</b> เรียนร่วมกัน → บ่าย: แยก <b>3 ROLE-BASED TRACKS</b> → ปิดท้าย: <b>ACTION PLAN</b> ร่วม
            </div>

            <div className="rv-grid cols3">
              <div className="rv-card rv-track a">
                <div className="chd">
                  <span className="tag">TRACK A</span>
                  <span className="lvl">ระดับ 2–3</span>
                </div>
                <div className="cbody">
                  <div className="role">ผู้ผลิต / นักพัฒนา</div>
                  <div className="role-en">MANUFACTURER / DEVELOPER</div>
                  <ul>
                    <li><span><b>Secure-by-Design</b> — ปลอดภัยตั้งแต่ต้น</span></li>
                    <li><span><b>SBOM / HBOM</b> — บัญชีส่วนประกอบ</span></li>
                    <li><span><b>Update Integrity</b> + anti-rollback</span></li>
                    <li><span>เตรียมหลักฐานรับรอง <b>ระดับ 2–3</b></span></li>
                  </ul>
                </div>
              </div>
              <div className="rv-card rv-track b">
                <div className="chd">
                  <span className="tag">TRACK B</span>
                  <span className="lvl">ระดับ 3–4</span>
                </div>
                <div className="cbody">
                  <div className="role">ผู้ทดสอบ</div>
                  <div className="role-en">SECURITY TESTER / QA</div>
                  <ul>
                    <li><span><b>Vulnerability Assessment</b></span></li>
                    <li><span><b>Penetration Testing</b> เชิงจริยธรรม</span></li>
                    <li><span><b>Fuzz Testing</b> เชิงลึก (API/firmware)</span></li>
                    <li><span>รายงานตาม <b>CSAF / ISO 29147</b></span></li>
                  </ul>
                </div>
              </div>
              <div className="rv-card rv-track c">
                <div className="chd">
                  <span className="tag">TRACK C</span>
                  <span className="lvl">NetOps / SecOps</span>
                </div>
                <div className="cbody">
                  <div className="role">ทีมเครือข่าย / ความมั่นคงปลอดภัย</div>
                  <div className="role-en">NETOPS / SECOPS</div>
                  <ul>
                    <li><span><b>Continuous Monitoring</b></span></li>
                    <li><span><b>Network Segmentation</b></span></li>
                    <li><span><b>Vendor Management</b> สำหรับ IoT</span></li>
                    <li><span><b>Incident Response</b> playbook</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rv-grid cols2" style={{ marginTop: "var(--gap)" }}>
              <div className="rv-card rv-std">
                <div className="cbody">
                  <div className="role" style={{ marginBottom: 12 }}>มาตรฐานสากลที่ครอบคลุม</div>
                  <div className="grid">
                    {STANDARDS.map(([a, b]) => (
                      <div className="si" key={a}>
                        <span>
                          <b>{a}</b>
                          {b ? ` — ${b}` : ""}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rv-card">
                <div className="cbody">
                  <div className="role" style={{ marginBottom: 12 }}>เครื่องมือที่จะได้ฝึกใช้</div>
                  <div className="rv-chips">
                    {TOOLS.map((t) => (
                      <span className="chip" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- audience / outcomes / highlights ---------------- */}
        <section id="audience" className="rv-sec">
          <div className="container">
            <div className="rv-head">
              <div className="eyebrow">WHO SHOULD ATTEND</div>
              <h2>Who Should Attend &amp; What You Will Achieve</h2>
            </div>

            <div className="rv-grid cols6">
              {AUDIENCE.map((a) => (
                <div className="rv-tile" key={a.t1}>
                  <div className="ic">
                    <svg viewBox="0 0 64 64">
                      <use href={`#${a.sym}`} />
                    </svg>
                  </div>
                  <div className="t1">{a.t1}</div>
                  <div className="t2">{a.t2}</div>
                </div>
              ))}
            </div>

            <div className="rv-head" style={{ marginTop: "clamp(40px,5vw,60px)" }}>
              <div className="eyebrow">KEY OUTCOMES</div>
              <h2>Key Outcomes</h2>
            </div>
            <div className="rv-grid cols6">
              {OUTCOMES.map((o) => (
                <div className="rv-tile" key={o}>
                  <div className="ic">
                    <Target />
                  </div>
                  <div className="t1" style={{ fontWeight: 700 }}>{o}</div>
                </div>
              ))}
            </div>

            <div className="rv-head" style={{ marginTop: "clamp(40px,5vw,60px)" }}>
              <div className="eyebrow">PROGRAM HIGHLIGHTS</div>
              <h2>Program Highlights</h2>
            </div>
            <div className="rv-grid cols6">
              {HIGHLIGHTS.map((h) => (
                <div className="rv-tile" key={h.t1}>
                  <div className="ic">
                    <Spark />
                  </div>
                  <div className="t1">{h.t1}</div>
                  <div className="t2">{h.t2}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- register ---------------- */}
        <section id="register" className="rv-sec rv-register">
          <div className="container">
            <div className="rv-head">
              <div className="eyebrow">JOIN US</div>
              <h2>Join Us</h2>
              <p>พัฒนาศักยภาพทีมของคุณ เพื่อความมั่นคงปลอดภัยและยั่งยืนของประเทศ</p>
            </div>
            <div className="reg-wrap">
              <div className="rv-info">
                {[
                  ["DURATION", "2 วัน (09:00–16:45)"],
                  ["FORMAT", "Workshop + Lab (Hands-on)"],
                  ["LANGUAGE", "ภาษาไทย"],
                  ["CERTIFICATE", "ใบรับรองจาก TESA เมื่อจบครบ 2 วัน"],
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
              </div>
              <div className="rv-qr">
                <div className="qbox">
                  <img src="/assets/qr.svg" alt="QR สำหรับลงทะเบียน" />
                </div>
                <a className="rv-btn green" href="#register">REGISTER NOW!</a>
                <div className="scan">สแกนเพื่อลงทะเบียน</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="rv-foot">
        <div className="container inner">
          <div className="brand">
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

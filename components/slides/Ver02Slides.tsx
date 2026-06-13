// NT × TESA edition — slide-deck version of /ver02, served at /ver02/slides.
// Six 1536×1024 slides rendered through the shared <Deck> shell. Content mirrors
// the AIoT Cybersecurity Guideline Readiness Workshop spec v4. Styling: v2s.css.
import * as React from "react";
import TelecomHero from "@/components/TelecomHero";
import WhyInfographic from "@/components/WhyInfographic";

/* ----------------------------- shared chrome ----------------------------- */
function Brand() {
  return (
    <div className="v2s-brand">
      <img className="nt" src="/assets/nt-logo.svg" alt="NT — National Telecom" />
      <span className="x">×</span>
      <img className="tesa" src="/assets/tesa-logo.svg" alt="TESA" />
      <span className="aiot">AIoT</span>
    </div>
  );
}

function TopBar({ n }: { n: string }) {
  return (
    <div className="v2s-top">
      <Brand />
      <div className="v2s-top-r">
        <span className="wlabel">AIoT Cybersecurity Guideline Readiness Workshop</span>
        <span className="pg">{n}<span>/06</span></span>
      </div>
    </div>
  );
}

function FootBar() {
  return (
    <div className="v2s-foot">
      <span>☎ 085-495-4294</span>
      <span>✉ contact@tesa.or.th</span>
      <span>🌐 www.tesa.or.th</span>
      <span className="free">★ ฟรีสำหรับบุคลากร NT — สนับสนุนโดย TESA</span>
    </div>
  );
}

function Title({ kick, children }: { kick: string; children: React.ReactNode }) {
  return (
    <div className="v2s-title">
      <div className="kick">{kick}</div>
      <h2>{children}</h2>
    </div>
  );
}

/* --------------------------------- data --------------------------------- */
const PILLARS = [
  { sym: "i-bank", t1: "TELECOM INFRASTRUCTURE", t2: "โครงสร้างพื้นฐานโทรคมนาคมของ NT" },
  { sym: "i-ai-chip", t1: "AIoT CONVERGENCE", t2: "อุปกรณ์ AIoT เชื่อมต่อจำนวนมหาศาล" },
  { sym: "i-shield-check", t1: "CYBER RESILIENCE", t2: "ลดความเสี่ยงและภัยคุกคามไซเบอร์" },
  { sym: "i-eye", t1: "NCSA READINESS", t2: "พร้อมรับแนวทาง สกมช. ในอนาคต" },
];

const WHY = [
  { th: "Network Operator ที่ต้องรองรับการมาของ AIoT จำนวนมหาศาล", en: "NT infrastructure increasingly connects AIoT devices." },
  { th: "ข้อกำหนดด้าน Cybersecurity ของ สกมช. ที่ต้องคำนึงในการดำเนินการในอนาคต", en: "Future governance requirements should be understood early." },
  { th: "เตรียมพร้อมต่อความเสี่ยงจากภัยคุกคามไซเบอร์ ให้ความปลอดภัยต่อบริการและข้อมูลสำคัญขององค์กร", en: "Cybersecurity readiness reduces operational risk." },
  { th: "เสริมสร้างศักยภาพบุคลากร ให้พร้อมรับมือเทคโนโลยีและภัยคุกคามรูปแบบใหม่", en: "People readiness is a strategic investment." },
];

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

const ROLES = [
  { sym: "p-cio", cls: "a", role: "ผู้บริหารและผู้นำ", en: "EXECUTIVES & LEADERS", who: "VP · SVP · Director · Department Head", items: ["เข้าใจผลกระทบเชิงธุรกิจ", "เข้าใจความรับผิดชอบด้านการกำกับดูแล", "เตรียมทิศทางเชิงกลยุทธ์"], take: "เข้าใจทิศทาง Cybersecurity ในอนาคตและผลกระทบต่อองค์กร" },
  { sym: "p-compliance", cls: "b", role: "ผู้จัดการและหัวหน้าทีม", en: "MANAGERS & TEAM LEADERS", who: "Team Leader · Project Manager · Operations Manager", items: ["แปลงนโยบายสู่การปฏิบัติ", "บริหารโครงการความมั่นคงปลอดภัย", "ประเมินความเสี่ยงเชิงปฏิบัติการ"], take: "แปลงนโยบายเป็นแผนการดำเนินงานที่ทำได้จริง" },
  { sym: "p-engineer", cls: "c", role: "วิศวกรและทีมปฏิบัติการ", en: "ENGINEERS & OPERATIONS", who: "Network · Infrastructure · Operations · Security Engineers", items: ["เข้าใจมาตรการควบคุมเชิงเทคนิค", "นำแนวคิดไปประยุกต์ใช้จริง", "เพิ่มความมั่นใจในการทำงาน"], take: "เข้าใจมาตรการความมั่นคงปลอดภัย AIoT เชิงปฏิบัติ" },
];

const INCLUDED = ["ค่าวิทยากรผู้เชี่ยวชาญ", "ค่าดำเนินการจัดอบรมทั้งหมด", "Coffee Break ตลอดงาน", "อาหารว่างและเครื่องดื่มทั้ง 2 วัน"];

function Check({ s = 30 }: { s?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={s} height={s}>
      <circle cx="12" cy="12" r="11" fill="#22c55e" />
      <path d="M6 12 L10.5 16.5 L18 8.5" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ================================ SLIDES ================================ */

/* 01 — Title */
export function V2S1() {
  return (
    <section className="slide v2s dark v2s-title-slide">
      <div className="v2s-net" aria-hidden />
      <TopBar n="01" />
      <div className="v2s-hero">
        <div className="v2s-hero-text">
          <div className="eyebrow">NT × TESA · OFFICIAL COLLABORATION</div>
          <span className="badge">2-DAY INTENSIVE PROGRAM</span>
          <h1>
            <span className="tesa">TESA</span> <span className="aiot">AIoT</span> CYBERSECURITY <span className="guide">GUIDELINE</span> READINESS WORKSHOP
          </h1>
          <p className="sub-en">Understanding Future AIoT Cybersecurity Requirements for Network Operators</p>
          <p className="lead">
            เตรียมความพร้อมบุคลากร NT ให้เข้าใจแนวทาง AIoT Cybersecurity Guideline ของ สกมช. (NCSA)
            และประยุกต์ใช้กับโครงสร้างพื้นฐานและบริการขององค์กรได้อย่างมีประสิทธิภาพ
          </p>
          <div className="pills">
            <span><b className="green">FREE</b> FOR NT</span>
            <span>WORKSHOP + HANDS-ON LAB</span>
            <span>09:00–16:30 · THAI</span>
          </div>
        </div>
        <div className="v2s-hero-art">
          <TelecomHero />
        </div>
      </div>
      <div className="v2s-feats">
        {PILLARS.map((f) => (
          <div className="v2s-feat" key={f.t1}>
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
      <FootBar />
    </section>
  );
}

/* 02 — Why NT */
export function V2S2() {
  return (
    <section className="slide v2s light">
      <TopBar n="02" />
      <div className="v2s-body">
        <Title kick="WHY NT SHOULD ATTEND">Why NT Should Attend</Title>
        <div className="v2s-why2">
          <div className="v2s-wfig">
            <WhyInfographic />
            <div className="cap">
              <b>AIoT × NT × CYBERSECURITY</b>
              <span>โครงสร้างพื้นฐานที่เชื่อมต่อ ต้องพร้อมรับมือตั้งแต่วันนี้</span>
            </div>
          </div>
          <div className="v2s-wcards">
            {WHY.map((w, i) => (
              <div className="v2s-wcard" key={i}>
                <div className="num">{String(i + 1).padStart(2, "0")}</div>
                <div className="b">
                  <h3>{w.th}</h3>
                  <p>{w.en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FootBar />
    </section>
  );
}

/* day-agenda slide shared body */
function AgendaSlide({ n, day, name, dcls, topics, focus }: { n: string; day: string; name: string; dcls: string; topics: string[][]; focus: string }) {
  return (
    <section className="slide v2s light">
      <TopBar n={n} />
      <div className="v2s-body">
        <Title kick="PROGRAM AGENDA">2-Day Program Agenda</Title>
        <div className="v2s-agenda">
          <aside className={`v2s-daycard ${dcls}`}>
            <div className="tag">{day}</div>
            <div className="nm">{name}</div>
            <div className="meta">09:00 – 16:30</div>
            <div className="focus">
              <b>FOCUS</b>
              {focus}
            </div>
          </aside>
          <ol className="v2s-topics">
            {topics.map(([t, sub], i) => (
              <li key={t}>
                <span className="tn">{String(i + 1).padStart(2, "0")}</span>
                <span className="tt">
                  <b>{t}</b>
                  <em>{sub}</em>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <FootBar />
    </section>
  );
}

/* 03 — Day 1 */
export function V2S3() {
  return (
    <AgendaSlide
      n="03"
      day="DAY 1"
      name="UNDERSTANDING AIoT CYBERSECURITY"
      dcls="d1"
      topics={DAY1}
      focus="เข้าใจภัยคุกคาม ทิศทาง สกมช. และการประเมินความเสี่ยงของโครงสร้างพื้นฐาน"
    />
  );
}

/* 04 — Day 2 */
export function V2S4() {
  return (
    <AgendaSlide
      n="04"
      day="DAY 2"
      name="PRACTICAL SECURITY CONTROLS"
      dcls="d2"
      topics={DAY2}
      focus="ลงมือกับมาตรการควบคุมจริง ตั้งแต่การมองเห็นสินทรัพย์ถึงการตอบสนองเหตุ"
    />
  );
}

/* 05 — Designed for every role */
export function V2S5() {
  return (
    <section className="slide v2s light">
      <TopBar n="05" />
      <div className="v2s-body">
        <Title kick="DESIGNED FOR EVERY ROLE">Designed for Every Role</Title>
        <div className="v2s-roles">
          {ROLES.map((r) => (
            <div className={`v2s-role ${r.cls}`} key={r.en}>
              <div className="rhd">
                <div className="ic">
                  <svg viewBox="0 0 64 64">
                    <use href={`#${r.sym}`} />
                  </svg>
                </div>
                <div className="en">{r.en}</div>
                <div className="th">{r.role}</div>
              </div>
              <div className="who">{r.who}</div>
              <ul>
                {r.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <div className="take">
                <b>สิ่งที่จะได้รับ</b>
                {r.take}
              </div>
            </div>
          ))}
        </div>
      </div>
      <FootBar />
    </section>
  );
}

/* 06 — Sponsorship + Register */
export function V2S6() {
  return (
    <section className="slide v2s dark v2s-spon-slide">
      <div className="v2s-net" aria-hidden />
      <TopBar n="06" />
      <div className="v2s-spon">
        <div className="spon-l">
          <div className="badge">พิเศษ!</div>
          <h2>ผู้อบรม NT ไม่มีค่าใช้จ่ายใด ๆ</h2>
          <div className="incl">
            {INCLUDED.map((it) => (
              <div className="i" key={it}>
                <Check s={28} />
                <span>{it}</span>
              </div>
            ))}
          </div>
          <div className="value">
            <div className="v">
              <span className="lbl">มูลค่ารวม</span>
              <span className="amt"><s>20,000</s> บาท<i>/ท่าน</i></span>
            </div>
            <div className="free">ฟรี! สำหรับบุคลากร NT</div>
          </div>
        </div>
        <div className="spon-r">
          <div className="rtitle">REGISTER NOW</div>
          <div className="qbox">
            <img src="/assets/qr.svg" alt="QR สำหรับลงทะเบียน" />
          </div>
          <div className="scan">สแกนเพื่อสมัครเข้าร่วมอบรม</div>
          <ul className="meta">
            <li><b>2 วัน</b> · 09:00 – 16:30</li>
            <li>Workshop + Hands-on Lab</li>
            <li>บรรยายภาษาไทย</li>
            <li>ผู้บริหาร · ผู้จัดการ · วิศวกร · ทีมปฏิบัติการ NT</li>
          </ul>
          <div className="contact">
            <span>☎ 085-495-4294</span>
            <span>✉ contact@tesa.or.th</span>
            <span>🌐 www.tesa.or.th</span>
          </div>
        </div>
      </div>
    </section>
  );
}

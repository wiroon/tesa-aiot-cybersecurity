// Slide 5 — 05 Course Overview
// Built from TESA_Course_Overview.md; light theme consistent with pages 2–4.
import * as React from "react";

// small green check used for track focus bullets
function Check() {
  return (
    <svg className="dot" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="9" fill="#e5f6ee" stroke="#1f8a5b" strokeWidth="1.4" />
      <path
        d="M6 10 L9 13 L14.5 7"
        fill="none"
        stroke="#1f8a5b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Slide5() {
  return (
    <section data-label="05 Course Overview" className="slide light p5">
      <div className="page-badge">PAGE 5</div>

      <div className="slide-title">
        <div className="h1">COURSE OVERVIEW</div>
        <div className="sub">หลักสูตรอบรม Cybersecurity สำหรับ AIoT · อิงร่างแนวปฏิบัติของ สกมช. (4 ระดับ · 26 ข้อกำหนด)</div>
      </div>

      {/* highlight stats */}
      <div className="p5-stats">
        <div className="stat">
          <div className="ico">
            <svg viewBox="0 0 32 32">
              <path
                d="M20 6 L26 12 L14 24 L8 24 L8 18 Z"
                fill="none"
                stroke="#7fd0ff"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <line x1="18" y1="8" x2="24" y2="14" stroke="#7fd0ff" strokeWidth="2" />
              <line x1="6" y1="28" x2="26" y2="28" stroke="#22c55e" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="sv">80%</div>
            <div className="sl">Hands-on ปฏิบัติจริง</div>
          </div>
        </div>

        <div className="stat">
          <div className="ico">
            <svg viewBox="0 0 32 32">
              <rect x="5" y="7" width="22" height="20" rx="2" fill="none" stroke="#7fd0ff" strokeWidth="2" />
              <line x1="5" y1="13" x2="27" y2="13" stroke="#7fd0ff" strokeWidth="2" />
              <line x1="11" y1="4" x2="11" y2="9" stroke="#7fd0ff" strokeWidth="2" strokeLinecap="round" />
              <line x1="21" y1="4" x2="21" y2="9" stroke="#7fd0ff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="sv">2 วัน</div>
            <div className="sl">14 โมดูล · 09:00–16:45</div>
          </div>
        </div>

        <div className="stat">
          <div className="ico">
            <svg viewBox="0 0 32 32">
              <circle cx="16" cy="8" r="4" fill="none" stroke="#7fd0ff" strokeWidth="2" />
              <circle cx="7" cy="24" r="4" fill="none" stroke="#7fd0ff" strokeWidth="2" />
              <circle cx="25" cy="24" r="4" fill="none" stroke="#7fd0ff" strokeWidth="2" />
              <path d="M16 12 V16 M16 16 L7 20 M16 16 L25 20" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="sv">3 Tracks</div>
            <div className="sl">Common Core + แยกตามบทบาท</div>
          </div>
        </div>

        <div className="stat">
          <div className="ico">
            <svg viewBox="0 0 32 32">
              <path d="M8 4 H20 L25 9 V28 H8 Z" fill="none" stroke="#7fd0ff" strokeWidth="2" strokeLinejoin="round" />
              <path d="M20 4 V9 H25" fill="none" stroke="#7fd0ff" strokeWidth="2" strokeLinejoin="round" />
              <path d="M12 18 L15 21 L21 14" fill="none" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div className="sv">สกมช.</div>
            <div className="sl">อิงข้อ ๖.๑–๖.๒๖ โดยตรง</div>
          </div>
        </div>

        <div className="stat">
          <div className="ico">
            <svg viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="11" fill="none" stroke="#7fd0ff" strokeWidth="2" />
              <ellipse cx="16" cy="16" rx="5" ry="11" fill="none" stroke="#7fd0ff" strokeWidth="2" />
              <line x1="5" y1="16" x2="27" y2="16" stroke="#7fd0ff" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <div className="sv">8</div>
            <div className="sl">มาตรฐานสากลที่อ้างอิง</div>
          </div>
        </div>
      </div>

      {/* learning model + 3 tracks */}
      <div className="p5-model">
        <div className="core-note">
          <span>เช้า: <b>COMMON CORE</b> เรียนร่วมกัน</span>
          <span className="arrow">→</span>
          <span>บ่าย: แยก <b>3 ROLE-BASED TRACKS</b></span>
          <span className="arrow">→</span>
          <span>ปิดท้าย: <b>ACTION PLAN</b> ร่วม</span>
        </div>

        <div className="tracks">
          {/* Track A */}
          <div className="track tA">
            <div className="thead">
              <div className="tleft">
                <svg viewBox="0 0 32 32">
                  <rect x="9" y="9" width="14" height="14" rx="2" fill="none" stroke="#fff" strokeWidth="2" />
                  <g stroke="#fff" strokeWidth="2" strokeLinecap="round">
                    <line x1="13" y1="6" x2="13" y2="9" /><line x1="19" y1="6" x2="19" y2="9" />
                    <line x1="13" y1="23" x2="13" y2="26" /><line x1="19" y1="23" x2="19" y2="26" />
                    <line x1="6" y1="13" x2="9" y2="13" /><line x1="6" y1="19" x2="9" y2="19" />
                    <line x1="23" y1="13" x2="26" y2="13" /><line x1="23" y1="19" x2="26" y2="19" />
                  </g>
                </svg>
                <span className="tag">TRACK A</span>
              </div>
              <span className="lvl">ระดับ 2–3</span>
            </div>
            <div className="role">ผู้ผลิต / นักพัฒนา</div>
            <div className="role-en">MANUFACTURER / DEVELOPER</div>
            <div className="focus">
              <div className="f"><Check /><div className="ft"><b>Secure-by-Design</b> — ออกแบบให้ปลอดภัยตั้งแต่ต้น</div></div>
              <div className="f"><Check /><div className="ft"><b>SBOM / HBOM</b> — จัดทำบัญชีส่วนประกอบซอฟต์แวร์/ฮาร์ดแวร์</div></div>
              <div className="f"><Check /><div className="ft"><b>Update Integrity</b> — อัปเดตปลอดภัย + anti-rollback</div></div>
              <div className="f"><Check /><div className="ft">เตรียมหลักฐานเพื่อการรับรอง <b>ระดับ 2–3</b></div></div>
            </div>
          </div>

          {/* Track B */}
          <div className="track tB">
            <div className="thead">
              <div className="tleft">
                <svg viewBox="0 0 32 32">
                  <circle cx="14" cy="14" r="8" fill="none" stroke="#fff" strokeWidth="2" />
                  <line x1="20" y1="20" x2="27" y2="27" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M10.5 14 L13 16.5 L18 11" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="tag">TRACK B</span>
              </div>
              <span className="lvl">ระดับ 3–4</span>
            </div>
            <div className="role">ผู้ทดสอบ</div>
            <div className="role-en">SECURITY TESTER / QA</div>
            <div className="focus">
              <div className="f"><Check /><div className="ft"><b>Vulnerability Assessment</b> — สแกนและประเมินช่องโหว่</div></div>
              <div className="f"><Check /><div className="ft"><b>Penetration Testing</b> — ทดสอบเจาะระบบตามหลักจริยธรรม</div></div>
              <div className="f"><Check /><div className="ft"><b>Fuzz Testing</b> เชิงลึก — ทดสอบ API / firmware</div></div>
              <div className="f"><Check /><div className="ft">รายงานตาม <b>CSAF / ISO 29147</b> (ระดับ 3–4)</div></div>
            </div>
          </div>

          {/* Track C */}
          <div className="track tC">
            <div className="thead">
              <div className="tleft">
                <svg viewBox="0 0 32 32">
                  <rect x="4" y="6" width="11" height="9" rx="1" fill="none" stroke="#fff" strokeWidth="2" />
                  <rect x="18" y="11" width="10" height="7" rx="1" fill="none" stroke="#fff" strokeWidth="2" />
                  <circle cx="9" cy="24" r="3" fill="none" stroke="#fff" strokeWidth="2" />
                  <circle cx="23" cy="25" r="3" fill="none" stroke="#fff" strokeWidth="2" />
                  <path d="M9 15 V21 M23 18 V22" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="tag">TRACK C</span>
              </div>
              <span className="lvl">NetOps / SecOps</span>
            </div>
            <div className="role">ทีมเครือข่าย / ความมั่นคงปลอดภัย</div>
            <div className="role-en">NETOPS / SECOPS</div>
            <div className="focus">
              <div className="f"><Check /><div className="ft"><b>Continuous Monitoring</b> — เฝ้าระวังเครือข่ายต่อเนื่อง</div></div>
              <div className="f"><Check /><div className="ft"><b>Network Segmentation</b> — แบ่งโซนลดพื้นที่โจมตี</div></div>
              <div className="f"><Check /><div className="ft"><b>Vendor Management</b> — procurement policy สำหรับ IoT</div></div>
              <div className="f"><Check /><div className="ft"><b>Incident Response</b> — playbook รับมือเหตุการณ์</div></div>
            </div>
          </div>
        </div>
      </div>

      {/* standards + tools */}
      <div className="p5-bottom">
        <div className="pcard p5-std">
          <div className="ph">
            <svg viewBox="0 0 24 24">
              <path d="M12 2 L20 5 V11 C20 16 16 21 12 22 C8 21 4 16 4 11 V5 Z" fill="none" stroke="#0e2f6d" strokeWidth="2" />
              <path d="M9 12 L11 14 L15 9.5" fill="none" stroke="#1f8a5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            มาตรฐานสากลที่ครอบคลุม
          </div>
          <div className="grid">
            <div className="si"><span><b>ETSI EN 303 645</b> — Consumer IoT</span></div>
            <div className="si"><span><b>ISO/IEC 29147</b> — Vulnerability Disclosure</span></div>
            <div className="si"><span><b>ISO/IEC 27400</b> — IoT Security & Privacy</span></div>
            <div className="si"><span><b>ISO/IEC 30111</b> — Vulnerability Handling</span></div>
            <div className="si"><span><b>ISO/IEC 27402</b> — IoT Cybersecurity Baseline</span></div>
            <div className="si"><span><b>NIST SP 800-52 / 131A</b> — TLS / Crypto</span></div>
            <div className="si"><span><b>OASIS CSAF</b> — Security Advisory Framework</span></div>
            <div className="si"><span><b>OWASP IoT Top 10</b></span></div>
          </div>
        </div>

        <div className="pcard p5-tools">
          <div className="ph">
            <svg viewBox="0 0 24 24">
              <path
                d="M14 6 a4 4 0 1 0 4 4 L21 13 L19 15 L16 12 a4 4 0 0 1 -6 -6 L8 4 Z"
                fill="none"
                stroke="#0e2f6d"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            เครื่องมือที่จะได้ฝึกใช้
          </div>
          <div className="chips">
            <span className="chip">nmap</span>
            <span className="chip">Wireshark</span>
            <span className="chip">testssl.sh</span>
            <span className="chip">tcpdump</span>
            <span className="chip">syft</span>
            <span className="chip">grype</span>
            <span className="chip">OpenVAS</span>
            <span className="chip">boofuzz</span>
            <span className="chip">ffuf</span>
            <span className="chip">searchsploit</span>
            <span className="chip">CVSS calc</span>
            <span className="chip">Burp Suite</span>
          </div>
        </div>
      </div>

      {/* footer tagline */}
      <div className="p5-foot">
        <div className="ico">
          <svg viewBox="0 0 32 32">
            <path d="M16 3 L28 7 V16 C28 23 22 28 16 30 C10 28 4 23 4 16 V7 Z" fill="none" stroke="#7fd0ff" strokeWidth="2" />
            <path d="M10 16 L14.5 20.5 L22 12.5" fill="none" stroke="#22c55e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="q">
          เปลี่ยนร่างแนวปฏิบัติของ สกมช. จากเอกสารกำกับ ให้เป็น{" "}
          <span className="accent">"เช็กลิสต์ปฏิบัติการที่ทำตามได้จริง"</span> ในวันจันทร์ถัดไป
        </div>
        <div className="brand">
          <div className="label">POWERED BY</div>
          <div className="name">
            TESA <span className="green">AIoT</span>
          </div>
        </div>
      </div>
    </section>
  );
}

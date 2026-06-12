// /ver02 — NT × TESA edition of the course-promotion web.
// Content from AIoT Cybersecurity Guideline Readiness Workshop spec v4.
import type { Metadata } from "next";
import Version2 from "@/components/views/Version2";
import "../responsive/responsive.css";
import "./ver02.css";

export const metadata: Metadata = {
  title: "NT × TESA — AIoT Cybersecurity Guideline Readiness Workshop (Ver 02)",
  description:
    "หลักสูตรเตรียมความพร้อม AIoT Cybersecurity Guideline สำหรับบุคลากร NT — สนับสนุนเต็มจำนวนโดย TESA · อบรม 2 วัน",
};

export default function Ver02Page() {
  return <Version2 />;
}

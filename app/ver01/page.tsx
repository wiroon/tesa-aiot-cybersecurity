// /ver01 — Version 1 of the course-promotion web (standard TESA AIoT edition).
import type { Metadata } from "next";
import Version1 from "@/components/views/Version1";
import "../responsive/responsive.css";

export const metadata: Metadata = {
  title: "TESA AIoT Cybersecurity — หลักสูตรอบรม (Ver 01)",
  description: "AIoT Cybersecurity for Critical Information Infrastructure — หลักสูตรอบรม 2 วัน โดย TESA",
};

export default function Ver01Page() {
  return <Version1 />;
}

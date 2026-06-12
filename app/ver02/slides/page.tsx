// /ver02/slides — NT × TESA slide-deck edition (fit-to-viewport, thumbnail rail).
import type { Metadata } from "next";
import Deck, { type SlideDef } from "@/components/Deck";
import SvgDefs from "@/components/SvgDefs";
import { V2S1, V2S2, V2S3, V2S4, V2S5, V2S6 } from "@/components/slides/Ver02Slides";
import "./v2s.css";

export const metadata: Metadata = {
  title: "NT × TESA — AIoT Cybersecurity Workshop (Slides)",
  description: "สไลด์นำเสนอหลักสูตร AIoT Cybersecurity Guideline Readiness Workshop สำหรับบุคลากร NT",
};

const slides: SlideDef[] = [
  { label: "01 Title", node: <V2S1 /> },
  { label: "02 Why NT", node: <V2S2 /> },
  { label: "03 Day 1", node: <V2S3 /> },
  { label: "04 Day 2", node: <V2S4 /> },
  { label: "05 Roles", node: <V2S5 /> },
  { label: "06 Sponsorship", node: <V2S6 /> },
];

export default function Ver02SlidesPage() {
  return (
    <>
      <SvgDefs />
      <Deck slides={slides} webView={{ href: "/ver02", label: "WEB VIEW" }} />
    </>
  );
}

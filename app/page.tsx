import Deck, { type SlideDef } from "@/components/Deck";
import SvgDefs from "@/components/SvgDefs";

import Slide1 from "@/components/slides/Slide1";
import Slide2 from "@/components/slides/Slide2";
import Slide3 from "@/components/slides/Slide3";
import Slide4 from "@/components/slides/Slide4";
import Slide5 from "@/components/slides/Slide5";

const slides: SlideDef[] = [
  { label: "01 Hero", node: <Slide1 /> },
  { label: "02 Why It Matters", node: <Slide2 /> },
  { label: "03 Program Overview", node: <Slide3 /> },
  { label: "04 Who Should Attend", node: <Slide4 /> },
  { label: "05 Course Overview", node: <Slide5 /> },
];

export default function Page() {
  return (
    <>
      <SvgDefs />
      <Deck slides={slides} />
    </>
  );
}

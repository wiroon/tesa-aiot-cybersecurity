import type { Metadata, Viewport } from "next";
import "./globals.css";
// deck.css (which pins the body to overflow:hidden for the fixed slide stage)
// is imported by <Deck> so it only applies to the slide-view route — the
// /responsive route stays normally scrollable.
import "./p5.css";

export const metadata: Metadata = {
  title: "TESA AIoT Cybersecurity — Sales Kit",
  description:
    "AIoT Cybersecurity for Critical Information Infrastructure — a 2-day intensive training program by TESA.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06122c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}

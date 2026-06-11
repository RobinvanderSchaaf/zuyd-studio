import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";


const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Zuyd Studio — Custom Websites for Ambitious Businesses",
  description:
    "We design and build custom websites that are fast, scalable and made to convert.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
    <html lang="en">
      <body className={'${dmSerif.variable} ${dmSans.variable}'}>
        <SpeedInsights />
        <Navbar />
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Kallery Galleria — Premium Commercial Property | Irinjalakuda, Thrissur",
  description:
    "12,000 sq ft. 30 cents. 3 floors. Prime main road location in Irinjalakuda. Available for lease at ₹3.5L/month or outright sale at ₹8.5 Crores.",
  keywords: "commercial property Thrissur, Irinjalakuda commercial building, Kallery Galleria, commercial space for lease Thrissur, commercial building for sale Kerala",
  openGraph: {
    title: "Kallery Galleria — Premium Commercial Property",
    description: "12,000 sq ft of premium commercial space in Irinjalakuda, Thrissur. Lease or sale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable} bg-obsidian-950 text-ivory antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm",
});
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: {
    default: "Edna Osayamen Orumwense | Content Creator",
    template: "%s | Edna Osayamen Orumwense",
  },
  description:
    "Explore the work of Edna Osayamen Orumwense, a Middlesbrough-based content creator and creative director making short-form videos, UGC, brand content and social media campaigns.",
  applicationName: "Edna Osayamen Orumwense",
  authors: [{ name: "Edna Osayamen Orumwense" }],
  creator: "Edna Osayamen Orumwense",
  keywords: [
    "Edna Osayamen Orumwense",
    "content creator",
    "creative director",
    "Middlesbrough content creator",
    "short-form video",
    "user-generated content",
    "UGC creator",
    "brand content",
    "social media management",
    "video editing",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "Edna Osayamen Orumwense | Content Creator",
    description:
      "Short-form video, user-generated content and social campaigns by Edna Osayamen Orumwense, a content creator and creative director in Middlesbrough, UK.",
    siteName: "Edna Osayamen Orumwense",
    images: [
      {
        url: "/images/og-image.png",
        width: 4043,
        height: 2603,
        alt: "Edna Osayamen Orumwense, content creator and creative director",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edna Osayamen Orumwense | Content Creator",
    description:
      "Short-form video, user-generated content and social campaigns by Edna Osayamen Orumwense in Middlesbrough, UK.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dm.variable} ${instrument.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

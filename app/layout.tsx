import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Providers } from "./providers";
import "./globals.css";

const siteUrl = "https://techdr.in";
const siteName = "TechDr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TechDr | Healthcare Digital Growth Studio",
    template: "%s | TechDr",
  },
  description:
    "Healthcare-focused digital growth studio for doctors, clinics and hospitals. Marketing, SEO, ads, branding and booking systems trusted by 200+ healthcare clients.",
  openGraph: {
    title: "TechDr | Healthcare Digital Growth Studio",
    description:
      "TechDr helps doctors, clinics and hospitals attract more patients, automate bookings and build stronger healthcare brands.",
    url: "/",
    siteName,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechDr | Healthcare Digital Growth Studio",
    description:
      "Digital marketing, automation and branding for healthcare teams across India.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

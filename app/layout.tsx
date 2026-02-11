import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
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
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11117817231"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('js', new Date());
            gtag('config', 'AW-11117817231');
          `}
        </Script>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechDr | Digital Marketing Agency   200+ Healthcare Clients",
  description:
    "TechDr is a digital marketing agency trusted by 200+ clinics and hospitals. SEO, Google Ads, GMB, and smart appointment booking for healthcare in Hyderabad and beyond.",
  openGraph: {
    title: "TechDr | Digital Marketing Agency   200+ Healthcare Clients",
    description:
      "Digital marketing and smart appointment booking for doctors, clinics and hospitals. Trusted by 200+ clients.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

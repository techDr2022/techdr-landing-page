// Currently no global client-side providers are required.
// This file exists to match the Next.js App Router pattern
// and can be extended later if needed (e.g. for state, theming).
"use client";

export function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

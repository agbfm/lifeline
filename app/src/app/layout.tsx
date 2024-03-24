import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lifelines",
  description: "Keep track of the lines in your life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

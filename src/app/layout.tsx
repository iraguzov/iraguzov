import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ilya Raguzov | QA Automation Engineer",
  description:
    "Senior QA Automation Engineer — building robust test frameworks, CI/CD pipelines, and quality-first engineering culture.",
  keywords: [
    "QA Automation",
    "Test Engineer",
    "SDET",
    "Selenium",
    "Playwright",
    "CI/CD",
    "Quality Assurance",
  ],
  authors: [{ name: "Ilya Raguzov" }],
  openGraph: {
    title: "Ilya Raguzov | QA Automation Engineer",
    description:
      "Senior QA Automation Engineer — building robust test frameworks and quality-first engineering culture.",
    url: "https://iraguzov.com",
    siteName: "iraguzov.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

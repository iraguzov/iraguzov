import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
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
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=108282700','ym');
            ym(108282700,'init',{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/108282700" style={{position:'absolute',left:'-9999px'}} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  );
}

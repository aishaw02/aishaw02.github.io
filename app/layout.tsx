import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://aishaw02.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Fangpu — Product, AI & Life",
  description: "Fangpu 的个人网站：经历、项目，以及一些真正感兴趣的事情。",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Hello. I’m Fangpu.",
    description: "Product · AI · Life",
    url: siteUrl,
    siteName: "Fangpu",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hello. I’m Fangpu.",
    description: "Product · AI · Life",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}

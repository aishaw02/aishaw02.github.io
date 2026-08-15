import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "移动端预览 | Fangpu",
  robots: { index: false, follow: false },
};

export default function MobilePreviewLayout({ children }: { children: ReactNode }) {
  return children;
}

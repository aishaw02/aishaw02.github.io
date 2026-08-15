import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "日常生活 | Fangpu",
  alternates: { canonical: "/life/" },
};

export default function LifeLayout({ children }: { children: ReactNode }) {
  return children;
}

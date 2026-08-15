import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "成长行迹 | Fangpu",
  alternates: { canonical: "/journey/" },
};

export default function JourneyLayout({ children }: { children: ReactNode }) {
  return children;
}

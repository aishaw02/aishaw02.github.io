import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "思考手记 | Fangpu",
  alternates: { canonical: "/thoughts/" },
};

export default function ThoughtsLayout({ children }: { children: ReactNode }) {
  return children;
}

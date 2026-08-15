import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "实践档案 | Fangpu" };

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}

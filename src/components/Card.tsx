import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}

export default function Card({ children, className = "", as = "div" }: CardProps) {
  const Tag = as;
  return <Tag className={`ps-card ${className}`}>{children}</Tag>;
}

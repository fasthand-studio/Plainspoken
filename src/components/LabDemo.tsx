import type { ReactNode } from "react";
import { Check, X } from "lucide-react";

interface DemoBlockProps {
  title: string;
  children: ReactNode;
  variant: "followed" | "violated";
}

export function DemoBlock({ title, children, variant }: DemoBlockProps) {
  const isFollowed = variant === "followed";
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1.5">
        {isFollowed ? (
          <Check size={15} className="text-accent-green" strokeWidth={2.5} />
        ) : (
          <X size={15} className="text-accent-red" strokeWidth={2.5} />
        )}
        <span
          className="text-[13px] font-semibold"
          style={{ color: isFollowed ? "var(--ps-green)" : "var(--ps-red)" }}
        >
          {title}
        </span>
      </div>
      <div
        className="ps-card p-4 flex-1 flex items-center justify-center min-h-[120px] overflow-hidden"
        style={
          !isFollowed
            ? { borderColor: "var(--ps-red)", opacity: 0.95 }
            : { borderColor: "var(--ps-border-light)" }
        }
      >
        {children}
      </div>
    </div>
  );
}

interface LabDemoProps {
  id: number;
  name: string;
  category: string;
  text: string;
  children: ReactNode;
}

export default function LabDemo({
  id,
  name,
  category,
  text,
  children,
}: LabDemoProps) {
  return (
    <article className="ps-card p-5 md:p-6 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-semibold text-ink-light">
              {String(id).padStart(2, "0")}
            </span>
            <span
              className="text-[13px] font-semibold px-2 py-0.5 border"
              style={{
                borderColor:
                  category === "DO" ? "var(--ps-green)" : "var(--ps-red)",
                color: category === "DO" ? "var(--ps-green)" : "var(--ps-red)",
                borderRadius: "8px"
              }}
            >
              {category}
            </span>
          </div>
          <h3 className="text-[19px] font-semibold text-ink leading-tight">
            {name}
          </h3>
        </div>
      </div>
      <p className="text-[15px] text-ink-muted leading-relaxed">{text}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
        {children}
      </div>
    </article>
  );
}

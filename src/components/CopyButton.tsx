import { useState, useCallback } from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  text: string;
  label?: string;
  copiedLabel?: string;
  variant?: "btn" | "cta" | "plain";
  className?: string;
}

export default function CopyButton({
  text,
  label = "Copy",
  copiedLabel = "Copied",
  variant = "btn",
  className = "",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  const baseClass =
    variant === "cta"
      ? "ps-cta ps-cta-primary ps-focus"
      : variant === "plain"
      ? "ps-nav-link ps-focus"
      : "ps-btn ps-btn-secondary ps-focus";

  return (
    <button
      onClick={handleCopy}
      className={`${baseClass} ${className}`}
      aria-label={copied ? `${copiedLabel}` : `${label}`}
    >
      {copied ? (
        <>
          <Check size={16} strokeWidth={2.5} />
          {copiedLabel}
        </>
      ) : (
        <>
          <Copy size={16} strokeWidth={2} />
          {label}
        </>
      )}
    </button>
  );
}

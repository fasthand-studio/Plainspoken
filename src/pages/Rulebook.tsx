import { rules, fullRulebookText } from "@/data/rules";
import CopyButton from "@/components/CopyButton";
import { Copy } from "lucide-react";

export default function Rulebook() {
  return (
    <div className="px-4 pt-20 pb-12">
      <div className="max-w-[760px] mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[24px] font-semibold text-ink">The Rulebook</h2>
          <p className="text-[15px] text-ink-muted">
            All 24 Plainspoken rules in full. Copy the entire rulebook or any individual rule.
          </p>
        </div>

        {/* Copy full rulebook */}
        <div className="ps-card p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col gap-0.5">
            <span className="text-[15px] font-semibold text-ink">Complete Rulebook</span>
            <span className="text-[13px] text-ink-muted">All 24 rules, ready to paste</span>
          </div>
          <CopyButton
            text={fullRulebookText}
            label="Copy Rulebook"
            copiedLabel="Copied ✓"
            variant="cta"
          />
        </div>

        {/* Rules list */}
        <div className="flex flex-col gap-3">
          {rules.map((rule) => {
            const ruleText = `${rule.category}\n${rule.id}. ${rule.text}`;
            return (
              <article key={rule.id} className="ps-card p-4 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[13px] font-semibold text-ink-light">
                      {String(rule.id).padStart(2, "0")}
                    </span>
                    <span
                      className="text-[12px] font-semibold px-2 py-0.5 border"
                      style={{
                        borderColor:
                          rule.category === "DO" ? "var(--ps-green)" : "var(--ps-red)",
                        color: rule.category === "DO" ? "var(--ps-green)" : "var(--ps-red)",
                        borderRadius: "8px",
                      }}
                    >
                      {rule.category}
                    </span>
                    <h3 className="text-[17px] font-semibold text-ink">{rule.name}</h3>
                  </div>
                  <CopyButton
                    text={ruleText}
                    label="Copy"
                    copiedLabel="Copied ✓"
                    variant="plain"
                  />
                </div>
                <p className="text-[15px] text-ink-muted leading-relaxed">
                  {rule.text}
                </p>
              </article>
            );
          })}
        </div>

        {/* Bottom copy full */}
        <div className="ps-card p-4 flex flex-col sm:flex-row items-center justify-between gap-3 mt-2">
          <span className="text-[15px] text-ink-muted">Need all 24 at once?</span>
          <CopyButton
            text={fullRulebookText}
            label="Copy Rulebook"
            copiedLabel="Copied ✓"
            variant="cta"
          />
        </div>
      </div>
    </div>
  );
}

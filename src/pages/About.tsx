import { FlaskConical, BookOpen, Check, X } from "lucide-react";
import { rules } from "@/data/rules";

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const doCount = rules.filter((r) => r.category === "DO").length;
  const dontCount = rules.filter((r) => r.category === "DON'T").length;

  return (
    <div className="px-4 pt-20 pb-12">
      <div className="max-w-[760px] mx-auto flex flex-col gap-8">
        {/* Title */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[24px] font-semibold text-ink">About Plainspoken</h2>
          <p className="text-[15px] text-ink-muted">
            A design system of 24 rules, built to be seen, tested, and copied.
          </p>
        </div>

        {/* What it is */}
        <section className="flex flex-col gap-3">
          <h3 className="text-[19px] font-semibold text-ink">What it is</h3>
          <p className="text-[17px] text-ink-muted leading-relaxed">
            Plainspoken is a UI/UX design system consisting of exactly 24 rules —
            13 prescriptive (DO) and 11 prohibitive (DON'T). Each rule addresses a
            specific visual or interaction decision: button geometry, typography,
            color usage, icon treatment, navigation density, motion, and layout.
          </p>
          <p className="text-[17px] text-ink-muted leading-relaxed">
            The system is built around a continuous curvature model where every
            rounded element uses a corner radius equal to half its rendered height
            with a 1.5 superellipse. This keeps the entire interface geometrically
            consistent without arbitrary radius values.
          </p>
        </section>

        {/* Why it exists */}
        <section className="flex flex-col gap-3">
          <h3 className="text-[19px] font-semibold text-ink">Why it exists</h3>
          <p className="text-[17px] text-ink-muted leading-relaxed">
            Plainspoken replaces decoration with structure. Depth comes from 1px
            borders and layout — never drop shadows. Interest comes from consistent
            color and geometry — never gradients or blur. Delight comes from
            instant feedback — never heavy animations that delay the user.
          </p>
          <p className="text-[17px] text-ink-muted leading-relaxed">
            The rules are few on purpose. Each one can be visually tested: you can
            see it followed and violated in the Lab. That testability is what makes
            Plainspoken practical rather than theoretical.
          </p>
        </section>

        {/* The split */}
        <section className="flex flex-col gap-3">
          <h3 className="text-[19px] font-semibold text-ink">The 24 rules</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="ps-card p-4 flex flex-col gap-2" style={{ borderColor: "var(--ps-border-light)" }}>
              <div className="flex items-center gap-1.5">
                <Check size={16} className="text-accent-green" strokeWidth={2.5} />
                <span className="text-[15px] font-semibold" style={{ color: "var(--ps-green)" }}>DO — {doCount} rules</span>
              </div>
              <p className="text-[14px] text-ink-muted leading-relaxed">
                Prescriptive guidance: what to use and how. Covers curvature,
                typography, color, icons, navigation, hierarchy, and spacing.
              </p>
            </div>
            <div className="ps-card p-4 flex flex-col gap-2" style={{ borderColor: "var(--ps-border-light)" }}>
              <div className="flex items-center gap-1.5">
                <X size={16} className="text-accent-red" strokeWidth={2.5} />
                <span className="text-[15px] font-semibold" style={{ color: "var(--ps-red)" }}>DON'T — {dontCount} rules</span>
              </div>
              <p className="text-[14px] text-ink-muted leading-relaxed">
                Prohibitions: what to avoid. No shadows, no heavy animation, no
                custom fonts, no gradients, no chip tags before headers, no groups
                of three.
              </p>
            </div>
          </div>
        </section>

        {/* Explore */}
        <section className="flex flex-col gap-3">
          <h3 className="text-[19px] font-semibold text-ink">Explore</h3>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={() => onNavigate("lab")} className="ps-cta ps-cta-primary ps-focus">
              <FlaskConical size={18} />
              Open the Lab
            </button>
            <button onClick={() => onNavigate("rulebook")} className="ps-cta ps-cta-outline ps-focus">
              <BookOpen size={18} />
              Read the Rulebook
            </button>
          </div>
        </section>

        {/* Credit */}
        <section className="ps-card p-5 flex flex-col gap-2 mt-2">
          <div className="flex items-center gap-1.5">
            <span className="text-[20px] font-semibold text-ink">PLAIN</span>
            <span className="text-[20px] font-semibold text-ink-muted">spoken</span>
          </div>
          <p className="text-[15px] text-ink-muted">
            Made by Fasthand Studio.
          </p>
        </section>
      </div>
    </div>
  );
}

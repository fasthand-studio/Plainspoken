import { rules } from "@/data/rules";
import IconTreeIcon from "@/components/IconTreeIcon";

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const doCount = rules.filter((r) => r.category === "DO").length;
  const dontCount = rules.filter((r) => r.category === "DON'T").length;

  return (
    <div className="px-4 pt-[calc(5rem+env(safe-area-inset-top,0px))] pb-12">
      <div className="max-w-[760px] mx-auto flex flex-col gap-8">
        {/* Title */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[24px] font-semibold text-ink">About Plainspoken</h2>
          <p className="text-[15px] text-ink-muted">
            Made for the Fasthand ecosystem: 25 calm, clever rules for interfaces that are easy on the eyes.
          </p>
        </div>

        {/* What it is */}
        <section className="flex flex-col gap-3">
          <h3 className="text-[19px] font-semibold text-ink">What it is</h3>
          <p className="text-[17px] text-ink-muted leading-relaxed">
            Plainspoken is a calm, clever UI/UX design system made for the Fasthand
            ecosystem, consisting of exactly 25 rules —
            13 prescriptive (DO) and 12 prohibitive (DON'T). Each rule addresses a
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
            Plainspoken replaces decoration with structure. Depth comes from layout
            and subtle off-color surfaces only when needed — never borders or
            shadows. Consistent color and geometry keep screens comfortable to
            look at, while instant feedback keeps them feeling clever and alive.
          </p>
          <p className="text-[17px] text-ink-muted leading-relaxed">
            The rules are few on purpose. Each one can be visually tested: you can
            see it followed and violated in the Lab. That testability is what makes
            Plainspoken practical rather than theoretical.
          </p>
        </section>

        {/* The split */}
        <section className="flex flex-col gap-3">
          <h3 className="text-[19px] font-semibold text-ink">The 25 rules</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="ps-card p-4 flex flex-col gap-2">
              <div className="flex items-center gap-1.5">
                <IconTreeIcon name="tick-circle" color="#34c759" size={16} />
                <span className="text-[15px] font-semibold" style={{ color: "var(--ps-green)" }}>DO — {doCount} rules</span>
              </div>
              <p className="text-[14px] text-ink-muted leading-relaxed">
                Prescriptive guidance: what to use and how. Covers curvature,
                typography, color, icons, navigation, hierarchy, and spacing.
              </p>
            </div>
            <div className="ps-card p-4 flex flex-col gap-2">
              <div className="flex items-center gap-1.5">
                <IconTreeIcon name="close-circle" color="#ff3b30" size={16} />
                <span className="text-[15px] font-semibold" style={{ color: "var(--ps-red)" }}>DON'T — {dontCount} rules</span>
              </div>
              <p className="text-[14px] text-ink-muted leading-relaxed">
                Prohibitions: what to avoid. No shadows, no heavy animation, no
                custom fonts, no gradients, no chip tags before headers, no groups
                of three, and no outlines.
              </p>
            </div>
          </div>
        </section>

        {/* Explore */}
        <section className="flex flex-col gap-3">
          <h3 className="text-[19px] font-semibold text-ink">Explore</h3>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={() => onNavigate("lab")} className="ps-cta ps-cta-primary ps-focus">
              <IconTreeIcon name="grid-1" color="#ffffff" size={18} />
              Open the Lab
            </button>
            <button onClick={() => onNavigate("rulebook")} className="ps-cta ps-cta-outline ps-focus">
              <IconTreeIcon name="book" color="#1a1a1a" size={18} />
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

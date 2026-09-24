import { ArrowRight, BookOpen, FlaskConical, Layers, Check, X } from "lucide-react";
import CopyButton from "@/components/CopyButton";
import { rules } from "@/data/rules";

interface LandingProps {
  onNavigate: (page: string) => void;
}

export default function Landing({ onNavigate }: LandingProps) {
  const doCount = rules.filter((r) => r.category === "DO").length;
  const dontCount = rules.filter((r) => r.category === "DON'T").length;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="px-4 pt-20 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-[760px] mx-auto flex flex-col items-start gap-5">
          <h1 className="text-[28px] md:text-[36px] font-semibold text-ink leading-tight">
            A design system built on 24 rules.
            <br />
            Each one earned, not invented.
          </h1>
          <p className="text-[17px] text-ink-muted leading-relaxed max-w-[560px]">
            Plainspoken is a UI/UX design system that trades decoration for clarity.
            No shadows, no gradients, no fluff — just structure, restraint, and
            consistency applied across every surface.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <button
              onClick={() => onNavigate("lab")}
              className="ps-cta ps-cta-primary ps-focus"
            >
              <FlaskConical size={18} />
              Explore the Lab
            </button>
            <button
              onClick={() => onNavigate("rulebook")}
              className="ps-cta ps-cta-outline ps-focus"
            >
              <BookOpen size={18} />
              View the Rulebook
            </button>
          </div>
        </div>
      </section>

      {/* Rule count strip */}
      <section className="px-4 pb-10">
        <div className="max-w-[760px] mx-auto">
          <div className="ps-card p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <span className="text-[28px] font-semibold text-ink">{rules.length}</span>
                <span className="text-[13px] text-ink-muted">Total rules</span>
              </div>
              <div className="w-px h-10 bg-border-light" />
              <div className="flex flex-col items-center">
                <span className="text-[28px] font-semibold" style={{ color: "var(--ps-green)" }}>{doCount}</span>
                <span className="text-[13px] text-ink-muted">DO</span>
              </div>
              <div className="w-px h-10 bg-border-light" />
              <div className="flex flex-col items-center">
                <span className="text-[28px] font-semibold" style={{ color: "var(--ps-red)" }}>{dontCount}</span>
                <span className="text-[13px] text-ink-muted">DON'T</span>
              </div>
            </div>
            <button
              onClick={() => onNavigate("lab")}
              className="ps-btn ps-btn-secondary ps-focus"
            >
              See all 24
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="px-4 py-10">
        <div className="max-w-[760px] mx-auto flex flex-col gap-4">
          <h2 className="text-[22px] font-semibold text-ink">What Plainspoken is</h2>
          <p className="text-[17px] text-ink-muted leading-relaxed">
            Plainspoken is a set of 24 concrete rules that govern how an interface
            should look and behave. It covers geometry, typography, color, icon
            treatment, navigation, motion, and layout — with a clear line between
            what to do and what to avoid.
          </p>
          <p className="text-[17px] text-ink-muted leading-relaxed">
            The system uses a continuous curvature model: every rounded element's
            corner radius equals exactly half its rendered height, finished with a
            1.5 superellipse. That single geometric rule keeps buttons, cards, and
            popups visually consistent without any arbitrary radius values.
          </p>
        </div>
      </section>

      {/* What you can explore — 4 items, not 3 */}
      <section className="px-4 py-10">
        <div className="max-w-[960px] mx-auto flex flex-col gap-4">
          <h2 className="text-[22px] font-semibold text-ink">What you can explore</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <FlaskConical size={20} className="text-accent-blue" />,
                title: "The Lab",
                desc: "24 side-by-side demos showing each rule followed and violated.",
                action: "Open Lab",
                page: "lab",
              },
              {
                icon: <BookOpen size={20} className="text-accent-green" />,
                title: "The Rulebook",
                desc: "Every rule in full text, ready to copy individually or entirely.",
                action: "Open Rulebook",
                page: "rulebook",
              },
              {
                icon: <Layers size={20} className="text-accent-orange" />,
                title: "The System",
                desc: "Curvature, color, typography, and spacing tokens working as one.",
                action: "Learn more",
                page: "about",
              },
              {
                icon: <Check size={20} className="text-accent-purple" />,
                title: "DO vs DON'T",
                desc: "13 prescriptive rules and 11 prohibitions, each with a visual test.",
                action: "See the split",
                page: "lab",
              },
            ].map((item) => (
              <div key={item.title} className="ps-card p-4 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-[15px] font-semibold">{item.title}</span>
                </div>
                <p className="text-[14px] text-ink-muted leading-relaxed flex-1">{item.desc}</p>
                <button
                  onClick={() => onNavigate(item.page)}
                  className="ps-btn ps-btn-outline ps-focus text-[14px] self-start"
                >
                  {item.action}
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it exists */}
      <section className="px-4 py-10">
        <div className="max-w-[760px] mx-auto flex flex-col gap-4">
          <h2 className="text-[22px] font-semibold text-ink">Why it exists</h2>
          <p className="text-[17px] text-ink-muted leading-relaxed">
            Most interfaces accumulate decoration over time — shadows for depth,
            gradients for interest, animations for delight. Plainspoken argues the
            opposite: depth comes from layout and borders, interest comes from
            structure, and delight comes from instant, unimpeded response.
          </p>
          <p className="text-[17px] text-ink-muted leading-relaxed">
            The 24 rules are deliberately small in number. Each one addresses a
            specific decision a designer makes daily, and each one has a clear
            visual test — you can see it followed and violated in the Lab.
          </p>
        </div>
      </section>

      {/* Preview: DO vs DON'T sample */}
      <section className="px-4 py-10">
        <div className="max-w-[760px] mx-auto flex flex-col gap-4">
          <h2 className="text-[22px] font-semibold text-ink">A taste of the system</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="ps-card p-5 flex flex-col gap-3" style={{ borderColor: "var(--ps-border-light)" }}>
              <div className="flex items-center gap-1.5">
                <Check size={15} className="text-accent-green" strokeWidth={2.5} />
                <span className="text-[13px] font-semibold" style={{ color: "var(--ps-green)" }}>DO</span>
              </div>
              <button className="ps-btn ps-btn-primary ps-focus self-start">Save changes</button>
              <span className="text-[13px] text-ink-muted">Single-line, 32px height, r16 + superellipse(1.5)</span>
            </div>
            <div className="ps-card p-5 flex flex-col gap-3" style={{ borderColor: "var(--ps-red)" }}>
              <div className="flex items-center gap-1.5">
                <X size={15} className="text-accent-red" strokeWidth={2.5} />
                <span className="text-[13px] font-semibold" style={{ color: "var(--ps-red)" }}>DON'T</span>
              </div>
              <button
                className="ps-btn ps-btn-primary ps-focus self-start"
                style={{ whiteSpace: "normal", lineHeight: 1.2, height: "auto", padding: "8px 16px", width: "120px" }}
              >
                Save all changes to server
              </button>
              <span className="text-[13px] text-ink-muted">Multi-line, no fixed height — compact and readable lost</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12">
        <div className="max-w-[760px] mx-auto">
          <div className="ps-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-[19px] font-semibold text-ink">Ready to see all 24 rules in action?</span>
              <span className="text-[14px] text-ink-muted">The Lab shows every rule followed and violated.</span>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => onNavigate("lab")} className="ps-cta ps-cta-primary ps-focus">
                <FlaskConical size={18} />
                Enter the Lab
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer credit */}
      <footer className="px-4 py-8 border-t border-border-light">
        <div className="max-w-[760px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[15px] font-semibold text-ink">PLAIN</span>
            <span className="text-[15px] text-ink-muted">spoken</span>
          </div>
          <span className="text-[14px] text-ink-muted">Made by Fasthand Studio.</span>
        </div>
      </footer>
    </div>
  );
}

import { rules } from "@/data/rules";
import IconTreeIcon from "@/components/IconTreeIcon";

interface LandingProps {
  onNavigate: (page: string) => void;
}

const principles = [
  { n: "01", title: "Shape with intent", text: "One curvature system makes every control feel like it belongs." },
  { n: "02", title: "Let space do the work", text: "Clear grouping and alignment create hierarchy without visual noise." },
  { n: "03", title: "Color, used carefully", text: "Quiet surfaces carry the interface. Accent color earns its place." },
  { n: "04", title: "Respond in the moment", text: "Feedback is immediate, useful, and never in the way." },
];

export default function Landing({ onNavigate }: LandingProps) {
  const doCount = rules.filter((rule) => rule.category === "DO").length;
  const dontCount = rules.filter((rule) => rule.category === "DON'T").length;

  return (
    <div className="flex flex-col overflow-hidden">
      <section className="px-4 pt-[calc(4rem+env(safe-area-inset-top,0px))] pb-10 md:pt-[calc(6rem+env(safe-area-inset-top,0px))] md:pb-16">
        <div className="mx-auto grid max-w-[1120px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col items-start gap-5">
            <h1 className="max-w-[680px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-ink sm:text-[48px] md:text-[52px]">
              Calm, clear interfaces for Fasthand.
            </h1>
            <p className="text-[15px] font-medium text-ink-muted">Plainspoken design system · 25 practical rules</p>
            <p className="max-w-[520px] text-[17px] leading-relaxed text-ink-muted md:text-[19px]">
              Plainspoken is made for the Fasthand ecosystem: readable screens, consistent geometry, and thoughtful interactions that are comfortable to look at and get out of your way.
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-3">
              <button onClick={() => onNavigate("lab")} className="ps-cta ps-cta-primary ps-focus">
                <IconTreeIcon name="grid-1" color="#ffffff" size={18} /> Explore the Lab
              </button>
              <button onClick={() => onNavigate("rulebook")} className="ps-cta ps-cta-outline ps-focus">
                <IconTreeIcon name="book" color="#1a1a1a" size={18} /> Read the rules
              </button>
            </div>
            <a href="#principles" className="mt-3 inline-flex items-center gap-2 text-[14px] font-medium text-ink-muted transition-colors hover:text-ink">
              See the design principles <IconTreeIcon name="arrow-down" color="#6b6b6b" size={16} />
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-[480px] lg:mr-0" aria-label="Preview of the Plainspoken interface style">
            <div className="relative ps-superellipse-48 bg-cream-dark p-4 sm:p-7">
              <div className="ps-superellipse-44 bg-surface p-5 sm:p-7">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[14px] font-semibold text-ink">
                    PLAINspoken
                  </div>
                  <span className="text-[12px] text-ink-muted">A quiet start</span>
                </div>
                <div className="mt-8">
                  <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.03em] text-ink">Make room<br />for good work.</h2>
                  <p className="mt-2 text-[13px] font-medium text-ink-muted">YOUR FOCUS</p>
                  <p className="mt-3 max-w-[280px] text-[14px] leading-relaxed text-ink-muted">A little less noise. A little more space to think.</p>
                </div>
                  <div className="mt-7 flex items-center justify-between gap-3 rounded-2xl bg-cream px-4 py-3">
                  <div className="flex items-center gap-3">
                    <IconTreeIcon name="tick-circle" color="#34c759" size={18} />
                    <span className="text-[14px] font-medium text-ink">Plan the next step</span>
                  </div>
                  <span className="text-[12px] text-ink-muted">2 min</span>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[13px] text-ink-muted">One thing at a time.</span>
                  <button className="ps-btn ps-btn-primary ps-focus">Begin <IconTreeIcon name="arrow-right" color="#ffffff" size={15} /></button>
                </div>
              </div>
                <div className="flex flex-wrap items-center justify-between gap-2 px-2 pt-4 text-[12px] font-medium text-ink-muted">
                <span>System sans</span><span>Soft contrast</span><span>Consistent shape</span><span>Instant response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Rulebook summary" className="px-4 py-8">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-5 ps-superellipse-48 bg-cream-dark p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-muted">A small system, made practical</p>
            <p className="mt-1 text-[20px] font-semibold tracking-[-0.02em] text-ink">{rules.length} clear rules. One considered experience.</p>
          </div>
          <div className="grid grid-cols-2 items-center gap-x-6 gap-y-3 sm:flex sm:gap-8">
            <div><span className="block text-[25px] font-semibold text-ink">{doCount}</span><span className="text-[13px] text-ink-muted">Do</span></div>
            <div><span className="block text-[25px] font-semibold text-ink">{dontCount}</span><span className="text-[13px] text-ink-muted">Don’t</span></div>
            <div><span className="block text-[25px] font-semibold text-ink">1</span><span className="text-[13px] text-ink-muted">Coherent system</span></div>
            <button onClick={() => onNavigate("rulebook")} className="ps-btn ps-btn-secondary ps-focus">Explore <IconTreeIcon name="arrow-right" color="#0a84ff" size={16} /></button>
          </div>
        </div>
      </section>

      <section id="principles" className="scroll-mt-20 px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-[1120px] gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-[30px] font-semibold leading-tight tracking-[-0.035em] text-ink sm:text-[38px]">Less to fight.<br />More to feel.</h2>
            <p className="max-w-[360px] text-[16px] leading-relaxed text-ink-muted">A calm interface is not an empty one. It is a place where every detail knows why it is there.</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {principles.map((principle) => (
              <article key={principle.n} className="ps-superellipse-40 bg-surface p-5 sm:p-6">
                <span className="text-[13px] font-semibold text-ink-muted">{principle.n}</span>
                <h3 className="mt-5 text-[17px] font-semibold text-ink">{principle.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-dark px-4 py-16 md:py-20">
        <div className="mx-auto max-w-[1120px]">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-[540px]">
              <h2 className="text-[30px] font-semibold leading-tight tracking-[-0.035em] text-ink sm:text-[38px]">See the thinking.<br />Try it for yourself.</h2>
            </div>
            <p className="max-w-[340px] text-[15px] leading-relaxed text-ink-muted">Every principle is written plainly and shown in context, so your team can use it with confidence.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <article className="flex flex-col items-start ps-superellipse-40 bg-surface p-6">
              <div className="flex items-center gap-2"><IconTreeIcon name="grid-1" color="#0a84ff" size={20} /><h3 className="text-[18px] font-semibold text-ink">The Lab</h3></div>
              <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-muted">Compare every rule followed and broken through practical interface examples.</p>
              <button onClick={() => onNavigate("lab")} className="ps-btn ps-btn-secondary ps-focus mt-5">Explore examples <IconTreeIcon name="arrow-right" color="#0a84ff" size={15} /></button>
            </article>
            <article className="flex flex-col items-start ps-superellipse-40 bg-surface p-6">
              <div className="flex items-center gap-2"><IconTreeIcon name="book" color="#34c759" size={20} /><h3 className="text-[18px] font-semibold text-ink">The Rulebook</h3></div>
              <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-muted">Read, copy, and share the complete design guidance for your next project.</p>
              <button onClick={() => onNavigate("rulebook")} className="ps-btn ps-btn-secondary ps-focus mt-5">Read all 25 rules <IconTreeIcon name="arrow-right" color="#0a84ff" size={15} /></button>
            </article>
            <article className="flex flex-col items-start ps-superellipse-40 bg-surface p-6">
              <div className="flex items-center gap-2"><IconTreeIcon name="layer" color="#ff9500" size={20} /><h3 className="text-[18px] font-semibold text-ink">The system</h3></div>
              <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-muted">Understand the shared geometry, typography, color, and interaction foundations.</p>
              <button onClick={() => onNavigate("about")} className="ps-btn ps-btn-secondary ps-focus mt-5">See the foundations <IconTreeIcon name="arrow-right" color="#0a84ff" size={15} /></button>
            </article>
            <article className="flex flex-col items-start ps-superellipse-40 bg-surface p-6">
              <div className="flex items-center gap-2"><IconTreeIcon name="magic-star" color="#af52de" size={20} /><h3 className="text-[18px] font-semibold text-ink">The principles</h3></div>
              <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-muted">Get the reasoning behind a calmer, more readable interface, from hierarchy to feedback.</p>
              <a href="#principles" className="ps-btn ps-btn-secondary ps-focus mt-5">Explore principles <IconTreeIcon name="arrow-right" color="#0a84ff" size={15} /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-[920px] gap-8 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.03em] text-ink">Plainspoken, explained</h2>
          </div>
          <div className="flex flex-col gap-6">
            <article>
              <h3 className="text-[16px] font-semibold text-ink">What is the Plainspoken design system?</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">Plainspoken is a set of 25 practical interface design rules made for the Fasthand ecosystem. The Lab demonstrates them, and the Rulebook makes them easy to copy and apply.</p>
            </article>
            <article>
              <h3 className="text-[16px] font-semibold text-ink">What makes Plainspoken different?</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">It favors clear layout, restrained color, system typography, consistent curvature, and immediate feedback. Off-color surfaces are used sparingly when they make content easier to understand.</p>
            </article>
            <article>
              <h3 className="text-[16px] font-semibold text-ink">Who is Plainspoken for?</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">It is for Fasthand teams and collaborators creating calm, coherent digital products, and for anyone who wants a straightforward starting point for interface decisions.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-5 ps-superellipse-48 bg-cream-dark p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="text-[24px] font-semibold tracking-[-0.025em] text-ink">Make the next screen feel considered.</h2>
            <p className="mt-2 text-[15px] text-ink-muted">Start with the rules. Leave room for the good work.</p>
          </div>
          <button onClick={() => onNavigate("lab")} className="ps-cta ps-cta-primary ps-focus self-start sm:self-auto"><IconTreeIcon name="grid-1" color="#ffffff" size={18} /> Explore the Lab</button>
        </div>
      </section>

      <footer className="px-4 pb-[calc(2rem+env(safe-area-inset-bottom,0px))]">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] font-semibold text-ink">PLAINspoken <span className="font-normal text-ink-muted">by Fasthand Studio</span></p>
          <p className="text-[13px] text-ink-muted">Calm by design. Clever by nature.</p>
        </div>
      </footer>
    </div>
  );
}

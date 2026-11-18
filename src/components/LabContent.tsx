import { useState } from "react";
import LabDemo, { DemoBlock } from "./LabDemo";
import { rules } from "@/data/rules";
import CopyButton from "./CopyButton";
import IconTreeIcon from "@/components/IconTreeIcon";

/* Helper to get rule by id */
const r = (id: number) => rules.find((x) => x.id === id)!;

/* ── Individual demos ── */

function Demo1() {
  return (
    <LabDemo {...r(1)}>
      <DemoBlock title="Followed" variant="followed">
        <button className="ps-btn ps-btn-primary ps-focus">Save changes</button>
      </DemoBlock>
      <DemoBlock title="Violated — wraps to two lines" variant="violated">
        <button
          className="ps-btn ps-btn-primary ps-focus"
          style={{ whiteSpace: "normal", lineHeight: 1.2, height: "auto", padding: "8px 16px", width: "120px" }}
        >
          Save all changes to server
        </button>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo2() {
  return (
    <LabDemo {...r(2)}>
      <DemoBlock title="Followed — dense on mobile" variant="followed">
        <div className="flex flex-col gap-2 w-full" style={{ maxWidth: "220px" }}>
          <div className="flex items-center gap-2 p-2 bg-cream-dark ps-superellipse-32">
            <div className="w-7 h-7 ps-superellipse-32 bg-cream-dark" />
            <div className="flex-1">
              <div className="text-[13px] font-semibold">Item A</div>
              <div className="text-[11px] text-ink-muted">Tight, focused</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 bg-cream-dark ps-superellipse-32">
            <div className="w-7 h-7 ps-superellipse-32 bg-cream-dark" />
            <div className="flex-1">
              <div className="text-[13px] font-semibold">Item B</div>
              <div className="text-[11px] text-ink-muted">Same density</div>
            </div>
          </div>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — too much spacing" variant="violated">
        <div className="flex flex-col gap-6 w-full" style={{ maxWidth: "220px" }}>
          <div className="flex items-center gap-2 p-4 bg-cream-dark ps-superellipse-32">
            <div className="w-7 h-7 ps-superellipse-32 bg-cream-dark" />
            <div className="flex-1">
              <div className="text-[13px] font-semibold">Item A</div>
              <div className="text-[11px] text-ink-muted">Disconnected</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-4 bg-cream-dark ps-superellipse-32">
            <div className="w-7 h-7 ps-superellipse-32 bg-cream-dark" />
            <div className="flex-1">
              <div className="text-[13px] font-semibold">Item B</div>
              <div className="text-[11px] text-ink-muted">Too sparse</div>
            </div>
          </div>
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo3() {
  return (
    <LabDemo {...r(3)}>
      <DemoBlock title="Followed — H/2 radius + superellipse" variant="followed">
        <div className="flex flex-col items-center gap-3">
          <button className="ps-btn ps-btn-primary ps-focus">32px · r16</button>
          <button className="ps-cta ps-cta-primary ps-focus">44px · r22</button>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — border-radius: 50%" variant="violated">
        <div className="flex flex-col items-center gap-3">
          <button
            className="ps-btn ps-btn-primary ps-focus"
            style={{ borderRadius: "50%" }}
          >
            32px · r50%
          </button>
          <button
            className="ps-cta ps-cta-primary ps-focus"
            style={{ borderRadius: "50%" }}
          >
            44px · r50%
          </button>
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo4() {
  return (
    <LabDemo {...r(4)}>
      <DemoBlock title="Followed — high contrast" variant="followed">
        <button className="ps-btn ps-btn-primary ps-focus">Continue</button>
      </DemoBlock>
      <DemoBlock title="Violated — low contrast" variant="violated">
        <button
          className="ps-btn ps-focus"
          style={{ background: "#888", color: "#aaa" }}
        >
          Continue
        </button>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo5() {
  return (
    <LabDemo {...r(5)}>
      <DemoBlock title="Followed — system sans" variant="followed">
        <div className="flex flex-col gap-1.5">
          <span className="text-[17px]">Body text at 17px</span>
          <span className="text-[15px] text-ink-muted">Supporting muted gray</span>
          <button className="ps-btn ps-btn-primary ps-focus mt-1">Semibold button</button>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — serif + mono mixed" variant="violated">
        <div className="flex flex-col gap-1.5">
          <span className="text-[17px] ps-violation-serif">Body text at 17px</span>
          <span className="text-[15px] text-ink-muted ps-violation-mono">Supporting muted gray</span>
          <button className="ps-btn ps-btn-primary ps-focus mt-1 ps-violation-ornament">Semibold button</button>
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo6() {
  return (
    <LabDemo {...r(6)}>
      <DemoBlock title="Followed — off-color only when needed" variant="followed">
        <div className="w-full p-4 ps-superellipse-32 bg-cream-dark flex items-center justify-center">
          <span className="text-[15px]">Subtle surface difference</span>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — decorative outline" variant="violated">
        <div className="w-full p-4 ps-superellipse-32 bg-surface flex items-center justify-center" style={{ outline: "2px solid var(--ps-border)" }}>
          <span className="text-[15px]">Unneeded outline</span>
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo7() {
  const [active, setActive] = useState(false);
  return (
    <LabDemo {...r(7)}>
      <DemoBlock title="Followed — direct color, opacity feedback" variant="followed">
        <div className="flex items-center gap-4">
          <button aria-label="Toggle notifications" onClick={() => setActive(!active)} style={{ border: 0, padding: 0, background: "transparent", opacity: active ? 0.5 : 1, transition: "opacity 0.1s" }}>
            <IconTreeIcon name="notification" color="#0a84ff" size={24} />
          </button>
          <button aria-label="Toggle favorite" onClick={() => setActive(!active)} style={{ border: 0, padding: 0, background: "transparent", opacity: !active ? 0.5 : 1, transition: "opacity 0.1s" }}>
            <IconTreeIcon name="heart" color="#ff3b30" size={24} mode="hover" />
          </button>
          <button aria-label="Star" onMouseEnter={(event) => (event.currentTarget.style.opacity = "0.5")} onMouseLeave={(event) => (event.currentTarget.style.opacity = "1")} style={{ border: 0, padding: 0, background: "transparent", transition: "opacity 0.1s" }}>
            <IconTreeIcon name="star" color="#ff9500" size={24} />
          </button>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — boxed icons" variant="violated">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 flex items-center justify-center bg-cream-dark ps-superellipse-32">
            <IconTreeIcon name="notification" color="#0a84ff" size={18} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center bg-cream-dark ps-superellipse-32">
            <IconTreeIcon name="heart" color="#ff3b30" size={18} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center bg-cream-dark ps-superellipse-32">
            <IconTreeIcon name="star" color="#ff9500" size={18} />
          </div>
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo8() {
  return (
    <LabDemo {...r(8)}>
      <DemoBlock title="Followed — slim 48px nav bar" variant="followed">
        <div className="w-full">
          <div className="h-12 flex items-center justify-between px-3 bg-cream-dark">
            <span className="text-[14px] font-semibold">Logo</span>
            <div className="flex items-center gap-1">
              <span className="ps-nav-link text-[13px]">A</span>
              <span className="ps-nav-link text-[13px]">B</span>
              <span className="ps-nav-link text-[13px]">C</span>
            </div>
          </div>
          <div className="p-3 text-[13px] text-ink-muted mt-1">Content has room</div>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — bulky 96px nav" variant="violated">
        <div className="w-full">
          <div
            className="flex items-center justify-between px-6 bg-cream-dark"
            style={{ height: "96px" }}
          >
            <span className="text-[24px] font-semibold">Logo</span>
            <div className="flex items-center gap-3">
              <span className="text-[18px]">A</span>
              <span className="text-[18px]">B</span>
              <span className="text-[18px]">C</span>
            </div>
          </div>
          <div className="p-3 text-[13px] text-ink-muted mt-1">Content is squeezed</div>
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo9() {
  return (
    <LabDemo {...r(9)}>
      <DemoBlock title="Followed — style hierarchy" variant="followed">
        <div className="flex flex-col gap-2 items-start">
          <button className="ps-btn ps-btn-primary ps-focus">Save (preferred)</button>
          <button className="ps-btn ps-btn-secondary ps-focus">Cancel</button>
          <button className="ps-btn ps-btn-outline ps-focus">Later</button>
          <button className="ps-btn ps-btn-destructive ps-focus">Delete</button>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — size hierarchy" variant="violated">
        <div className="flex flex-col gap-2 items-start">
          <button
            className="ps-btn ps-btn-primary ps-focus"
            style={{ height: "48px", padding: "0 24px", fontSize: "19px", borderRadius: "24px" }}
          >
            Save
          </button>
          <button className="ps-btn ps-btn-primary ps-focus">Cancel</button>
          <button
            className="ps-btn ps-btn-primary ps-focus"
            style={{ height: "24px", padding: "0 10px", fontSize: "13px", borderRadius: "12px" }}
          >
            Later
          </button>
          <button
            className="ps-btn ps-btn-primary ps-focus"
            style={{ height: "20px", padding: "0 8px", fontSize: "11px", borderRadius: "10px" }}
          >
            Delete
          </button>
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo10() {
  return (
    <LabDemo {...r(10)}>
      <DemoBlock title="Followed — consistent palette" variant="followed">
        <div className="flex flex-col gap-2 w-full">
          <div className="p-2 ps-superellipse-32 bg-cream-dark text-[13px]">Cream surface</div>
          <div className="p-2 ps-superellipse-32 bg-surface text-[13px]">White surface</div>
          <div className="flex gap-2">
            <div className="w-8 h-8 ps-superellipse-32" style={{ background: "var(--ps-blue)" }} />
            <div className="w-8 h-8 ps-superellipse-32" style={{ background: "var(--ps-green)" }} />
            <div className="w-8 h-8 ps-superellipse-32" style={{ background: "var(--ps-orange)" }} />
          </div>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — random colors" variant="violated">
        <div className="flex flex-col gap-2 w-full">
          <div className="p-2 ps-superellipse-32 text-[13px]" style={{ background: "#ff6b6b", color: "#fff" }}>Red surface</div>
          <div className="p-2 ps-superellipse-32 text-[13px]" style={{ background: "#4ecdc4", color: "#fff" }}>Teal surface</div>
          <div className="flex gap-2">
            <div className="w-8 h-8 ps-superellipse-32" style={{ background: "#ff6b6b" }} />
            <div className="w-8 h-8 ps-superellipse-32" style={{ background: "#4ecdc4" }} />
            <div className="w-8 h-8 ps-superellipse-32" style={{ background: "#ffe66d" }} />
          </div>
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo11() {
  return (
    <LabDemo {...r(11)}>
      <DemoBlock title="Followed — inline icon + text" variant="followed">
        <div className="flex flex-col gap-2">
          <button className="ps-btn ps-btn-secondary ps-focus">
            <IconTreeIcon name="message" color="#0a84ff" size={16} />
            Message
          </button>
          <button className="ps-btn ps-btn-outline ps-focus">
            <IconTreeIcon name="document-download" color="#34c759" size={16} />
            Export
          </button>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — isolated icon boxes" variant="violated">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-cream-dark ps-superellipse-32">
              <IconTreeIcon name="message" color="#0a84ff" size={16} />
            </div>
            <span className="text-[15px]">Message</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-cream-dark ps-superellipse-32">
              <IconTreeIcon name="document-download" color="#34c759" size={16} />
            </div>
            <span className="text-[15px]">Export</span>
          </div>
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo12() {
  return (
    <LabDemo {...r(12)}>
      <DemoBlock title="Followed — 32px/r16 and 44px/r22" variant="followed">
        <div className="flex flex-col items-center gap-3">
          <button className="ps-btn ps-btn-primary ps-focus">Standard 32px</button>
          <button className="ps-cta ps-cta-primary ps-focus">CTA 44px</button>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — arbitrary radii" variant="violated">
        <div className="flex flex-col items-center gap-3">
          <button
            className="ps-btn ps-btn-primary ps-focus"
            style={{ borderRadius: "4px" }}
          >
            Standard 32px
          </button>
          <button
            className="ps-cta ps-cta-primary ps-focus"
            style={{ borderRadius: "8px" }}
          >
            CTA 44px
          </button>
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo13() {
  return (
    <LabDemo {...r(13)}>
      <DemoBlock title="Followed — fine noise-textured gradient" variant="followed">
        <div className="flex flex-col items-center gap-2">
          <div className="relative overflow-hidden p-3 ps-superellipse-32 bg-gradient-to-br from-neutral-800 to-neutral-950 text-white text-[13px] font-medium border border-neutral-700 shadow-sm flex items-center justify-center min-w-[140px]">
            {/* Grain / Noise Overlay */}
            <div
              className="absolute inset-0 ps-grain opacity-25 pointer-events-none"
              style={{ backgroundSize: "3px 3px" }}
            />
            <span className="relative z-10">Grain textured</span>
          </div>
          <span className="text-[12px] text-ink-muted">Subtle dotted noise overlay</span>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — smooth gradient" variant="violated">
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 ps-superellipse-32 bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-[13px] font-medium shadow-sm flex items-center justify-center min-w-[140px]">
            <span>Smooth gradient</span>
          </div>
          <span className="text-[12px] text-ink-muted">Conventional smooth gradient</span>
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo14() {
  return (
    <LabDemo {...r(14)}>
      <DemoBlock title="Followed — no outlines or shadows" variant="followed">
        <div className="flex flex-col gap-2 w-full">
          <div className="p-3 ps-superellipse-32 bg-cream-dark text-[13px]">
            Subtle off-color surface when needed
          </div>
          <div className="p-3 ps-superellipse-32 bg-surface text-[13px]">
            Standard surface
          </div>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — drop shadows" variant="violated">
        <div className="flex flex-col gap-2 w-full">
          <div
            className="p-3 ps-superellipse-32 bg-surface text-[13px] ps-violation-shadow"
            style={{ border: "none" }}
          >
            Card with shadow
          </div>
          <div
            className="p-3 ps-superellipse-32 bg-surface text-[13px]"
            style={{ border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.12)" }}
          >
            Another shadowed card
          </div>
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo15() {
  return (
    <LabDemo {...r(15)}>
      <DemoBlock title="Followed — instant opacity feedback" variant="followed">
        <button className="ps-btn ps-btn-primary ps-focus">Tap me — instant</button>
      </DemoBlock>
      <DemoBlock title="Violated — bouncy animation" variant="violated">
        <button className="ps-btn ps-btn-primary ps-violation-bouncy">Tap me — bouncy</button>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo16() {
  return (
    <LabDemo {...r(16)}>
      <DemoBlock title="Followed — slim nav" variant="followed">
        <div className="w-full">
          <div className="h-12 flex items-center px-3 gap-1 bg-cream-dark">
            <span className="text-[13px] font-semibold mr-2">App</span>
            <span className="ps-nav-link text-[12px]">Home</span>
            <span className="ps-nav-link text-[12px]">Settings</span>
          </div>
          <div className="text-[12px] text-ink-muted p-2">Plenty of room for content</div>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — full-height nav" variant="violated">
        <div className="flex w-full" style={{ height: "140px" }}>
          <div
            className="bg-cream-dark flex flex-col items-center py-4 gap-4"
            style={{ width: "64px", background: "var(--ps-cream)" }}
          >
            <IconTreeIcon name="setting" color="#1a1a1a" size={20} />
            <IconTreeIcon name="notification" color="#1a1a1a" size={20} />
            <IconTreeIcon name="profile" color="#1a1a1a" size={20} />
          </div>
          <div className="flex-1 p-2 text-[12px] text-ink-muted">Squeezed content</div>
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo17() {
  return (
    <LabDemo {...r(17)}>
      <DemoBlock title="Followed — system sans" variant="followed">
        <div className="flex flex-col gap-1.5">
          <span className="text-[17px]">System sans — native</span>
          <span className="text-[15px] text-ink-muted">Legible everywhere</span>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — serif + ornamental" variant="violated">
        <div className="flex flex-col gap-1.5">
          <span className="text-[17px] ps-violation-serif">Georgia serif text</span>
          <span className="text-[15px] ps-violation-ornament text-ink-muted">Cursive ornamental</span>
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo18() {
  return (
    <LabDemo {...r(18)}>
      <DemoBlock title="Followed — consistent sizes" variant="followed">
        <div className="flex flex-col gap-2">
          <button className="ps-btn ps-btn-primary ps-focus">Action A</button>
          <button className="ps-btn ps-btn-primary ps-focus">Action B</button>
          <button className="ps-btn ps-btn-primary ps-focus">Action C</button>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — mixed sizes" variant="violated">
        <div className="flex flex-col gap-2">
          <button className="ps-btn ps-btn-primary ps-focus">Action A</button>
          <button
            className="ps-btn ps-btn-primary ps-focus"
            style={{ height: "40px", padding: "0 20px", fontSize: "19px", borderRadius: "20px" }}
          >
            Action B
          </button>
          <button
            className="ps-btn ps-btn-primary ps-focus"
            style={{ height: "24px", padding: "0 10px", fontSize: "13px", borderRadius: "12px" }}
          >
            Action C
          </button>
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo19() {
  return (
    <LabDemo {...r(19)}>
      <DemoBlock title="Followed — solid fills" variant="followed">
        <div className="flex flex-col gap-2 w-full">
          <div className="p-2 ps-superellipse-32 bg-surface text-[13px]">Solid white</div>
          <div className="p-2 ps-superellipse-32 bg-cream-dark text-[13px]">Solid cream</div>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — gradient + blur" variant="violated">
        <div className="flex flex-col gap-2 w-full">
          <div className="p-2 ps-superellipse-32 text-[13px] text-white ps-violation-gradient">
            Gradient fill
          </div>
          <div className="p-2 border border-border-light ps-superellipse-32 text-[13px] ps-violation-blur">
            Blur backdrop
          </div>
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo20() {
  return (
    <LabDemo {...r(20)}>
      <DemoBlock title="Followed — header stands alone" variant="followed">
        <h4 className="text-[20px] font-semibold text-ink">Settings</h4>
      </DemoBlock>
      <DemoBlock title="Violated — chip before header" variant="violated">
        <div className="flex flex-col items-center gap-1.5">
          <span
            className="text-[11px] font-semibold px-2 py-0.5"
            style={{
              background: "var(--ps-blue-tint)",
              color: "var(--ps-blue)",
              borderRadius: "8px",
            }}
          >
            NEW
          </span>
          <h4 className="text-[20px] font-semibold text-ink">Settings</h4>
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo21() {
  return (
    <LabDemo {...r(21)}>
      <DemoBlock title="Followed — specific, human copy" variant="followed">
        <p className="text-[15px] text-ink leading-relaxed text-center">
          25 rules. Each one tested against a real interface. No fluff.
        </p>
      </DemoBlock>
      <DemoBlock title="Violated — AI generic tagline" variant="violated">
        <p className="text-[15px] text-ink leading-relaxed text-center">
          Unlock your workflow with the power of next-gen innovation.
        </p>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo22() {
  return (
    <LabDemo {...r(22)}>
      <DemoBlock title="Followed — modest, compact" variant="followed">
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-[22px] font-semibold">Section title</h4>
          <p className="text-[14px] text-ink-muted">Well-proportioned and dense</p>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — oversized" variant="violated">
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-[48px] font-bold leading-none">SECTION</h4>
          <p className="text-[20px] text-ink-muted">Wastes viewport space</p>
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo23() {
  return (
    <LabDemo {...r(23)}>
      <DemoBlock title="Followed — four items" variant="followed">
        <div className="grid grid-cols-4 gap-2 w-full">
          {["A", "B", "C", "D"].map((x) => (
            <div
              key={x}
              className="p-2 ps-superellipse-32 bg-cream-dark text-center text-[13px] font-semibold"
            >
              {x}
            </div>
          ))}
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — group of three" variant="violated">
        <div className="grid grid-cols-3 gap-2 w-full">
          {["A", "B", "C"].map((x) => (
            <div
              key={x}
              className="p-2 ps-superellipse-32 bg-cream-dark text-center text-[13px] font-semibold"
            >
              {x}
            </div>
          ))}
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo24() {
  return (
    <LabDemo {...r(24)}>
      <DemoBlock title="Followed — H/2 + superellipse popup" variant="followed">
        <div
          className="p-3 ps-superellipse-40 bg-surface flex flex-col gap-2"
          style={{ width: "160px" }}
        >
          <div className="flex items-center gap-1.5">
            <IconTreeIcon name="warning-2" color="#ff9500" size={15} />
            <span className="text-[14px] font-semibold">Confirm</span>
          </div>
          <span className="text-[13px] text-ink-muted">Delete this item?</span>
          <div className="flex gap-2">
            <button className="ps-btn ps-btn-destructive ps-focus text-[13px]">Delete</button>
            <button className="ps-btn ps-btn-outline ps-focus text-[13px]">Cancel</button>
          </div>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — arbitrary 4px radius" variant="violated">
        <div
          className="p-3 bg-surface flex flex-col gap-2"
          style={{ width: "160px", borderRadius: "4px" }}
        >
          <div className="flex items-center gap-1.5">
            <IconTreeIcon name="warning-2" color="#ff9500" size={15} />
            <span className="text-[14px] font-semibold">Confirm</span>
          </div>
          <span className="text-[13px] text-ink-muted">Delete this item?</span>
          <div className="flex gap-2">
            <button className="ps-btn ps-btn-destructive ps-focus text-[13px]">Delete</button>
            <button className="ps-btn ps-btn-outline ps-focus text-[13px]">Cancel</button>
          </div>
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo25() {
  return (
    <LabDemo {...r(25)}>
      <DemoBlock title="Followed — use spacing, add tint only if needed" variant="followed">
        <div className="w-full flex flex-col gap-2">
          <div className="p-3 ps-superellipse-32 bg-surface">Primary content</div>
          <div className="p-3 ps-superellipse-32 bg-cream-dark">Secondary area, softly distinguished</div>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — outline used for separation" variant="violated">
        <div className="w-full flex flex-col gap-2">
          <div className="p-3 ps-superellipse-32 bg-surface" style={{ outline: "1px solid var(--ps-border)" }}>Outlined content</div>
          <div className="p-3 ps-superellipse-32 bg-surface">Another outlined area</div>
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

const demos = [
  Demo1, Demo2, Demo3, Demo4, Demo5, Demo6, Demo7, Demo8,
  Demo9, Demo10, Demo11, Demo12, Demo13, Demo14, Demo15, Demo16,
  Demo17, Demo18, Demo19, Demo20, Demo21, Demo22, Demo23, Demo24, Demo25,
];

export default function LabContent() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-[24px] font-semibold text-ink">The 25-Rule Lab</h2>
        <p className="text-[15px] text-ink-muted max-w-[560px]">
          Each rule shown side by side: followed on the left, violated on the right.
          See exactly what Plainspoken prescribes and what it prohibits.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {demos.map((Demo, i) => (
          <Demo key={i} />
        ))}
      </div>
    </div>
  );
}

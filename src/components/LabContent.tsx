import { useState } from "react";
import {
  Check,
  X,
  Settings,
  Trash2,
  Plus,
  Bell,
  Search,
  Heart,
  Share,
  Download,
  Star,
  AlertTriangle,
  Mail,
  User,
  Lock,
} from "lucide-react";
import LabDemo, { DemoBlock } from "./LabDemo";
import { rules } from "@/data/rules";
import CopyButton from "./CopyButton";

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
          <div className="flex items-center gap-2 p-2 border border-border-light ps-superellipse-32" style={{ background: "var(--ps-cream)" }}>
            <div className="w-7 h-7 ps-superellipse-32 bg-cream-dark" />
            <div className="flex-1">
              <div className="text-[13px] font-semibold">Item A</div>
              <div className="text-[11px] text-ink-muted">Tight, focused</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 border border-border-light ps-superellipse-32 bg-cream">
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
          <div className="flex items-center gap-2 p-4 border border-border-light ps-superellipse-32" style={{ background: "var(--ps-cream)" }}>
            <div className="w-7 h-7 ps-superellipse-32 bg-cream-dark" />
            <div className="flex-1">
              <div className="text-[13px] font-semibold">Item A</div>
              <div className="text-[11px] text-ink-muted">Disconnected</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-4 border border-border-light ps-superellipse-32" style={{ background: "var(--ps-cream)" }}>
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
      <DemoBlock title="Followed — 1px border" variant="followed">
        <div className="w-full p-4 border border-border-light ps-superellipse-32 bg-surface flex items-center justify-center">
          <span className="text-[15px]">Depth via outline</span>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — drop shadow" variant="violated">
        <div
          className="w-full p-4 ps-superellipse-32 bg-surface flex items-center justify-center ps-violation-shadow"
          style={{ border: "none" }}
        >
          <span className="text-[15px]">Depth via shadow</span>
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
          <Bell
            size={24}
            className="text-accent-blue cursor-pointer"
            style={{ opacity: active ? 0.5 : 1, transition: "opacity 0.1s" }}
            onClick={() => setActive(!active)}
          />
          <Heart
            size={24}
            className="text-accent-red cursor-pointer"
            style={{ opacity: !active ? 0.5 : 1, transition: "opacity 0.1s" }}
            onClick={() => setActive(!active)}
          />
          <Star
            size={24}
            className="text-accent-orange cursor-pointer"
            style={{ transition: "opacity 0.1s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.5")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          />
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — boxed icons" variant="violated">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 flex items-center justify-center bg-cream-dark ps-superellipse-32">
            <Bell size={18} className="text-accent-blue" />
          </div>
          <div className="w-9 h-9 flex items-center justify-center bg-cream-dark ps-superellipse-32">
            <Heart size={18} className="text-accent-red" />
          </div>
          <div className="w-9 h-9 flex items-center justify-center bg-cream-dark ps-superellipse-32">
            <Star size={18} className="text-accent-orange" />
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
          <div className="h-12 border-b border-border-light flex items-center justify-between px-3 bg-cream">
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
            className="border-b border-border-light flex items-center justify-between px-6 bg-cream"
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
          <div className="p-2 border border-border-light ps-superellipse-32 bg-cream text-[13px]">Cream surface</div>
          <div className="p-2 border border-border-light ps-superellipse-32 bg-surface text-[13px]">White surface</div>
          <div className="flex gap-2">
            <div className="w-8 h-8 ps-superellipse-32" style={{ background: "var(--ps-blue)" }} />
            <div className="w-8 h-8 ps-superellipse-32" style={{ background: "var(--ps-green)" }} />
            <div className="w-8 h-8 ps-superellipse-32" style={{ background: "var(--ps-orange)" }} />
          </div>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — random colors" variant="violated">
        <div className="flex flex-col gap-2 w-full">
          <div className="p-2 border ps-superellipse-32 text-[13px]" style={{ background: "#ff6b6b", borderColor: "#ff6b6b", color: "#fff" }}>Red surface</div>
          <div className="p-2 border ps-superellipse-32 text-[13px]" style={{ background: "#4ecdc4", borderColor: "#4ecdc4", color: "#fff" }}>Teal surface</div>
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
            <Mail size={16} className="text-accent-blue" />
            Message
          </button>
          <button className="ps-btn ps-btn-outline ps-focus">
            <Download size={16} className="text-accent-green" />
            Export
          </button>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — isolated icon boxes" variant="violated">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-cream-dark ps-superellipse-32">
              <Mail size={16} className="text-accent-blue" />
            </div>
            <span className="text-[15px]">Message</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-cream-dark ps-superellipse-32">
              <Download size={16} className="text-accent-green" />
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
      <DemoBlock title="Followed — grain in small badge" variant="followed">
        <div className="flex flex-col items-center gap-3">
          <div
            className="ps-grain ps-superellipse-32 flex items-center justify-center"
            style={{ width: "48px", height: "48px", opacity: 0.08 }}
          >
            <Star size={20} className="text-ink" />
          </div>
          <span className="text-[13px] text-ink-muted">Tiny decorative badge</span>
        </div>
      </DemoBlock>
      <DemoBlock title="Violated — grain across section" variant="violated">
        <div
          className="ps-grain w-full h-full flex items-center justify-center"
          style={{ opacity: 0.12 }}
        >
          <span className="text-[13px] text-ink-muted">Large background fill</span>
        </div>
      </DemoBlock>
    </LabDemo>
  );
}

function Demo14() {
  return (
    <LabDemo {...r(14)}>
      <DemoBlock title="Followed — no shadows" variant="followed">
        <div className="flex flex-col gap-2 w-full">
          <div className="p-3 border border-border-light ps-superellipse-32 bg-surface text-[13px]">
            Card with outline only
          </div>
          <div className="p-3 border border-border-light ps-superellipse-32 bg-surface text-[13px]">
            Another outlined card
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
          <div className="h-12 border-b border-border-light flex items-center px-3 gap-1 bg-cream">
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
            className="border-r border-border-light flex flex-col items-center py-4 gap-4"
            style={{ width: "64px", background: "var(--ps-cream)" }}
          >
            <Settings size={20} />
            <Bell size={20} />
            <User size={20} />
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
          <div className="p-2 border border-border-light ps-superellipse-32 bg-surface text-[13px]">Solid white</div>
          <div className="p-2 border border-border-light ps-superellipse-32 bg-cream text-[13px]">Solid cream</div>
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
          24 rules. Each one tested against a real interface. No fluff.
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
      <DemoBlock title="Followed — group of four" variant="followed">
        <div className="grid grid-cols-2 gap-2 w-full">
          {["A", "B", "C", "D"].map((x) => (
            <div
              key={x}
              className="p-2 border border-border-light ps-superellipse-32 bg-surface text-center text-[13px] font-semibold"
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
              className="p-2 border border-border-light ps-superellipse-32 bg-surface text-center text-[13px] font-semibold"
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
          className="p-3 ps-superellipse-40 border border-border-light bg-surface flex flex-col gap-2"
          style={{ width: "160px" }}
        >
          <div className="flex items-center gap-1.5">
            <AlertTriangle size={15} className="text-accent-orange" />
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
          className="p-3 border border-border-light bg-surface flex flex-col gap-2"
          style={{ width: "160px", borderRadius: "4px" }}
        >
          <div className="flex items-center gap-1.5">
            <AlertTriangle size={15} className="text-accent-orange" />
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

const demos = [
  Demo1, Demo2, Demo3, Demo4, Demo5, Demo6, Demo7, Demo8,
  Demo9, Demo10, Demo11, Demo12, Demo13, Demo14, Demo15, Demo16,
  Demo17, Demo18, Demo19, Demo20, Demo21, Demo22, Demo23, Demo24,
];

export default function LabContent() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-[24px] font-semibold text-ink">The 24-Rule Lab</h2>
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

import { useState } from "react";
import IconTreeIcon from "@/components/IconTreeIcon";

interface NavProps {
  current: string;
  onNavigate: (page: string) => void;
}

const links = [
  { id: "home", label: "Home" },
  { id: "lab", label: "Lab" },
  { id: "rulebook", label: "Rulebook" },
  { id: "about", label: "About" },
];

export default function Nav({ current, onNavigate }: NavProps) {
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream pt-[env(safe-area-inset-top,0px)]">
      <nav className="max-w-[1200px] mx-auto pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] h-12 flex items-center justify-between">
        <button
          onClick={() => handleClick("home")}
          className="ps-nav-link ps-focus font-semibold"
          aria-label="Plainspoken home"
        >
          <span className="text-ink">PLAIN</span>
          <span className="text-ink-muted">spoken</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleClick(l.id)}
              data-active={current === l.id}
              className="ps-nav-link ps-focus"
            >
              {l.label}
            </button>
          ))}
          <a
            href="/plainspoken-skill.md"
            download="plainspoken-skill.md"
            className="ps-nav-link ps-focus"
          >
            Get the skill
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ps-nav-link ps-focus"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <IconTreeIcon name="close-circle" color="#1a1a1a" size={18} /> : <IconTreeIcon name="menu" color="#1a1a1a" size={18} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-cream-dark">
          <div className="pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] py-2 flex flex-col gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => handleClick(l.id)}
                data-active={current === l.id}
                className="ps-nav-link ps-focus w-full justify-start"
              >
                {l.label}
              </button>
            ))}
            <a
              href="/plainspoken-skill.md"
              download="plainspoken-skill.md"
              onClick={() => setOpen(false)}
              className="ps-nav-link ps-focus w-full justify-start"
            >
              Get the skill
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

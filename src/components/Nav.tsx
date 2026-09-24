import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-cream/90 border-b border-border-light"
      style={{ backdropFilter: "saturate(180%)" }}
    >
      <nav className="max-w-[1200px] mx-auto px-4 h-12 flex items-center justify-between">
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
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ps-nav-link ps-focus"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border-light bg-cream">
          <div className="px-4 py-2 flex flex-col gap-1">
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
          </div>
        </div>
      )}
    </header>
  );
}

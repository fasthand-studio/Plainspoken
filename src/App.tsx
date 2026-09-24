import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Landing from "@/pages/Landing";
import Lab from "@/pages/Lab";
import Rulebook from "@/pages/Rulebook";
import About from "@/pages/About";

type Page = "home" | "lab" | "rulebook" | "about";

function App() {
  const [page, setPage] = useState<Page>("home");

  const handleNavigate = (p: string) => {
    setPage(p as Page);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    document.title = "PLAINspoken — Design System by Fasthand Studio";
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Nav current={page} onNavigate={handleNavigate} />
      <main>
        {page === "home" && <Landing onNavigate={handleNavigate} />}
        {page === "lab" && <Lab />}
        {page === "rulebook" && <Rulebook />}
        {page === "about" && <About onNavigate={handleNavigate} />}
      </main>
    </div>
  );
}

export default App;

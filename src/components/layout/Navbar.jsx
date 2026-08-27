import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [{ label: "About", href: "#about" }, { label: "Skills", href: "#skills" }, { label: "Work", href: "#projects" }, { label: "Contact", href: "#contact" }];

function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6" aria-label="Main navigation">
        <a href="#home" className="text-lg font-semibold tracking-[-0.03em] text-ink">Kalvin<span className="text-accent">.</span></a>
        <div className="hidden items-center gap-7 md:flex">{links.map((link) => <a key={link.href} href={link.href} className="text-sm font-medium text-muted transition hover:text-ink">{link.label}</a>)}<a href="mailto:kalvinkiprop@gmail.com" className="nav-cta">Let’s talk</a></div>
        <button className="p-2 text-ink md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <div className="border-t border-line bg-paper px-6 py-8 md:hidden"><div className="mx-auto flex max-w-6xl flex-col gap-6">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-2xl font-medium text-ink">{link.label}</a>)}</div></div>}
    </header>
  );
}
export default Navbar;

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [{ label: "About", href: "#about" }, { label: "Skills", href: "#skills" }, { label: "Work", href: "#projects" }, { label: "Contact", href: "#contact" }];

function Navbar() {
  const [open, setOpen] = useState(false);

  const navigateToSection = (event, href) => {
    event.preventDefault();
    setOpen(false);

    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", href);
    }, 240);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6" aria-label="Main navigation">
        <a href="#home" className="text-lg font-semibold tracking-[-0.03em] text-ink">Kalvin<span className="text-accent">.</span></a>
        <div className="hidden items-center gap-7 md:flex">{links.map((link) => <a key={link.href} href={link.href} className="text-sm font-medium text-muted transition hover:text-ink">{link.label}</a>)}<a href="mailto:kalvinkiprop@gmail.com" className="nav-cta">Let’s talk</a></div>
        <button className="rounded-full p-3 text-ink md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-line bg-paper md:hidden"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.055, delayChildren: 0.06 } },
                closed: { transition: { staggerChildren: 0.035, staggerDirection: -1 } },
              }}
              className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-7"
            >
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => navigateToSection(event, link.href)}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: 12 },
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="rounded-xl py-3 text-2xl font-medium text-ink"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
export default Navbar;

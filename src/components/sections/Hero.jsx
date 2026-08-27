import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero-shell px-6">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut" }} className="grid gap-14 lg:grid-cols-[1fr_22rem] lg:items-end lg:gap-20">
          <div>
            <p className="eyebrow">Kalvin Baranga · Nairobi, Kenya</p>
            <h1 className="hero-title mt-7 max-w-4xl font-semibold leading-[0.92] tracking-[-0.065em] text-ink">Building ideas into<span className="block text-accent">real products.</span></h1>
            <p className="mt-9 max-w-2xl text-xl leading-8 text-muted sm:text-2xl sm:leading-9">I’m Kalvin—a Software Engineering student and full-stack developer with a growing focus on backend and product engineering.</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a className="button-primary" href="#projects">See what I’ve built <ArrowDownRight size={18} /></a>
              <a className="button-secondary" href="https://github.com/TheeBaranga" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <aside className="border-l border-line pl-6 lg:mb-2 lg:pl-8" aria-label="Current focus">
            <p className="eyebrow">Right now</p>
            <div className="mt-5 space-y-6">
              <div><p className="text-sm text-subtle">Building</p><p className="mt-1 text-lg font-medium text-ink">Motii</p><p className="mt-2 leading-6 text-muted">Helping drivers stay ahead of maintenance, renewals, and the surprises of car ownership.</p></div>
              <div className="border-t border-line pt-5"><p className="text-sm text-subtle">Going deeper on</p><p className="mt-1 font-medium text-ink">Django, APIs & product thinking</p></div>
              <div className="flex items-center gap-2 border-t border-line pt-5 text-sm font-medium text-ink"><span className="h-2 w-2 rounded-full bg-green-500" /> Open to opportunities</div>
            </div>
          </aside>
        </motion.div>
        <div className="hero-footer mt-16 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-subtle"><span>Selected work below</span><span className="h-px flex-1 bg-line" /><span>2026</span></div>
      </div>
    </section>
  );
}

export default Hero;

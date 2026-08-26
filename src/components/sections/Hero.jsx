import { hero } from "../../data/hero";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute right-12 top-1/3 h-56 w-56 rounded-full bg-cyan-400/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">

        {/* LEFT SIDE */}

        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 30 }} /*When the page loads: invisible, 30px lower */
          animate={{ opacity: 1, y: 0 }} /* visible, at original position */
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >

          <span className="inline-flex rounded-full border border-blue-500/50 bg-blue-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300 backdrop-blur-sm">
            <span className="sm:hidden">
              FULL-STACK • BACKEND
            </span>

            <span className="hidden sm:inline">
              {hero.badge}
            </span>
          </span>

          <h1 className="mt-6 max-w-2xl whitespace-pre-line text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl">
            {hero.heading}
          </h1>

          <h2 className="mt-6 text-xl font-medium text-slate-300">
            {hero.name}
          </h2>

          <p className="mt-3 text-lg leading-relaxed text-slate-300">
            {hero.subtitle}
          </p>

          <p className="mt-6 leading-8 text-slate-400">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30">
              {hero.buttons.primary}
            </button>

            <button className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-white">
              {hero.buttons.secondary}
            </button>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          className="rounded-2xl border border-slate-700 bg-slate-900 p-8"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: "easeOut",
          }}
        >

          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                Developer Snapshot
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                Full-Stack, backend-leaning.
              </h3>
            </div>

          </div>

          <div className="mt-8">

            <h4 className="text-sm uppercase tracking-wider text-slate-500">
              Status
            </h4>

            <p className="mt-2 text-green-400">
              {hero.status}
            </p>

          </div>

          <div className="mt-8">

            <h4 className="text-sm uppercase tracking-wider text-slate-500">
              Focus
            </h4>

            <ul className="mt-3 space-y-2">

              {hero.focus.map((item) => (
                <li key={item} className="text-slate-300">
                  • {item}
                </li>
              ))}

            </ul>

          </div>

          <div className="mt-8">

            <h4 className="text-sm uppercase tracking-wider text-slate-500">
              Core Stack
            </h4>

            <div className="mt-3 flex flex-wrap gap-2">

              {hero.languages.map((language) => (
                <span
                  key={language}
                  className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300 transition-colors duration-300 hover:bg-slate-700"
                >
                  {language}
                </span>
              ))}

            </div>

          </div>

          <div className="mt-8 border-t border-slate-800 pt-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-slate-500">
                  Currently Building
                </h4>

                <p className="mt-2 text-lg font-semibold text-white">
                  Motii
                </p>

                <p className="mt-1 max-w-sm text-sm leading-6 text-slate-400">
                  A vehicle maintenance and intelligence platform built around mileage,
                  care, insurance, and a personal vehicle assistant.
                </p>
              </div>

              <div className="shrink-0 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300">
                In Build
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
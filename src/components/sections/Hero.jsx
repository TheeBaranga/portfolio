import { hero } from "../../data/hero";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="absolute left-[42%] top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex rounded-full border border-blue-500/70 bg-blue-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
            <span className="sm:hidden">FULL-STACK • BACKEND</span>
            <span className="hidden sm:inline">{hero.badge}</span>
          </span>

          <h1 className="mt-7 max-w-2xl text-5xl font-extrabold leading-[1.08] tracking-tight text-white lg:text-6xl">
            Building Ideas Into
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Real Products.
            </span>
          </h1>

          <h2 className="mt-8 text-xl font-semibold text-slate-200">
            {hero.name}
          </h2>

          <p className="mt-4 max-w-lg text-lg leading-8 text-slate-300">
            Software Engineering student building full-stack products, with a
            growing focus on backend and product engineering.
          </p>

          <p className="mt-7 max-w-lg leading-8 text-slate-400">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="group rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25">
              {hero.buttons.primary}
              <span className="ml-4 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <button className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-white">
              {hero.buttons.secondary}
            </button>
          </div>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-blue-500/40 bg-slate-950/55 p-7 shadow-2xl shadow-blue-950/20 backdrop-blur-xl lg:p-8"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                What I’m Working On
              </p>

              <h3 className="mt-3 max-w-md text-2xl font-bold leading-tight tracking-tight text-white">
                Backend systems, APIs & full-stack products.
              </h3>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-medium text-emerald-400">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              {hero.status}
            </div>
          </div>

          <p className="mt-5 max-w-xl leading-7 text-slate-300">
            I enjoy the part where an idea starts becoming a real system —
            modelling the data, designing the API, connecting the frontend, and
            figuring out the edge cases in between.
          </p>

          <div className="mt-7 border-t border-slate-800 pt-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              Core Stack
            </h4>

            <div className="mt-4 flex flex-wrap gap-3">
              {hero.languages.map((language) => (
                <span
                  key={language}
                  className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-200"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 border-t border-slate-800 pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Currently Building
            </p>

            <div className="relative mt-3 overflow-hidden rounded-xl border border-blue-500/30 bg-gradient-to-br from-slate-900/95 via-slate-950/90 to-blue-950/30 p-5">
              <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-blue-500/50 bg-blue-600/10 text-2xl font-black text-blue-400">
                    M
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-white">Motii</h4>

                    <p className="mt-1 max-w-md text-sm leading-6 text-slate-300">
                      A vehicle maintenance and intelligence platform built
                      around the everyday experience of owning a car.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 pl-0 sm:pl-[4.5rem]">
                  <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                    React Native
                  </span>

                  <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                    Django
                  </span>

                  <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                    DRF
                  </span>

                  <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                    Typescript
                  </span>
                </div>

                <button className="mt-5 pl-0 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300 sm:pl-[4.5rem]">
                  View project <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
import SectionWrapper from "../ui/SectionWrapper";

function About() {
  return (
    <section id="about" className="section-pad border-t border-line px-6">
      <SectionWrapper><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
        <div><p className="eyebrow">01 / About</p><p className="mt-5 max-w-[14rem] text-sm leading-6 text-subtle">Third-year Software Engineering student at USIU-Africa.</p></div>
        <div><h2 className="section-title max-w-4xl">I learn by building.</h2>
          <div className="mt-10 grid gap-8 text-lg leading-8 text-muted sm:grid-cols-2"><p>I’m a third-year Software Engineering student at USIU-Africa who learns best by turning ideas into working software. I enjoy figuring out how systems should work, building the pieces behind them, and improving them as the product takes shape.</p><p>My projects have taken me through full-stack development, machine learning applications, expert systems, and mobile product work. I’m now going deeper into backend systems, APIs, data, and the decisions behind useful products.</p></div>
          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">{[["Full-stack", "building end to end"], ["Backend", "growing technical focus"], ["Product", "thinking beyond the code"]].map(([value, label]) => <div key={value} className="bg-paper p-5 sm:p-6"><dt className="text-xl font-semibold text-ink">{value}</dt><dd className="mt-1 text-sm text-subtle">{label}</dd></div>)}</dl>
        </div>
      </div></SectionWrapper>
    </section>
  );
}
export default About;

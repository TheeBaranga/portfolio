import SectionWrapper from "../ui/SectionWrapper";

function About() {
  return (
    <section id="about" className="section-pad border-t border-line px-6">
      <SectionWrapper><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
        <div><p className="eyebrow">01 / About</p><p className="mt-5 max-w-[14rem] text-sm leading-6 text-subtle">Third-year Software Engineering student at USIU-Africa.</p></div>
        <div><h2 className="section-title max-w-4xl">Curious enough to ask why. Patient enough to build it properly.</h2>
          <div className="mt-10 grid gap-8 text-lg leading-8 text-muted sm:grid-cols-2"><p>I got into software because I liked making ideas tangible. The part I enjoy most is turning a loose problem into a system: shaping the data, designing the API, connecting the interface, then refining what doesn’t work.</p><p>I’m still early in my career, and I’m honest about that. What I bring is momentum, a strong learning habit, and the willingness to stay with hard problems until I understand them.</p></div>
          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">{[["3rd year", "at USIU-Africa"], ["Nairobi", "based in Kenya"], ["Backend", "current direction"]].map(([value, label]) => <div key={value} className="bg-paper p-5 sm:p-6"><dt className="text-xl font-semibold text-ink">{value}</dt><dd className="mt-1 text-sm text-subtle">{label}</dd></div>)}</dl>
        </div>
      </div></SectionWrapper>
    </section>
  );
}
export default About;

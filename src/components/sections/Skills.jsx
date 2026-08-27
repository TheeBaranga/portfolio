import SectionWrapper from "../ui/SectionWrapper";
import { skillGroups } from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-line bg-wash px-6">
      <SectionWrapper><div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[16rem_1fr] lg:gap-20">
          <p className="eyebrow">02 / Toolkit</p>
          <div><h2 className="section-title">Tools I use to get from idea to working software.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">A practical stack, not a keyword collection. Python and Django are where I’m building the most depth.</p></div>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {skillGroups.map((group) => <div key={group.title} className="bg-paper p-7 sm:p-9"><h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-subtle">{group.title}</h3><ul className="mt-6 flex flex-wrap gap-2.5">{group.skills.map(({ name }) => <li key={name} className="rounded-full border border-line bg-wash px-4 py-2 text-sm font-medium text-ink">{name}</li>)}</ul></div>)}
        </div>
      </div></SectionWrapper>
    </section>
  );
}
export default Skills;

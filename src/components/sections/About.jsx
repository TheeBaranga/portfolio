import CommandBlock from "../ui/CommandBlock";
import SectionWrapper from "../ui/SectionWrapper";

function About() {
    return (
        <section
            id="about"
            className="mx-auto relative max-w-7xl px-6 py-24"
        >
            <SectionWrapper delay={0.1}>

                {/* Section Header */}
                <div className="mb-12">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                        About
                    </p>

                    <h2 className="text-4xl font-bold text-white md:text-5xl">
                        I Learn By Building.
                    </h2>
                </div>

                {/* Introduction */}
                <p className="max-w-3xl text-lg leading-8 text-slate-400">
                    I'm a third-year Software Engineering student at USIU-Africa who learns
                    best by building. I enjoy taking an idea, figuring out how it should work,
                    and turning it into something people can actually use.
                </p>

                {/* Cards */}
                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {/* Command Blocks */}
                    <CommandBlock
                        command="whoami"
                        title="Software Engineering Student"
                        subtitle="Third year · USIU-Africa"
                    />

                    <CommandBlock
                        command="building"
                        title="Ideas Into Working Products"
                        subtitle="From backend logic to the interface people use"
                        featured
                    />

                    <CommandBlock
                        command="direction"
                        title="Backend & Product Engineering"
                        subtitle="The side of software I find myself drawn to most"
                    />

                </div>
            </SectionWrapper>
        </section>
    );
}

export default About;
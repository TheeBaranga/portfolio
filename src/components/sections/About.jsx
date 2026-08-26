import CommandBlock from "../ui/CommandBlock";
import SectionWrapper from "../ui/SectionWrapper";

function About() {
    return (
        <section
            id="about"
            className="relative scroll-mt-28 overflow-hidden px-6 py-28"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                <SectionWrapper delay={0.1}>
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                            About Me
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                            I Learn by <span className="text-blue-400">Building.</span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                            I’m a third-year Software Engineering student at USIU-Africa who learns best by turning ideas into working software. I enjoy figuring out how systems should work, building the pieces behind them, and improving them as the product takes shape.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-3">
                        <CommandBlock
                            command="whoami"
                            title="Software Engineering Student"
                            subtitle="Third year · USIU-Africa"
                        />

                        <CommandBlock
                            command="approach"
                            title="Build. Test. Improve."
                            subtitle="I learn by solving real problems, breaking things, fixing them, and understanding why they work."
                            featured
                        />

                        <CommandBlock
                            command="direction"
                            title="Backend & Product Engineering"
                            subtitle="I’m especially drawn to the systems, APIs, data, and decisions behind useful products."
                        />
                    </div>
                </SectionWrapper>
            </div>
        </section>
    );
}

export default About;
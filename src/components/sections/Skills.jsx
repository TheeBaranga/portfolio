import SkillCard from "../ui/SkillCard";
import { skillGroups } from "../../data/skills";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";

function Skills() {
    return (
        <SectionWrapper delay={0.2}>
            <section
                id="skills"
                className="relative mx-auto max-w-7xl scroll-mt-6 px-6 py-28"
            >
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                        My Skills
                    </p>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Technologies I{" "}
                        <span className="text-blue-400">
                            use
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                        The tools and technologies I reach for when turning
                        ideas into working products.
                    </p>
                </motion.div>

                {/* Skill groups */}
                <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                            }}
                            className="h-full"
                        >
                            <SkillCard
                                title={group.title}
                                skills={group.skills}
                            />
                        </motion.div>
                    ))}
                </div>
            </section>
        </SectionWrapper>
    );
}

export default Skills;
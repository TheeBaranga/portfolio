import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";

function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-blue-400">
            Selected Work
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Things I've built.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            A mix of products I'm building, ideas I've explored, and projects
            that have taught me something along the way.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-8">
          {featuredProjects[0] && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard project={featuredProjects[0]} />
            </motion.div>
          )}

          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.slice(1, 3).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: (index + 1) * 0.12,
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* More projects */}
        {otherProjects.length > 0 && (
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 flex items-center gap-4">
              <h3 className="text-2xl font-semibold text-white">
                More Projects
              </h3>

              <div className="h-px flex-1 bg-slate-800" />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                />
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}

export default Projects;
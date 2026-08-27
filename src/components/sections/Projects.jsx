import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import SectionWrapper from "../ui/SectionWrapper";

function Projects() {
  const selectedProjects = projects.filter((project) =>
    ["Motii", "Sleep Health Predictor", "Car Fault Diagnosis Expert System", "E-Commerce Platform"].includes(project.title)
  );
  return (
    <section id="projects" className="section-pad border-t border-line px-6">
      <SectionWrapper><div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[16rem_1fr] lg:gap-20">
          <p className="eyebrow">03 / Selected work</p>
          <div><h2 className="section-title">Projects that show how I think and what I’m learning.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">A mix of live applications, academic systems, and products that are still taking shape.</p></div>
        </div>
        <div className="mt-16 space-y-6">{selectedProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
        <div className="mt-10 flex justify-end"><a href="https://github.com/TheeBaranga?tab=repositories" target="_blank" rel="noreferrer" className="button-secondary">See all repositories ↗</a></div>
      </div></SectionWrapper>
    </section>
  );
}
export default Projects;

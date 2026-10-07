import { ArrowUpRight } from "lucide-react";
function ProjectCard({ project, index }) {
  const url = project.live || project.github;
  const hasImage = ["Sleep Health Predictor", "E-Commerce Platform", "Developer Portfolio"].includes(project.title);
  return (
    <article id={project.caseStudy ? "motii" : undefined} className="project-row grid gap-8 rounded-2xl border border-line p-5 sm:p-7 xl:grid-cols-[4rem_1fr_22rem] xl:items-center">
      <p className="font-mono text-sm text-subtle">0{index + 1}</p>
      <div><p className="eyebrow">{project.status}</p><h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-ink">{project.title}</h3><p className="mt-4 max-w-2xl leading-7 text-muted">{project.description}</p>{project.takeaway && <div className="mt-5 border-l-2 border-accent/60 pl-4"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">Engineering focus</p><p className="mt-1 text-sm leading-6 text-muted">{project.takeaway}</p></div>}<div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">{project.tech.map((tech) => <span key={tech} className="text-sm text-subtle">{tech}</span>)}</div>{url && <a href={url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent">{project.linkLabel || "View project"} <ArrowUpRight size={16} /></a>}</div>
      <div className="aspect-[16/10] overflow-hidden rounded-xl bg-[#dfe2dc]">{hasImage ? <img src={project.image} alt={`${project.title} preview`} className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]" /> : <div className="flex h-full items-end p-6"><span className="text-5xl font-semibold tracking-[-0.06em] text-ink/20">{project.title.charAt(0)}</span></div>}</div>
      {project.caseStudy && <div className="border-t border-line pt-7 xl:col-span-3"><h4 className="text-lg font-semibold text-ink">Built around the working day</h4><dl className="mt-5 grid gap-6 sm:grid-cols-2">{[["The problem", "Managers need to know who has each car, what is being done and what is waiting."], ["The decision", "Prioritise the owner or manager’s workflow, with optional mechanic access and a clear next action."], ["My contribution", "Product decisions, full-stack engineering, interface refinement and deployment."], ["What comes next", "Measure everyday usability and business impact through customer use. Functional checks are not proof of productivity gains."]].map(([label, text]) => <div key={label}><dt className="text-sm font-semibold text-ink">{label}</dt><dd className="mt-2 text-sm leading-6 text-muted">{text}</dd></div>)}</dl></div>}
    </article>
  );
}
export default ProjectCard;

import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useState } from "react";

function ProjectCard({ project }) {
    const projectUrl = project.live || project.github;
    const isClickable = Boolean(projectUrl);

    const openProject = () => {
        if (!projectUrl) return;

        window.open(
            projectUrl,
            "_blank",
            "noopener,noreferrer"
        );
    };

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    return (
        <div
            className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                project.featured
                    ? "border-blue-500/30 bg-slate-900/80 shadow-[0_24px_70px_-42px_rgba(59,130,246,0.75)]"
                    : "border-slate-800 bg-slate-900/50"
            } ${
                isClickable
                    ? "cursor-pointer hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/15 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    : "cursor-default"
            }`}
            role={isClickable ? "link" : undefined}
            tabIndex={isClickable ? 0 : undefined}
            onClick={openProject}
            onKeyDown={(e) => {
                if (!isClickable) return;

                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openProject();
                }
            }}
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();

                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }}
        >
            <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(
                        300px circle at ${mousePosition.x}px ${mousePosition.y}px,
                        rgba(59, 130, 246, 0.05),
                        transparent 70%
                    )`,
                }}
            />

            {project.featured && (
                <div className="absolute left-8 top-8 z-10 rounded-full border border-blue-400/20 bg-blue-600/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                    Featured
                </div>
            )}

            <div className="relative mb-6 h-56 overflow-hidden rounded-xl border border-slate-800 bg-slate-800">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover brightness-95 transition-all duration-500 group-hover:scale-105 group-hover:brightness-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            </div>

            {project.status && (
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">
                    {project.status}
                </p>
            )}

            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                {project.title}
            </h3>

            <p className="mt-3 flex-1 leading-7 text-slate-400">
                {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-full border border-slate-700/80 bg-slate-800/80 px-3 py-1.5 text-sm text-slate-300 transition-colors duration-300 hover:border-blue-500/40 hover:text-white"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {(project.github || project.live) && (
                <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-800 pt-5">
                    {project.github && (
                        <a
                            onClick={(e) => e.stopPropagation()}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500 hover:text-white active:scale-[0.98]"
                        >
                            <FiGithub className="text-base" />
                            GitHub
                        </a>
                    )}

                    {project.live && (
                        <a
                            onClick={(e) => e.stopPropagation()}
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 active:scale-[0.98]"
                        >
                            <FiExternalLink className="text-base" />
                            Live Demo
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}

export default ProjectCard;
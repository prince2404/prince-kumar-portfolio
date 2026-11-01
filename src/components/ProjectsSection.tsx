import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import StageHeader from "./StageHeader";

export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-14 sm:py-16 md:py-20">
      <StageHeader title={projects.heading} />

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        {projects.items.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-surface shadow-card-subtle transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.15]"
          >
            <div>
              {/* Static project cover image (non-clickable, non-zoomable) */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-midnight pointer-events-none select-none">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  quality={85}
                  sizes="(max-width: 768px) 92vw, 480px"
                  className="object-cover object-top"
                  draggable={false}
                />
              </div>

              {/* Project Name & Description */}
              <div className="p-6 pb-0 sm:p-7 sm:pb-0">
                <h3 className="font-display text-[length:var(--step-h3)] font-semibold tracking-tight text-primaryText transition-colors duration-200 group-hover:text-lime">
                  {project.title}
                </h3>

                <p className="mt-3 text-[length:var(--step-body)] font-normal leading-relaxed text-mutedText">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Tech stack & Links */}
            <div className="p-6 pt-5 sm:p-7 sm:pt-6">
              <ul
                className="mb-6 flex flex-wrap gap-2"
                aria-label={`Technologies used in ${project.title}`}
              >
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-white/[0.07] bg-midnight/90 px-2.5 py-1 text-xs font-medium text-mutedText"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-xl bg-lime px-4 py-2 text-xs font-semibold tracking-wide text-midnight transition-transform duration-150 hover:-translate-y-0.5"
                >
                  Live
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 transition-transform duration-150 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-midnight px-4 py-2 text-xs font-semibold tracking-wide text-primaryText transition-colors duration-150 hover:border-lime hover:text-lime"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

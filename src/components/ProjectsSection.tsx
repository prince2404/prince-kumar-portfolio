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
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-surface shadow-card-subtle transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.15]"
          >
            <div>
              {/* 1. Single static photo (non-clickable, non-zoomable, no lightbox) */}
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

              {/* 2. Project Name (no subtitle) & 3. Single small paragraph */}
              <div className="p-6 pb-0 sm:p-7 sm:pb-0">
                <h3 className="font-display text-[length:var(--step-h3)] font-bold tracking-tight text-primaryText transition-colors duration-200 group-hover:text-lime">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-mutedText sm:text-[0.95rem]">
                  {project.description}
                </p>
              </div>
            </div>

            {/* 4. Tech stack used & 5. Live and GitHub links */}
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
                  className="inline-flex min-h-[42px] items-center justify-center rounded-xl bg-lime px-4 py-2 font-display text-xs font-semibold tracking-wide text-midnight transition-transform duration-150 hover:-translate-y-0.5"
                >
                  Live
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center justify-center rounded-xl border border-white/15 bg-midnight px-4 py-2 font-display text-xs font-semibold tracking-wide text-primaryText transition-colors duration-150 hover:border-lime hover:text-lime"
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

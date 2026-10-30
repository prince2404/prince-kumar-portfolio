import { portfolioData } from "@/data/portfolio";
import { gallery } from "@/data/gallery";
import StageHeader from "./StageHeader";
import PhotoGallery from "./PhotoGallery";

export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      className="border-b border-cobalt/30 py-14 sm:py-16 md:py-20"
    >
      <StageHeader title={projects.heading} />

      <div className="space-y-8">
        {projects.items.map((project) => {
          const photos = gallery[project.galleryKey] ?? [];
          const hasPhotos = photos.length > 0;

          return (
            <article
              key={project.id}
              className="rounded-2xl border border-cobalt bg-surface p-6 shadow-cobalt-glow transition-transform duration-150 hover:-translate-y-0.5 sm:p-8"
            >
              {/* Single-mount responsive grid:
                  - Mobile (< lg): 1. Title & Subtitle -> 2. Photo Slider -> 3. Description, Tech Stack & Buttons
                  - Desktop (lg+): Left column has text & buttons; Right column has Photo Slider */}
              <div
                className={
                  hasPhotos
                    ? "grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:gap-y-4"
                    : "block"
                }
              >
                {/* 1. Project Title & Subtitle */}
                <div
                  className={
                    hasPhotos
                      ? "lg:col-span-6 lg:col-start-1 lg:row-start-1"
                      : ""
                  }
                >
                  <h3 className="font-display text-[length:var(--step-h3)] font-bold text-primaryText">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-lime">
                    {project.subtitle}
                  </p>
                </div>

                {/* 2. Reusable Photo Slider */}
                {hasPhotos && (
                  <div className="lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1">
                    <PhotoGallery photos={photos} />
                  </div>
                )}

                {/* 3. Plain-language Description, Built With List & Action Buttons */}
                <div
                  className={
                    hasPhotos
                      ? "lg:col-span-6 lg:col-start-1 lg:row-start-2"
                      : "mt-4"
                  }
                >
                  <ul className="space-y-2.5 text-[length:var(--step-body)] text-primaryText">
  {project.descriptionLines.map((line, index) => (
    <li key={index} className="flex items-start gap-3">
      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime" />
      <span className={index === 0 ? "text-primaryText" : "text-mutedText"}>
        {line}
      </span>
    </li>
  ))}
</ul>

                  <div className="mt-6 border-t border-cobalt/30 pt-5">
                    <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-mutedText">
                      Built with
                    </p>
                    <ul
                      className="mb-6 flex flex-wrap gap-2"
                      aria-label={`Technologies used in ${project.title}`}
                    >
                      {project.techStack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-lg border border-cobalt/60 bg-midnight px-2.5 py-1 text-xs font-medium text-primaryText"
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
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-lime px-4 py-2 text-xs font-bold tracking-wide text-midnight transition-transform duration-150 hover:-translate-y-0.5"
                      >
                        Live Website
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-cobalt bg-midnight px-4 py-2 text-xs font-bold tracking-wide text-primaryText transition-transform duration-150 hover:-translate-y-0.5 hover:border-lime"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

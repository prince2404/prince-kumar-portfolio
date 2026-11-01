import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function HeroSection() {
  const { identity } = portfolioData;
  const nameParts = identity.name.split(" ");

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[calc(100vh-72px)] flex-col justify-center py-14 sm:py-16 md:py-20"
    >
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-12 lg:gap-16">
        {/* Photo of Prince: First on mobile (order-1), Right side on desktop (md:order-2) */}
        <div className="order-1 shrink-0 md:order-2">
          <div className="relative mx-auto w-44 sm:w-52 md:w-64 lg:w-72">
            <div className="relative aspect-[12/13] overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-card-subtle">
              <Image
                src={identity.photoPath}
                alt={identity.photoAlt}
                width={480}
                height={520}
                priority
                sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, (max-width: 1024px) 256px, 288px"
                className="h-full w-full object-cover object-[center_top]"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -bottom-1.5 -right-1.5 h-4 w-4 rounded-full border-2 border-midnight bg-lime"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="order-2 flex-1 text-center md:order-1 md:text-left">
          {/* Two-tone uppercase name */}
          <h1 className="font-display font-extrabold uppercase tracking-tight leading-[1.05]">
            <span className="block text-[length:var(--step-hero)] text-primaryText">
              {nameParts[0]}
            </span>
            {nameParts.length > 1 && (
              <span className="block text-[length:var(--step-hero)] stage-muted-text">
                {nameParts.slice(1).join(" ")}
              </span>
            )}
          </h1>

          {/* Role badge */}
          <div className="mt-4 flex items-center justify-center gap-3 md:justify-start">
            <span className="h-px w-6 bg-lime sm:w-10" />
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-lime sm:text-base">
              {identity.role}
            </p>
          </div>

          <p className="mx-auto mt-5 max-w-xl text-[length:var(--step-body)] leading-relaxed text-mutedText md:mx-0">
            {identity.heroSummary}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-lime px-6 py-3 text-sm font-semibold tracking-wide text-midnight transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lime/20 active:translate-y-0"
            >
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.22-3.22a.75.75 0 1 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
              </svg>
            </a>

            <a
              href={identity.resumePdfPath}
              download
              className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-surface px-6 py-3 text-sm font-semibold tracking-wide text-primaryText transition-all duration-200 hover:-translate-y-0.5 hover:border-lime hover:text-lime"
            >
              Download Resume
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true">
                <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

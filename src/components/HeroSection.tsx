import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function HeroSection() {
  const { identity } = portfolioData;

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

        {/* Text Content: Name, Title, Paragraph, and 2 Action Buttons only */}
        <div className="order-2 flex-1 text-center md:order-1 md:text-left">
          <h1 className="font-display text-[length:var(--step-hero)] font-extrabold leading-[1.08] tracking-tight text-primaryText">
            {identity.name}
          </h1>

          <p className="mt-3 font-display text-[length:var(--step-h2)] font-semibold tracking-tight text-lime">
            {identity.role}
          </p>

          <p className="mx-auto mt-5 max-w-xl text-[length:var(--step-body)] leading-relaxed text-mutedText md:mx-0">
            {identity.heroSummary}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-lime px-6 py-3 font-display text-sm font-semibold tracking-wide text-midnight transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
            >
              View Projects
            </a>

            <a
              href={identity.resumePdfPath}
              download
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/15 bg-surface px-6 py-3 font-display text-sm font-semibold tracking-wide text-primaryText transition-all duration-200 hover:-translate-y-0.5 hover:border-lime hover:text-lime"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

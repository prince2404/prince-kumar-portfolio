import { portfolioData } from "@/data/portfolio";
import StageHeader from "./StageHeader";

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-14 sm:py-16 md:py-20">
      <StageHeader title={experience.heading} />

      <article className="group rounded-2xl border border-white/[0.08] bg-surface p-6 shadow-card-subtle transition-colors duration-200 hover:border-white/[0.15] sm:p-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-[length:var(--step-h3)] font-semibold tracking-tight text-primaryText transition-colors duration-200 group-hover:text-lime">
                {experience.role} — {experience.company}
              </h3>
              <span className="rounded-md bg-lime px-2.5 py-0.5 font-display text-xs font-semibold text-midnight">
                {experience.teamSummary}
              </span>
            </div>
            <p className="mt-1 text-[length:var(--step-meta)] text-mutedText">
              {experience.location}
            </p>
          </div>

          <div className="text-left sm:text-right">
            <span className="inline-block rounded-lg border border-white/[0.08] bg-midnight px-3.5 py-1.5 font-display text-xs font-medium text-mutedText">
              {experience.period}
            </span>
          </div>
        </div>

        <ul className="mt-6 space-y-3.5">
          {experience.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3.5">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
              <span className="text-[length:var(--step-body)] leading-relaxed text-mutedText">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

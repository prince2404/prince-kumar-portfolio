import { portfolioData } from "@/data/portfolio";
import StageHeader from "./StageHeader";

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-14 sm:py-16 md:py-20">
      <StageHeader title={experience.heading} />

      <div className="mt-2 space-y-10 sm:space-y-12">
        {experience.entries.map((entry, idx) => (
          <article key={idx} className="space-y-3.5">
            <h3 className="font-display text-[length:var(--step-h3)] font-semibold tracking-tight text-primaryText">
              {entry.company}
            </h3>

            <p className="max-w-3xl text-[length:var(--step-body)] font-normal leading-relaxed text-mutedText">
              {entry.description}
            </p>

            <p className="pt-0.5 text-[length:var(--step-meta)] font-normal text-mutedText">
              {entry.period}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

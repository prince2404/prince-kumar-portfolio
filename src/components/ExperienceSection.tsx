import { portfolioData } from "@/data/portfolio";
import StageHeader from "./StageHeader";

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-14 sm:py-16 md:py-20">
      <StageHeader title={experience.heading} />

      <div className="mt-2 space-y-10 sm:space-y-12">
        {experience.entries.map((entry, idx) => (
          <article key={idx} className="space-y-3">
            <h3 className="font-display text-lg font-bold tracking-tight text-primaryText sm:text-xl">
              {entry.company}
            </h3>

            <p className="text-[length:var(--step-body)] leading-relaxed text-mutedText">
              {entry.description}
            </p>

            <p className="text-sm text-mutedText/60">
              {entry.period}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

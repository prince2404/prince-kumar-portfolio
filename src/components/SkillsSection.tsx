import { portfolioData } from "@/data/portfolio";
import StageHeader from "./StageHeader";

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-14 sm:py-16 md:py-20">
      <StageHeader title={skills.heading} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        {skills.groups.map((group) => (
          <article
            key={group.category}
            className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-surface p-6 shadow-card-subtle transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.15] sm:p-7"
          >
            <div>
              <h3 className="font-display text-[length:var(--step-h3)] font-semibold tracking-tight text-primaryText transition-colors duration-200 group-hover:text-lime">
                {group.category}
              </h3>

              <ul
                className="mt-4 flex flex-wrap gap-2"
                aria-label={group.category}
              >
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-white/[0.07] bg-midnight/80 px-3 py-1.5 text-xs font-medium text-mutedText transition-colors duration-150 hover:border-lime/50 hover:text-primaryText sm:text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

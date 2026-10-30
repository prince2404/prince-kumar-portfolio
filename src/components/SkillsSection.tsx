import { portfolioData } from "@/data/portfolio";
import StageHeader from "./StageHeader";

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="border-b border-cobalt/30 py-14 sm:py-16 md:py-20">
      <StageHeader title={skills.heading} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        {skills.groups.map((group) => (
          <article
            key={group.category}
            className="flex flex-col justify-between rounded-2xl border border-cobalt/60 bg-surface p-6 shadow-cobalt-glow transition-transform duration-150 hover:-translate-y-1 sm:p-7"
          >
            <div>
              <h3 className="font-display text-[length:var(--step-h3)] font-bold text-primaryText">
                {group.category}
              </h3>

              <ul
                className="mt-4 flex flex-wrap gap-2"
                aria-label={group.category}
              >
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-cobalt/50 bg-midnight px-3 py-1.5 text-xs font-medium text-primaryText transition-colors hover:border-lime sm:text-sm"
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

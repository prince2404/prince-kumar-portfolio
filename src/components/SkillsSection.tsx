import { portfolioData } from "@/data/portfolio";
import StageHeader from "./StageHeader";

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-14 sm:py-16 md:py-20">
      <StageHeader title={skills.heading} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        {skills.groups.map((group, idx) => (
          <article
            key={group.category}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-surface p-6 shadow-card-subtle transition-all duration-300 hover:-translate-y-1 hover:border-lime/30 hover:shadow-lg hover:shadow-lime/[0.04] sm:p-7"
          >
            {/* Decorative index number */}
            <span
              aria-hidden="true"
              className="absolute -right-2 -top-4 font-display text-7xl font-extrabold text-white/[0.03] transition-colors duration-300 group-hover:text-lime/[0.06]"
            >
              {String(idx + 1).padStart(2, "0")}
            </span>

            <div className="relative">
              <h3 className="font-display text-[length:var(--step-h3)] font-bold uppercase tracking-tight text-primaryText transition-colors duration-200 group-hover:text-lime">
                {group.category}
              </h3>

              <ul
                className="mt-4 flex flex-wrap gap-2"
                aria-label={group.category}
              >
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-white/[0.07] bg-midnight/80 px-3 py-1.5 text-xs font-medium text-mutedText transition-all duration-200 hover:-translate-y-0.5 hover:border-lime/50 hover:text-primaryText sm:text-sm"
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

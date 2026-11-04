import { portfolioData, type ToolIconId } from "@/data/portfolio";
import StageHeader from "./StageHeader";

function ToolIcon({ id }: { id: ToolIconId }) {
  switch (id) {
    case "java":
      return (
        <svg
          viewBox="6 4 36 40"
          className="h-10 w-10 sm:h-11 sm:w-11"
          aria-hidden="true"
        >
          <path
            fill="#5382A1"
            d="M19.7 32.8c-1.8 1 .9 2.1 5.6 1.9 2.5-.1 5-.6 6.6-1.3 0 0 .8.6 1.9 1.1-6.8 2.9-15.4-.2-14.1-1.7zm-1.2-4.6c-2 1.1 1.2 2.2 6.5 2.2 2.7 0 5.3-.5 6.9-1.2 0 0 .7.6 1.7 1-7.4 2.7-16.7.2-15.1-2zm16.8 8.3c-7.5 3.1-18.8 2.1-22.2.6-1.3-.6.6-1.4 1.8-1.6.8-.2 1.2-.1 1.2-.1-1.5-1-9.5 2.1-4.1 3 15 2.4 27.3-1.1 23.3-1.9zm1.7-6.1s5.2-1.3 2.8-3.8c-1.8-1.8-4.7-1.5-4.7-1.5s2-.3 3.4.6c1.2.8 1.5 2.2-1.5 4.7zm-6.1 9.5c6.2-.5 12.2-2.7 12.4-4.7 0 0-.6 1.5-4.6 2.6-4.7 1.3-10.6 1.5-14.1.4 0 0 .7.6 6.3 1.7z"
          />
          <path
            fill="#E76F00"
            d="M27.6 6c2.6 5.2-6.8 9.2-9.5 13.7-2 3.3 1 6.8 5.2 9.4-1.7-3.8-4.2-6.9.2-11.2 3.8-3.7 7.1-6.9 4.1-11.9zm3.4 9.5c-4.4 4.2-6 6.7-3.3 11.4 1.6-2.9 1.1-5.2 3.4-7.8 2.2-2.5 5-5.6-.1-3.6z"
          />
        </svg>
      );
    case "spring":
      return (
        <svg
          viewBox="4 4 40 40"
          className="h-10 w-10 sm:h-11 sm:w-11"
          aria-hidden="true"
        >
          <circle cx="24" cy="24" r="19" fill="#6DB33F" />
          <path
            fill="#FFFFFF"
            d="M34.2 14.5c-1.7 4-6.8 6.4-11.8 7.5-5.8 1.3-10.3 3.8-10.6 8.8 3.2-3.4 8.3-4.3 13.6-5.2 4.6-.8 9.2-2.2 11.4-6.8-.9 8.2-6.2 14.3-14.2 14.3-4.6 0-8.6-2.3-10.8-5.9.8-1.5 2-2.2 3.8-2.2 1.8 0 3.2 1.1 3.2 2.8 0 1.4-1 2.4-2.3 2.6 1.7 1 3.7 1.5 5.9 1.5 6.8 0 11.8-4.6 12.6-11.8.2-1.9 0-3.8-.8-5.6z"
          />
        </svg>
      );
    case "sql":
      return (
        <svg
          viewBox="7 5 34 38"
          className="h-10 w-10 sm:h-11 sm:w-11"
          aria-hidden="true"
        >
          <ellipse cx="24" cy="11.5" rx="15" ry="5.5" fill="#38BDF8" />
          <path
            fill="#0284C7"
            d="M9 11.5v8.5c0 3 6.7 5.5 15 5.5s15-2.5 15-5.5v-8.5c0 3-6.7 5.5-15 5.5S9 14.5 9 11.5z"
          />
          <path
            fill="#0369A1"
            d="M9 21v8.5c0 3 6.7 5.5 15 5.5s15-2.5 15-5.5V21c0 3-6.7 5.5-15 5.5S9 24 9 21z"
          />
          <path
            fill="#075985"
            d="M9 30.5v6.5c0 3 6.7 5.5 15 5.5s15-2.5 15-5.5v-6.5c0 3-6.7 5.5-15 5.5S9 33.5 9 30.5z"
          />
        </svg>
      );
    case "docker":
      return (
        <svg
          viewBox="5 7 39 32"
          className="h-10 w-10 sm:h-11 sm:w-11"
          aria-hidden="true"
        >
          <path
            fill="#2496ED"
            d="M26 19h4v4h-4v-4zm-5 0h4v4h-4v-4zm-5 0h4v4h-4v-4zm-5 0h4v4h-4v-4zm5-5h4v4h-4v-4zm5 0h4v4h-4v-4zm5 0h4v4h-4v-4zm-5-5h4v4h-4V9zm19.5 12.8c-1-.7-3.3-.9-5-.6-.2-1.8-1.2-3.4-2.9-4.5l-1-.6-.6 1c-.8 1.2-1.1 3.2-.2 4.9-.5.3-1.6.7-3 .7H7.2c-.6 3.6.4 8.3 3.2 11.5 2.7 3.1 6.8 4.7 12.1 4.7 11.4 0 19.8-5.2 23.8-14.7 1.6.1 4.9 0 6.6-3.3l.3-.6-.7-.5z"
          />
        </svg>
      );
    case "git":
      return (
        <svg
          viewBox="4 4 40 40"
          className="h-10 w-10 sm:h-11 sm:w-11"
          aria-hidden="true"
        >
          <path
            fill="#F05032"
            d="M42.7 22.1 25.9 5.3a2.7 2.7 0 0 0-3.8 0L5.3 22.1a2.7 2.7 0 0 0 0 3.8l16.8 16.8a2.7 2.7 0 0 0 3.8 0l16.8-16.8a2.7 2.7 0 0 0 0-3.8z"
          />
          <path
            stroke="#FFFFFF"
            strokeWidth="2.6"
            strokeLinecap="round"
            d="M18.5 9l12.5 12.5M23 13.5v16"
          />
          <circle cx="23" cy="13.5" r="3.2" fill="#FFFFFF" />
          <circle cx="31" cy="21.5" r="3.2" fill="#FFFFFF" />
          <circle cx="23" cy="29.5" r="3.2" fill="#FFFFFF" />
        </svg>
      );
    case "github":
      return (
        <svg
          viewBox="1.5 1.5 21 21"
          className="h-10 w-10 sm:h-11 sm:w-11"
          fill="#F2F5F7"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
          />
        </svg>
      );
    case "junit":
      return (
        <svg
          viewBox="4 4 40 40"
          className="h-10 w-10 sm:h-11 sm:w-11"
          aria-hidden="true"
        >
          <circle cx="24" cy="24" r="19" fill="#25A162" />
          <path fill="#DC524A" d="M24 5a19 19 0 0 1 19 19H24V5z" />
          <circle cx="24" cy="24" r="12" fill="#090D16" />
          <path
            fill="#25A162"
            d="M21.5 29.5 16 24l2.2-2.2 3.3 3.3 8.3-8.3L32 19l-10.5 10.5z"
          />
        </svg>
      );
    case "github-actions":
      return (
        <svg
          viewBox="7 6 35 36"
          className="h-10 w-10 sm:h-11 sm:w-11"
          aria-hidden="true"
        >
          <circle cx="15" cy="14" r="5" fill="#2088FF" />
          <circle cx="15" cy="34" r="5" fill="#2088FF" />
          <circle cx="34" cy="24" r="6" fill="#2088FF" />
          <path
            stroke="#2088FF"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            d="M15 19v10M20 14h6a8 8 0 0 1 8 8M20 34h6a8 8 0 0 0 8-8"
          />
        </svg>
      );
    case "aws":
      return (
        <svg
          viewBox="6 9 36 30"
          className="h-10 w-10 sm:h-11 sm:w-11"
          aria-hidden="true"
        >
          <text
            x="24"
            y="25"
            textAnchor="middle"
            fill="#F2F5F7"
            fontFamily="sans-serif"
            fontWeight="800"
            fontSize="16"
          >
            aws
          </text>
          <path
            fill="none"
            stroke="#FF9900"
            strokeWidth="2.8"
            strokeLinecap="round"
            d="M10 31.5c7.5 5 20.5 5 28 0"
          />
          <path
            fill="none"
            stroke="#FF9900"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M34 30.2h4.8V35"
          />
        </svg>
      );
    case "vercel":
      return (
        <svg
          viewBox="1.5 2.5 21 19"
          className="h-9 w-9 sm:h-10 sm:w-10"
          fill="#F2F5F7"
          aria-hidden="true"
        >
          <path d="M12 3 22 20H2L12 3z" />
        </svg>
      );
  }
}

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-14 sm:py-16 md:py-20">
      <StageHeader title={skills.heading} />

      {/* 2-Column Main Tools Grid with dark/transparent icon containers and prominent logos */}
      <div className="mx-auto grid max-w-2xl grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-12 sm:gap-y-9">
        {skills.tools.map((tool) => (
          <div
            key={tool.id}
            className="group flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:gap-4 sm:text-left"
          >
            {/* Dark theme-blended icon container with minimal padding and zero white box */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-surface/80 p-1.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:border-white/[0.16] sm:h-14 sm:w-14">
              <ToolIcon id={tool.id} />
            </div>

            {/* Tool Name & Subtitle */}
            <div className="min-w-0">
              <h3 className="font-display text-sm font-semibold tracking-tight text-primaryText transition-colors duration-200 group-hover:text-lime sm:text-base">
                {tool.name}
              </h3>
              <p className="mt-0.5 text-xs font-normal leading-snug text-mutedText sm:text-sm">
                {tool.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
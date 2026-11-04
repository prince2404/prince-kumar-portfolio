interface StageHeaderProps {
  title: string;
}

export default function StageHeader({ title }: StageHeaderProps) {
  const words = title.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <div className="group mb-12 text-center">
      <h2 className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 font-display font-extrabold uppercase leading-[1.1] tracking-wider sm:gap-x-4">
        <span className="text-[length:var(--step-stage)] text-primaryText transition-colors duration-200 group-hover:text-lime">
          {firstWord}
        </span>
        {restWords && (
          <span className="text-[length:var(--step-stage)] stage-muted-text transition-colors duration-200">
            {restWords}
          </span>
        )}
      </h2>
    </div>
  );
}

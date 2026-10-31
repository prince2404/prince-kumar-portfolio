interface StageHeaderProps {
  title: string;
}

export default function StageHeader({ title }: StageHeaderProps) {
  const words = title.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <div className="group mb-10">
      <h2 className="font-display font-extrabold uppercase tracking-tight leading-[1.1]">
        <span
          className="block text-[length:var(--step-stage)] text-primaryText transition-colors duration-200 group-hover:text-lime"
        >
          {firstWord}
        </span>
        {restWords && (
          <span
            className="block text-[length:var(--step-stage)] stage-muted-text transition-colors duration-200"
          >
            {restWords}
          </span>
        )}
      </h2>
    </div>
  );
}

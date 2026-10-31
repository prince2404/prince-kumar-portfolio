interface StageHeaderProps {
  title: string;
}

export default function StageHeader({ title }: StageHeaderProps) {
  return (
    <div className="group mb-10 inline-flex items-center gap-3">
      <span
        aria-hidden="true"
        className="h-2.5 w-2.5 rounded-full bg-lime transition-transform duration-300 group-hover:scale-125"
      />
      <h2 className="font-display text-[length:var(--step-h2)] font-bold tracking-tight text-primaryText transition-colors duration-200 group-hover:text-lime">
        {title}
      </h2>
    </div>
  );
}

interface StageHeaderProps {
  title: string;
}

// Plain heading with no numbers, slashes, brackets, or developer decorations
export default function StageHeader({ title }: StageHeaderProps) {
  return (
    <div className="mb-8 border-l-2 border-cobalt pl-4 md:pl-6">
      <h2 className="font-display text-[length:var(--step-h2)] font-bold tracking-tight text-primaryText">
        {title}
      </h2>
    </div>
  );
}

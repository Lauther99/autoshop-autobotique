interface StepHeaderProps {
  number: number;
  title: string;
}

export default function StepHeader({ number, title }: StepHeaderProps) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary-red)] text-sm font-extrabold text-white">
        {number}
      </span>
      <h2 className="text-[1.3rem] font-bold text-[var(--text-white)]">{title}</h2>
    </div>
  );
}

interface StepHeaderProps {
  number: number;
  title: string;
}

export default function StepHeader({ number, title }: StepHeaderProps) {
  return (
    <div className="step-header">
      <span className="step-number">{number}</span>
      <h2>{title}</h2>
    </div>
  );
}

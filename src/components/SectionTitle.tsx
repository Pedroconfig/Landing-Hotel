type SectionTitleProps = {
  label: string;
  title: string;
  description?: string;
  color?: "blue" | "orange";
};

export function SectionTitle({
  label,
  title,
  description,
  color = "blue",
}: SectionTitleProps) {
  const labelColor = color === "orange" ? "text-[#F7941D]" : "text-[#009CDE]";

  return (
    <div className="mb-8 text-center">
      <p
        className={`text-sm font-bold uppercase tracking-[0.25em] ${labelColor}`}
      >
        {label}
      </p>

      <h2 className="mt-2 text-3xl font-bold">{title}</h2>

      {description && (
        <p className="mt-3 text-slate-600">{description}</p>
      )}
    </div>
  );
}
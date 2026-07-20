type SectionTitleProps = {
  label: string;
  title: string;
  description?: string;
  color?: "blue" | "orange" | "light";
  centered?: boolean;
};

export function SectionTitle({
  label,
  title,
  description,
  color = "blue",
  centered = false,
}: SectionTitleProps) {
  const labelColor =
    color === "orange"
      ? "text-[#f7a63c]"
      : color === "light"
        ? "text-[#8cd5e5]"
        : "text-[#08708e]";
  const titleColor = color === "light" ? "text-white" : "text-[#103f4d]";
  const descriptionColor = color === "light" ? "text-white/60" : "text-[#607b83]";

  return (
    <div className={centered ? "text-center" : "text-left"}>
      <p className={`text-xs font-black uppercase tracking-[0.22em] ${labelColor}`}>
        {label}
      </p>
      <h2 className={`mt-2.5 text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] sm:mt-3 sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-2.5 max-w-2xl text-[0.95rem] leading-6 sm:mt-3 sm:text-base sm:leading-7 ${descriptionColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}

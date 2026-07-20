import { ArrowUpRight, type LucideIcon } from "lucide-react";

type MenuCardProps = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  variant?: "featured" | "compact" | "exclusive";
  index?: number;
};

export function MenuCard({
  title,
  description,
  href,
  icon: Icon,
  variant = "compact",
  index,
}: MenuCardProps) {
  if (variant === "featured") {
    return (
      <a
        href={href}
        className="group relative min-h-64 overflow-hidden rounded-[2rem] bg-[#07516a] p-7 text-white shadow-[0_18px_45px_rgba(7,81,106,.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(7,81,106,.23)]"
      >
        <div className="absolute -bottom-16 -right-12 h-48 w-48 rounded-full border-[34px] border-white/[0.055] transition duration-500 group-hover:scale-110" />
        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 text-[#ffb24e] ring-1 ring-inset ring-white/15">
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#ffb24e]/60" />
              <Icon aria-hidden="true" size={27} strokeWidth={1.7} />
            </div>
            <ArrowUpRight
              aria-hidden="true"
              size={21}
              className="text-white/60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
            />
          </div>
          <div className="mt-auto pt-10">
            {index !== undefined && (
              <p className="mb-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#ffb24e]">
                Essencial · 0{index + 1}
              </p>
            )}
            <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
            <p className="mt-2 max-w-xs text-sm leading-6 text-white/70">
              {description}
            </p>
          </div>
        </div>
      </a>
    );
  }

  if (variant === "exclusive") {
    return (
      <a
        href={href}
        className="group flex min-h-48 flex-col rounded-[1.75rem] border border-white/12 bg-white/[0.065] p-6 text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#f7a63c]/50 hover:bg-white/[0.1]"
      >
        <div className="flex items-start justify-between">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7941d] text-white shadow-lg shadow-orange-950/20 ring-1 ring-inset ring-white/20">
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-white/55" />
            <Icon aria-hidden="true" size={23} strokeWidth={1.8} />
          </div>
          <ArrowUpRight aria-hidden="true" size={19} className="text-white/45 transition group-hover:text-[#ffb24e]" />
        </div>
        <h3 className="mt-8 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/60">{description}</p>
      </a>
    );
  }

  return (
    <a
      href={href}
      className="group flex min-h-36 flex-col rounded-[1.5rem] border border-[#0b536a]/10 bg-white p-5 shadow-[0_8px_30px_rgba(30,67,76,.055)] transition duration-300 hover:-translate-y-1 hover:border-[#0b789b]/30 hover:shadow-[0_16px_38px_rgba(30,67,76,.11)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="relative flex h-11 w-11 items-center justify-center rounded-[0.9rem] bg-[#e8f5f7] text-[#08708e] ring-1 ring-inset ring-[#08708e]/8 transition group-hover:bg-[#08708e] group-hover:text-white">
          <span className="absolute right-1.5 top-1.5 h-1 w-1 rounded-full bg-[#f7941d]" />
          <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
        </div>
        <ArrowUpRight aria-hidden="true" size={17} className="text-[#0b536a]/30 transition group-hover:text-[#f7941d]" />
      </div>
      <h3 className="mt-5 text-[1.05rem] font-bold leading-snug text-[#123f4d]">
        {title}
      </h3>
      <p className="mt-1.5 line-clamp-2 text-sm leading-5 text-[#55747d]">
        {description}
      </p>
    </a>
  );
}

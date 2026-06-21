import { type LucideIcon } from "lucide-react";

type MenuCardProps = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export function MenuCard({
  title,
  description,
  href,
  icon: Icon,
}: MenuCardProps) {
  return (
    <a
      href={href}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#009CDE] hover:shadow-md"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#009CDE]/10 text-[#009CDE] transition group-hover:bg-[#009CDE] group-hover:text-white">
        <Icon size={22} strokeWidth={2.2} />
      </div>
      <h3 className="text-lg font-bold text-slate-900 uppercase">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </a>
  );
}

import { GuideItem } from "../data/guidedata";
import { MenuCard } from "./MenuCard";
import { SectionTitle } from "./SectionTitle";

type MenuGridProps = {
  id: string;
  label: string;
  title: string;
  description: string;
  items: GuideItem[];
};

export function MenuGrid({ id, label, title, description, items }: MenuGridProps) {
  const featuredItems = items.slice(0, 3);
  const remainingItems = items.slice(3);

  return (
    <section id={id} className="relative scroll-mt-4 bg-[#f7f3eb] px-5 pb-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 -mt-20 rounded-[2.5rem] border border-white/70 bg-[#fbfaf7]/95 p-5 shadow-[0_24px_80px_rgba(25,67,78,.12)] backdrop-blur sm:p-8 lg:p-10">
          <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <SectionTitle label={label} title={title} description={description} />
            <p className="max-w-xs text-sm leading-6 text-[#668089] lg:text-right">
              Toque em uma opção para ir direto à informação que procura.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {featuredItems.map((item, index) => (
              <MenuCard
                key={item.id}
                title={item.title}
                description={item.description}
                href={`#${item.id}`}
                icon={item.icon}
                variant="featured"
                index={index}
              />
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {remainingItems.map((item) => (
              <MenuCard
                key={item.id}
                title={item.title}
                description={item.description}
                href={`#${item.id}`}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

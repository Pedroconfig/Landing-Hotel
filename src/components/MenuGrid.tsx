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
    <section id={id} className="relative scroll-mt-20 bg-[#f7f3eb] px-4 pb-16 sm:px-8 sm:pb-24 lg:scroll-mt-4">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 -mt-14 rounded-[2rem] border border-white/70 bg-[#fbfaf7]/95 p-4 shadow-[0_24px_80px_rgba(25,67,78,.12)] backdrop-blur sm:-mt-20 sm:rounded-[2.5rem] sm:p-8 lg:p-10">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:mb-8 lg:flex-row lg:items-end">
            <SectionTitle label={label} title={title} description={description} />
            <p className="hidden max-w-xs text-sm leading-6 text-[#668089] sm:block lg:text-right">
              Toque em uma opção para ir direto à informação que procura.
            </p>
          </div>

          <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0">
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

          <p className="mt-1 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#769098] lg:hidden">
            <span className="h-1 w-8 rounded-full bg-[#08708e]/20" />
            Deslize para ver os essenciais
            <span className="h-1 w-8 rounded-full bg-[#08708e]/20" />
          </p>

          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4 xl:grid-cols-5">
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

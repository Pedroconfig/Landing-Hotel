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

export function MenuGrid({
  id,
  label,
  title,
  description,
  items,
}: MenuGridProps) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-12">
      <SectionTitle label={label} title={title} description={description} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MenuCard
            key={item.id}
            title={item.title}
            description={item.description}
            href={`#${item.id}`}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}

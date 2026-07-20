import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GuideItem } from "../data/guidedata";
import { BackToTopLink } from "./BackToTopLink";

type GuideSectionProps = {
  item: GuideItem;
  index: number;
};

function DetailText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={`${part}-${index}`} className="font-black text-[#194957]">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </>
  );
}

export function GuideSection({ item, index }: GuideSectionProps) {
  const Icon = item.icon;
  const number = String(index + 1).padStart(2, "0");

  return (
    <section
      id={item.id}
      className={`scroll-mt-4 border-t border-[#0b536a]/8 px-5 py-16 sm:px-8 sm:py-20 ${
        index % 2 === 0 ? "bg-[#fbfaf7]" : "bg-[#f2eee6]"
      }`}
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(220px,300px)_1fr] lg:gap-14">
        <div className="lg:pt-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#07516a] text-white shadow-[0_10px_24px_rgba(7,81,106,.16)] ring-1 ring-inset ring-white/15">
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#f7a63c]" />
              <Icon aria-hidden="true" size={26} strokeWidth={1.75} />
            </div>
            <span className="text-xs font-black tracking-[0.2em] text-[#f7941d]">
              {number}
            </span>
          </div>
          <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-[#08708e]">
            {item.title}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-[#103f4d] sm:text-4xl">
            {item.description}
          </h2>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#0b536a]/10 bg-white shadow-[0_18px_55px_rgba(30,67,76,.07)]">
          {item.id === "mapa" && (
            <div className="relative aspect-[2.4/1] min-h-56 overflow-hidden border-b border-[#0b536a]/10 bg-[#e8f3f2]">
              <Image
                src="/img/mapa1.jpeg"
                alt="Mapa de experiências do Hotel das Marés"
                fill
                sizes="(min-width: 1024px) 850px, calc(100vw - 40px)"
                className="object-cover"
              />
            </div>
          )}

          <div className="p-6 sm:p-8 lg:p-10">
            <ul className="divide-y divide-[#0b536a]/8">
              {item.details.map((detail, detailIndex) => (
                <li
                  key={`${detail}-${detailIndex}`}
                  className="grid gap-3 py-4 first:pt-0 last:pb-0 sm:grid-cols-[8px_1fr] sm:gap-4"
                >
                  <span className="mt-2 hidden h-2 w-2 rounded-full bg-[#f7941d] sm:block" />
                  <p className="whitespace-pre-line text-[0.98rem] leading-7 text-[#486872]">
                    <DetailText text={detail} />
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#0b536a]/8 pt-7">
              {item.buttonText && item.buttonHref ? (
                <a
                  href={item.buttonHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#f7941d] px-6 py-3 text-sm font-black text-white shadow-[0_10px_25px_rgba(247,148,29,.23)] transition hover:-translate-y-0.5 hover:bg-[#ff9f2d]"
                >
                  {item.buttonText}
                  <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#789098]">
                  Hotel das Marés
                </span>
              )}
              <BackToTopLink />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

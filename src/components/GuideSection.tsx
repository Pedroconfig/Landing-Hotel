import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
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
      className={`scroll-mt-24 border-t border-[#0b536a]/8 px-4 py-3 sm:px-8 sm:py-4 lg:scroll-mt-4 lg:py-20 ${
        index % 2 === 0 ? "bg-[#fbfaf7]" : "bg-[#f2eee6]"
      }`}
    >
      <details
        open
        data-guide-id={item.id}
        className="group mx-auto max-w-7xl"
      >
        <summary className="flex min-h-22 cursor-pointer list-none items-center gap-3 rounded-[1.4rem] border border-[#0b536a]/9 bg-white px-4 py-3 shadow-[0_8px_24px_rgba(30,67,76,.055)] transition active:scale-[.99] [&::-webkit-details-marker]:hidden lg:hidden">
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#07516a] text-white ring-1 ring-inset ring-white/15">
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#f7a63c]" />
            <Icon aria-hidden="true" size={23} strokeWidth={1.75} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black tracking-[0.18em] text-[#f7941d]">
                {number}
              </span>
              <span className="truncate text-[10px] font-black uppercase tracking-[0.15em] text-[#08708e]">
                {item.title}
              </span>
            </div>
            <h2 className="mt-1 line-clamp-2 font-sans text-sm font-black leading-5 text-[#183f4b]">
              {item.description}
            </h2>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef6f6] text-[#08708e]">
            <ChevronDown
              aria-hidden="true"
              size={19}
              className="transition duration-300 group-open:rotate-180"
            />
          </div>
        </summary>

        <div className="hidden gap-x-8 gap-y-10 group-open:block lg:grid lg:grid-cols-[minmax(220px,300px)_1fr] lg:gap-x-14 lg:gap-y-12">
          <div className="hidden lg:block lg:pt-4">
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
            <h2 className="mt-3 text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-[#103f4d]">
              {item.description}
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-[1.4rem] border border-[#0b536a]/10 bg-white shadow-[0_12px_36px_rgba(30,67,76,.07)] lg:rounded-[2rem] lg:shadow-[0_18px_55px_rgba(30,67,76,.07)]">
            {item.id === "mapa" && (
              <div className="relative aspect-[1.35/1] min-h-52 overflow-hidden border-b border-[#0b536a]/10 bg-[#e8f3f2] sm:aspect-[2.4/1] lg:min-h-56">
                <Image
                  src="/img/mapa1.jpeg"
                  alt="Mapa de experiências do Hotel das Marés"
                  fill
                  sizes="(min-width: 1024px) 850px, calc(100vw - 32px)"
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-5 sm:p-8 lg:p-10">
              <ul className="divide-y divide-[#0b536a]/8">
                {item.details.map((detail, detailIndex) => (
                  <li
                    key={`${detail}-${detailIndex}`}
                    className="grid gap-3 py-3.5 first:pt-0 last:pb-0 sm:grid-cols-[8px_1fr] sm:gap-4 sm:py-4"
                  >
                    <span className="mt-2 hidden h-2 w-2 rounded-full bg-[#f7941d] sm:block" />
                    <p className="whitespace-pre-line text-[0.95rem] leading-6.5 text-[#486872] sm:text-[0.98rem] sm:leading-7">
                      <DetailText text={detail} />
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-3 border-t border-[#0b536a]/8 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between lg:mt-8 lg:pt-7">
                {item.buttonText && item.buttonHref ? (
                  <a
                    href={item.buttonHref}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f7941d] px-6 py-3 text-center text-sm font-black text-white shadow-[0_10px_25px_rgba(247,148,29,.23)] transition active:scale-[.98] hover:bg-[#ff9f2d]"
                  >
                    {item.buttonText}
                    <ArrowUpRight aria-hidden="true" size={17} />
                  </a>
                ) : (
                  <span className="hidden text-xs font-bold uppercase tracking-[0.16em] text-[#789098] sm:inline">
                    Hotel das Marés
                  </span>
                )}
                <BackToTopLink />
              </div>
            </div>
          </div>
        </div>
      </details>
    </section>
  );
}

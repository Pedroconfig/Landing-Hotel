import { GuideItem } from "../data/guidedata";
import { BackToTopLink } from "./BackToTopLink";
import Image from "next/image";

type GuideSectionProps = {
  item: GuideItem;
};

export function GuideSection({ item }: GuideSectionProps) {
  return (
    <section
      id={item.id}
      className="scroll-mt-8 border-t border-slate-200 bg-white px-6 py-12"
    >
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#009CDE]">
            {item.title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            {item.description}
          </h2>

          {item.id === "mapa" && (
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/img/mapa1.jpeg"
                alt="Mapa de experiências do Hotel das Marés"
                width={1280}
                height={526}
                sizes="(min-width: 1024px) 960px, calc(100vw - 48px)"
                className="h-auto w-full object-contain"
              />
            </div>
          )}

          <ul className="mt-6 space-y-3 text-slate-700">
            {item.details.map((detail) => (
              <li key={detail} className="leading-7">
                {detail}
              </li>
            ))}
          </ul>

          {item.buttonText && item.buttonHref && (
            <a
              href={item.buttonHref}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex rounded-full bg-[#F7941D] px-6 py-3 font-semibold text-white transition hover:bg-orange-500"
            >
              {item.buttonText}
            </a>
          )}
          <div>
            <BackToTopLink />
          </div>
        </div>
      </div>
    </section>
  );
}

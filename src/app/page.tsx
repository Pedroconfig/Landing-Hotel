import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Hero } from "../components/Hero";
import { GuideSection } from "../components/GuideSection";
import { MenuGrid } from "../components/MenuGrid";
import { SectionTitle } from "../components/SectionTitle";
import { exclusiveItems, guideItems } from "../data/guidedata";
import { MenuCard } from "../components/MenuCard";
import { ChatbotWidget } from "../components/CahtBotWidget";
import { SmoothScroll } from "../components/SmoothScroll";
import { MobileDock } from "../components/MobileDock";
import { MobileGuideEnhancer } from "../components/MobileGuideEnhancer";

export default function HomePage() {
  return (
    <main id="topo" className="min-h-screen overflow-hidden bg-[#f7f3eb] text-[#153f4b]">
      <SmoothScroll />
      <MobileGuideEnhancer />
      <Hero />

      <MenuGrid
        id="menu"
        label="Seu guia de bolso"
        title="O que você procura?"
        description="Encontre rapidamente tudo para uma estadia tranquila e aproveite cada momento à beira-mar."
        items={guideItems}
      />

      <section className="relative overflow-hidden bg-[#063e52] px-4 py-16 text-white sm:px-8 sm:py-24">
        <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full border-[72px] border-white/[0.025]" />
        <div className="absolute -bottom-40 left-[15%] h-80 w-80 rounded-full bg-[#0a6f88]/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 sm:gap-6 lg:flex-row lg:items-end">
            <SectionTitle
              label="Só para hóspedes"
              title="Benefícios exclusivos"
              description="Vantagens especiais para deixar sua experiência no Hotel das Marés ainda melhor."
              color="light"
            />
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/65">
              <span className="h-2 w-2 rounded-full bg-[#f7a63c]" />
              Disponível durante sua estadia
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
            {exclusiveItems.map((item) => (
              <MenuCard
                key={item.id}
                title={item.title}
                description={item.description}
                href={`#${item.id}`}
                icon={item.icon}
                variant="exclusive"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-8 sm:gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div className="max-w-xl">
            <SectionTitle
              label="Tudo em detalhes"
              title="Informações para uma estadia sem dúvidas"
              description="Horários, orientações e serviços organizados para uma consulta simples. Continue explorando ou use o menu sempre que precisar."
            />
            <a
              href="#boas-vindas"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-black text-[#08708e]"
            >
              Começar pelas boas-vindas
              <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
          <div className="relative min-h-64 overflow-hidden rounded-[1.75rem] shadow-[0_24px_60px_rgba(30,67,76,.14)] sm:min-h-96 sm:rounded-[2.25rem]">
            <Image
              src="/img/hotel-real.jpeg"
              alt="Hotel das Marés e a Praia de Mundaú"
              fill
              sizes="(min-width: 1024px) 640px, calc(100vw - 40px)"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#073f52]/75 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 flex items-center gap-3 p-5 text-white sm:p-9">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7941d]">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/65">Seu destino</p>
                <p className="mt-1 text-lg font-bold">Mundaú, Trairi — CE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        {guideItems.map((item, index) => (
          <GuideSection key={item.id} item={item} index={index} />
        ))}

        {exclusiveItems.map((item, index) => (
          <GuideSection key={item.id} item={item} index={guideItems.length + index} />
        ))}
      </div>

      <footer className="bg-[#032f40] px-5 pb-32 pt-14 text-white sm:px-8 sm:py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-center">
          <div className="rounded-2xl bg-white px-4 py-3">
            <Image
              src="/img/logo-hotel.png"
              alt="Hotel das Marés"
              width={180}
              height={70}
              className="h-12 w-auto object-contain"
            />
          </div>
          <a
            href="#topo"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold transition hover:border-white/40 hover:bg-white/10"
          >
            Voltar ao início
            <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 pt-7 text-sm text-white/50 sm:flex-row">
          <p>Guia Digital do Hóspede</p>
          <p>Praia de Mundaú · Trairi, Ceará</p>
        </div>
      </footer>

      <ChatbotWidget />
      <MobileDock />
    </main>
  );
}

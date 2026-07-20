import Image from "next/image";
import { ArrowDown, Clock3, MapPin, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[#043c51] text-white">
      <Image
        src="/img/hotel-real.jpeg"
        alt="Vista aérea do Hotel das Marés, de frente para a Praia de Mundaú"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[58%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,37,52,.94)_0%,rgba(2,49,67,.79)_40%,rgba(0,87,112,.22)_74%,rgba(0,0,0,.08)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#f7f3eb] to-transparent" />

      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
        <a
          href="#topo"
          className="rounded-2xl bg-white/95 px-4 py-2 shadow-[0_10px_40px_rgba(0,0,0,.14)] backdrop-blur"
          aria-label="Hotel das Marés — início"
        >
          <Image
            src="/img/logo-hotel.png"
            alt="Hotel das Marés"
            width={170}
            height={64}
            priority
            className="h-11 w-auto object-contain"
          />
        </a>

        <a
          href="#recepcao"
          className="group inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2.5 text-sm font-bold text-white backdrop-blur-md transition hover:border-white/60 hover:bg-white hover:text-[#07516a] sm:px-5"
        >
          <MessageCircle size={17} />
          <span className="hidden sm:inline">Falar com a recepção</span>
          <span className="sm:hidden">Recepção</span>
        </a>
      </header>

      <div className="mx-auto flex max-w-7xl flex-col justify-center px-5 pb-40 pt-20 sm:px-8 sm:pt-24 lg:px-10 lg:pt-28">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
            <MapPin size={15} className="text-[#ffad42]" />
            Praia de Mundaú · Ceará
          </div>

          <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-[5.5rem]">
            Sua estadia,
            <span className="block text-[#ffad42] italic">mais leve.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/82 sm:text-xl">
            Tudo o que você precisa para aproveitar o Hotel das Marés, reunido
            em um guia simples, rápido e feito para você.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#menu"
              className="group inline-flex items-center gap-3 rounded-full bg-[#f7941d] px-6 py-3.5 text-sm font-black text-white shadow-[0_12px_32px_rgba(247,148,29,.3)] transition hover:-translate-y-0.5 hover:bg-[#ff9f2d]"
            >
              Explorar o guia
              <ArrowDown size={17} className="transition group-hover:translate-y-0.5" />
            </a>
            <div className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-white/78">
              <Clock3 size={17} className="text-[#ffad42]" />
              Informações sempre à mão
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

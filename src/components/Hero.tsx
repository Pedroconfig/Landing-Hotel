import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#009CDE] text-white">
      <div className="absolute inset-0">
        <Image
          src="/img/banner-praia.png"
          alt="Praia de Mundaú"
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover opacity-30"
        />
      </div>

      <div className="relative mx-auto flex min-h-[520px] max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
        <Image
          src="/img/logo-hotel.png"
          alt="Logo Hotel das Marés"
          width={96}
          height={96}
          priority
          className="mb-6 h-24 w-24 rounded-full bg-white object-contain p-3 shadow-lg"
        />

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em]">
          Hotel das Marés
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          Bem-vindo ao seu Guia Digital
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-white/90">
          Tudo o que você precisa para aproveitar sua estadia em um só lugar.
        </p>

        <p className="mt-4 rounded-full bg-white/15 px-5 py-2 text-sm font-medium backdrop-blur">
          Praia de Mundaú — Trairi/CE
        </p>

        <a
          href="#menu"
          className="mt-8 rounded-full bg-[#F7941D] px-8 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-orange-500"
        >
          Acessar guia
        </a>
      </div>
    </section>
  );
}

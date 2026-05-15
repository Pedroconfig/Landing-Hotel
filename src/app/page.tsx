import { Hero } from "../components/Hero";
import { GuideSection } from "../components/GuideSection";
import { MenuGrid } from "../components/MenuGrid";
import { SectionTitle } from "../components/SectionTitle";
import { exclusiveItems, guideItems } from "../data/guidedata";
import { MenuCard } from "../components/MenuCard";
import { ChatbotWidget } from "../components/CahtBotWidget";

export default function HomePage() {
  return (
    <main id="topo" className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />

      <MenuGrid
        id="menu"
        label="Menu principal"
        title="Escolha uma opção"
        description="Acesse rapidamente informções do hotel"
        items={guideItems}
      />

      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            label="Área exclusiva"
            title="Benefícios para hóspedes"
            description="Acesse vantagens especiais do Hotel das Marés."
            color="orange"
          />

          <div className="grid gap-4 md:grid-cols-3">
            {exclusiveItems.map((item) => (
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
      </section>

      <section className="bg-slate-100 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            label="Informações"
            title="Detalhes do guia"
            description="Clique em qualquer opção acima para descer diretamente até a informação desejada."
          />
        </div>
      </section>

      {guideItems.map((item) => (
        <GuideSection key={item.id} item={item} />
      ))}

      {exclusiveItems.map((item) => (
        <GuideSection key={item.id} item={item} />
      ))}

      <footer className="bg-slate-950 px-6 py-8 text-center text-white">
        <h2 className="text-xl font-bold">Hotel das Marés</h2>

        <p className="mt-2 text-sm text-white/70">
          Guia Digital do Hóspede — Praia de Mundaú, Trairi/CE
        </p>
      </footer>
      <ChatbotWidget />
    </main>
  );
}

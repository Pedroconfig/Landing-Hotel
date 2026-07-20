import { ConciergeBell, House, LayoutGrid, MessageCircle } from "lucide-react";

const navigationItems = [
  { label: "Início", href: "#topo", icon: House },
  { label: "Guia", href: "#menu", icon: LayoutGrid },
  { label: "Recepção", href: "#recepcao", icon: ConciergeBell },
  {
    label: "WhatsApp",
    href: "https://wa.me/5585984466569",
    icon: MessageCircle,
    external: true,
  },
];

export function MobileDock() {
  return (
    <nav
      aria-label="Navegação rápida"
      className="mobile-dock fixed inset-x-3 bottom-3 z-40 grid grid-cols-4 rounded-[1.4rem] border border-white/70 bg-white/92 px-1.5 py-1.5 shadow-[0_16px_50px_rgba(3,47,64,.22)] backdrop-blur-xl sm:hidden"
    >
      {navigationItems.map(({ label, href, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-[1rem] px-1 text-[10px] font-black text-[#52717a] transition active:scale-95 active:bg-[#e8f5f7] active:text-[#08708e]"
        >
          <Icon aria-hidden="true" size={20} strokeWidth={1.9} />
          {label}
        </a>
      ))}
    </nav>
  );
}

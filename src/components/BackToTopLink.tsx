import { ArrowUp } from "lucide-react";

export function BackToTopLink() {
  return (
    <a
      href="#topo"
      className="group inline-flex items-center gap-2 rounded-full px-2 py-2 text-sm font-bold text-[#08708e] transition hover:text-[#f7941d]"
    >
      Voltar ao topo
      <ArrowUp size={16} className="transition group-hover:-translate-y-0.5" />
    </a>
  );
}

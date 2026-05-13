import {
  MessageCircle,
  Clock,
  Coffee,
  Utensils,
  Waves,
  Droplets,
  Map,
  Wifi,
  ClipboardList,
  Headphones,
  Star,
  LogOut,
  Gift,
  Ticket,
   Smile,
  type LucideIcon,
} from "lucide-react";


export type GuideItem = {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon:LucideIcon;
  buttonText?: string;
  buttonHref?: string;
};

export const guideItems: GuideItem[] = [
  {
    id: "boas-vindas",
    title: "Boas-vindas",
    description: "Mensagem especial para iniciar sua estadia.",
    icon:MessageCircle,
    details: [
      "Seja bem-vindo ao Hotel das Marés.",
      "Preparamos este guia digital para facilitar sua estadia.",
      "Aqui você encontra informações sobre horários, serviços, Wi-Fi, restaurante, piscinas e recepção.",
    ],
  },
  {
    id: "horarios",
    title: "Horários do Hotel",
    description: "Confira horários importantes durante sua hospedagem.",
    icon:Clock,
    details: [
      "Café da manhã: consulte os horários na recepção.",
      "Piscinas: funcionamento conforme orientação do hotel.",
      "Check-out: confirme o horário limite com a recepção.",
    ],
  },
  {
    id: "cafe",
    title: "Café da Manhã",
    description: "Informações sobre o café da manhã.",
    icon:Coffee,
    details: [
      "O café da manhã é servido diariamente.",
      "Para informações sobre horário e local, fale com a recepção.",
      "Caso tenha restrições alimentares, avise nossa equipe.",
    ],
  },
  {
    id: "restaurante",
    title: "Restaurante",
    description: "Cardápio, horários e informações do restaurante.",
    icon:Utensils,
    details: [
      "Consulte pratos, bebidas e horários de funcionamento.",
      "A equipe do restaurante está disponível para ajudar durante sua estadia.",
      "Para pedidos ou dúvidas, fale com a recepção.",
    ],
  },
  {
    id: "piscinas",
    title: "Piscinas",
    description: "Regras e horários de uso das piscinas.",
    icon:Waves,
    details: [
      "Utilize as piscinas respeitando as normas de segurança.",
      "Crianças devem estar acompanhadas por responsáveis.",
      "Consulte os horários de funcionamento com a recepção.",
    ],
  },
  {
    id: "aquamares",
    title: "Aquamares",
    description: "Informações sobre o parque aquático.",
    icon:Droplets,
    details: [
      "Acesse informações sobre o Aquamares.",
      "Confira disponibilidade, horários e orientações de uso.",
      "Em caso de dúvidas, fale com nossa equipe.",
    ],
  },
  {
    id: "passeios",
    title: "Passeios",
    description: "Sugestões de passeios e experiências na região.",
    icon:Map,
    details: [
      "Conheça opções de passeios em Mundaú e região.",
      "Consulte sugestões com a recepção.",
      "Aproveite experiências locais durante sua hospedagem.",
    ],
  },
  {
    id: "wifi",
    title: "Wi-Fi",
    description: "Acesse a rede Wi-Fi do hotel.",
    icon:Wifi,
    details: [
      "Rede: HOTEL_DAS_MARES",
      "Senha: mares2026",
      "Caso tenha dificuldades para conectar, fale com a recepção.",
    ],
    buttonText: "Falar com a Recepção",
    buttonHref: "https://wa.me/5585999120074",
  },
  {
    id: "normas",
    title: "Normas",
    description: "Regras importantes para uma boa estadia.",
    icon:ClipboardList,
    details: [
      "Respeite os horários e espaços comuns do hotel.",
      "Evite barulhos excessivos em horários de descanso.",
      "Em caso de dúvidas sobre regras internas, fale com a recepção.",
    ],
  },
  {
    id: "recepcao",
    title: "Recepção",
    description: "Fale diretamente com nossa equipe.",
    icon:Headphones,
    details: [
      "Precisa de ajuda?",
      "Clique no botão abaixo para falar diretamente com nossa recepção.",
    ],
    buttonText: "WhatsApp Recepção",
    buttonHref: "https://wa.me/5585999120074",
  },
  {
    id: "avaliacao",
    title: "Avaliar Estadia",
    description: "Conte como foi sua experiência.",
    icon:Star,
    details: [
      "Sua avaliação é muito importante para nós.",
      "Compartilhe sua experiência e ajude-nos a melhorar nossos serviços.",
    ],
  },
  {
    id: "checkout",
    title: "Check-out",
    description: "Informações para finalizar sua hospedagem.",
    icon:LogOut,
    details: [
      "Confira o horário de check-out com a recepção.",
      "Verifique seus pertences antes de sair.",
      "Em caso de consumo extra, consulte a equipe do hotel.",
    ],
  },
];

export const exclusiveItems: GuideItem[] = [
  {
    id: "cashback",
    title: "Cashback Hotel das Marés",
    description: "Ganhe benefícios para futuras hospedagens.",
    icon:Gift,
    details: [
      "Parte do valor da hospedagem retorna em benefícios.",
      "Promoções exclusivas.",
      "Créditos para futuras reservas.",
      "Campanhas especiais para hóspedes.",
    ],
    buttonText: "Quero participar",
    buttonHref: "https://wa.me/5585999120074",
  },
  {
    id: "vouchers",
    title: "Vouchers Promocionais",
    description: "Acesse promoções e ofertas especiais.",
    icon:Ticket,
    details: [
      "Confira vouchers promocionais disponíveis.",
      "Aproveite ofertas especiais durante ou após sua estadia.",
      "Consulte as condições com a recepção.",
    ],
  },
  {
    id: "instagram",
    title: "Instagram Oficial",
    description: "Acompanhe novidades e conteúdos do hotel.",
    icon:Smile,
    details: [
      "Siga o Hotel das Marés no Instagram.",
      "Acompanhe novidades, fotos e promoções.",
    ],
    buttonText: "Abrir Instagram",
    buttonHref: "https://instagram.com",
  },
  {
    id: "Conheça a Tata",
    title: "Conheça a Tata, nossa mascote",
    description:
      "A Tata é a mascote oficial do Hotel das Marés, sempre trazendo alegria, diversão e boas-vindas para nossos hóspedes.",
      icon:Smile,
    details: [
      "Acompanhe as aventuras da Tata pelo hotel.",
      "Veja novidades, fotos, promoções e momentos especiais.",
      "Siga o Hotel das Marés no Instagram e fique por dentro de tudo.",
    ],
    buttonText: "Conhecer a Tata no Instagram",
    buttonHref: "https://instagram.com",
  },
];

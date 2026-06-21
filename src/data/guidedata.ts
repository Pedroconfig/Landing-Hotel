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
  PhoneCall,
  Siren,
  Dog,
  UsersRound,
  ConciergeBell,
  Camera,
  PawPrint,
  Bell,
  type LucideIcon,
} from "lucide-react";

export type GuideItem = {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
  buttonText?: string;
  buttonHref?: string;
};

export const guideItems: GuideItem[] = [
  {
    id: "boas-vindas",
    title: "Boas-vindas",
    description: "Mensagem especial para iniciar sua estadia.",
    icon: MessageCircle,
    details: [
      "Seja muito bem-vindo ao Hotel das Marés!",
      "Estamos felizes em receber você em nossa casa à beira-mar, na Praia de Mundaú.",
      "Aqui, cada detalhe foi preparado para proporcionar descanso, diversão e momentos especiais ao lado de quem você ama",
    ],
  },
  {
    id: "horarios",
    title: "Horários do Hotel",
    description: "Confira horários importantes durante sua hospedagem.",
    icon: Clock,
    details: [
      "Confira os principais horários durante sua estadia:",
      " 🕑 Check-in: 14h",
      " 🕑 Check-out: 12h",
      " 🍳 Café da manhã: 07:30 às 09:30",
      " 🏊 Piscina de hóspedes: 08:00 às 22:00",
      "🍽️ Restaurante:",
      "🌤️ Durante a semana: 10:00 às 20:00",
      "🌙 Sextas e sábados: até às 22:00",
      "🎟️ AcquaMarés (parque aquático):",
      "📍 Quarta-feira a domingo e feriados",
      "🕙 Das 10:00 às 16:30",
      "Em caso de dúvidas, fale com nossa equipe 💬🌊",
    ],
  },
  {
    id: "cafe",
    title: "Café da Manhã",
    description: "Informações sobre o café da manhã.",
    icon: Coffee,
    details: [
      `Seu dia começa melhor por aqui ☀️

Nosso café da manhã é servido diariamente das **07:30 às 09:30**, com frutas, bolos, opções regionais e diversas delícias preparadas com carinho.

Aproveite esse momento especial e tenha um excelente dia!`,
    ],
  },
  {
    id: "restaurante",
    title: "Restaurante",
    description: "Cardápio, horários e informações do restaurante.",
    icon: Utensils,
    details: [
      " Nosso restaurante oferece refeições, petiscos, drinks e pratos especiais em um ambiente agradável e acolhedor.",

      "Temos um restaurante exclusivo para nossos hóspedes.",

      "Consulte nosso cardápio e aproveite sabores preparados especialmente para você.",
    ],
  },
  {
    id: "piscinas e Áreas de Lazer",
    title: "Piscinas",
    description: "Regras e horários de uso das piscinas.",
    icon: Waves,
    details: [
      "Relaxe e aproveite nossos espaços de lazer 🌴",

      "O Hotel das Marés possui uma piscina exclusiva para hóspedes, reservada especialmente para proporcionar mais conforto e tranquilidade durante sua estadia.",
      "Horário de funcionamento: das 08:00 às 22:00",
      "Oferecemos ainda CORTESIA no acesso ao Parque Aquático - AcquaMarés nos dias de funcionamento do parque. Temos também , áreas de convivência  e espaços perfeitos para aproveitar bons momentos.",

    ],
  },
  {
    id: "aquamares",
    title: "Acquamares",
    description: "Informações sobre o parque aquático.",
    icon: Droplets,
    details: [
      "Diversão garantida para toda a família 🌊",

      "O Acquamares funciona de quarta-feira a domingo e feriados, das 10:00 às 16:30.",

      "Aproveite momentos especiais com piscinas, áreas de lazer e muito entretenimento para todas as idades.,",
    ],
  },
  {
    id: "passeios",
    title: "Passeios",
    description: "Sugestões de passeios e experiências na região.",
    icon: Map,
    details: [
      "🛶 Passeios & Experiências",

      "Mundaú possui experiências incríveis esperando por você 🌴",

      "Utilize os **QR Codes espalhados pelo hotel** e conheça prestadores de serviços e experiências disponíveis na região, como passeios, aventuras e atrações locais.",

      "Descubra novas experiências e aproveite ao máximo sua estadia.",
    ],
  },
  {
    id: "wifi",
    title: "Wi-Fi",
    description: "Acesse a rede Wi-Fi do hotel.",
    icon: Wifi,
    details: [
      "📶 Wi-Fi",

      "Para maior conforto durante sua estadia, disponibilizamos acesso à internet em nossas áreas 🌊",

      "📡 **HOTEL DAS MARES**",
      "Rede exclusiva para hóspedes.",
      "📱 Utilize o **QR Code afixado dentro da suíte** para conectar automaticamente.",

      "📡 **VISITANTES**",
      "Rede destinada ao público visitante.",
    ],
    buttonText: "Falar com a Recepção",
    buttonHref: "https://wa.me/5585999120074",
  },
  {
    id: "normas",
    title: "Normas",
    description: "Regras importantes para uma boa estadia.",
    icon: ClipboardList,
    details: [
      "Respeite os horários e espaços comuns do hotel.",
      "Evite barulhos excessivos em horários de descanso.",
      "Em caso de dúvidas sobre regras internas, fale com a recepção.",
    ],
  },
  {
    id: "mapa",
    title: "Mapa Hotel",
    description: "Mapa do Hotel das Mares",
    icon: Map,
    details: [
      "🗺️ Mapa de Experiências",

      " 1️⃣ Estacionamento Exclusivo para Hóspedes",

      "🚗 Estacionamento privativo e seguro.",

      "2️⃣ Recepção e Suítes",

      "🏨 Categoria Confort.Sua chegada com acolhimento e conforto.",

      " 3️⃣ Suítes Excellence, Excellence Vista, Premium, Premium Vista e Master",

      "🌊 Sofisticação e diferentes vistas para experiências únicas.",

      " 4️⃣ Salão de Eventos",

      "🎉 Um espaço encantador onde bons encontros acontecem.",

      " 5️⃣ Piscina de Hóspedes",

      "🏊 Piscina exclusiva para hóspedes relaxarem e aproveitarem.",

      " 6️⃣ Bar da Piscina",

      "🍹 Bebidas e petiscos para momentos leves e refrescantes.",

      " 7️⃣ Restaurante Deck",

      "🍽️ Restaurante exclusivo para hóspedes.",

      " 8️⃣ Área Kids",

      "🧒 Diversão segura para os pequenos.",

      "9️⃣ Espaço Eventos",

      "🎶 Espaço para eventos ao lado do restaurante e deck.",

      " 🔟 Relax na Praia",

      "🌴 Quiosques exclusivos na praia para momentos especiais à beira-mar.",

      "---",

      " 🌴 Conheça Mundaú",

      "Mundaú encanta por suas praias, dunas, coqueirais e piscinas naturais.",

      "Aproveite para conhecer uma das regiões mais especiais do litoral cearense.",
    ],
  },
  {
    id: "recepcao",
    title: "Recepção",
    description: "Fale diretamente com nossa equipe.",
    icon: Headphones,
    details: [
      "💬 Falar com a Recepção",
      "Estamos disponíveis para ajudar durante sua hospedagem 🌊",
      "🕖 Durante a semana: das 07:00 às 20:00",
      "🌙 Finais de semana: até às 22:00",

      "⚠️ Em caso de URGÊNCIA, por favor evitar mensagens. Procure atendimento imediato presencialmente ou através de ligação.",
    ],
    buttonText: "WhatsApp Recepção",
    buttonHref: "https://wa.me/5585999120074",
  },
  {
    id: "avaliacao",
    title: "Avaliar Estadia",
    description: "Conte como foi sua experiência.",
    icon: Star,
    details: [
      "Sua avaliação é muito importante para nós.",
      "Compartilhe sua experiência e ajude-nos a melhorar nossos serviços.",
    ],
  },
  {
    id: "checkout",
    title: "Check-out",
    description: "Informações para finalizar sua hospedagem.",
    icon: LogOut,
    details: [
      "Esperamos que sua experiência esteja sendo especial 🌊",

      "Antes da saída, consulte orientações importantes e compartilhe sua avaliação conosco.",
    ],
  },
  {
    id: "hotel-normas",
    title: "Normas Hotel",
    description: "Normas de hospedagem",
    icon: Utensils,
    details: [
      " Para garantir conforto, segurança e tranquilidade a todos os hóspedes:",
      "🎟️ É obrigatório portar as pulseiras fornecidas pelo hotel durante toda a estadia.",
      "🔇 Caixas de SOM não são bem-vindas nas áreas comuns e apartamentos.",
      "🌙 Respeite os horários de descanso dos demais hóspedes.",
      "🚭 Não é permitido fumar em áreas internas dos apartamentos e restaurantes.",
      "🍔 Não é permitido consumo de alimentos externos nas áreas do restaurante, piscinas e quiosques.",
      "🧒 Crianças devem estar sempre acompanhadas por responsáveis.",
      "🐶 O tutor do PET é responsável pelo seu amigão durante toda a hospedagem.",
      "🐾 Evite deixar o PET sozinho e trancado no apartamento.",
      "🍽️ Evite circulação de PETs nas áreas de restaurante e alimentação.",
      "🏊 A piscina de hóspedes é exclusiva para hóspedes identificados.",
      "🚫 Não é permitido utilizar copos ou objetos de vidro nas áreas de piscina.",
      "🧹 A limpeza dos apartamentos segue programação interna do hotel.",
      "🚪 Ao sair do apartamento, desligue equipamentos elétricos e mantenha a porta devidamente fechada.",
      "📶 O acesso à internet é destinado exclusivamente aos clientes e visitantes autorizados.",
      "🚗 O estacionamento é destinado aos hóspedes e usuários autorizados pelo hotel.",
      "⚠️ Em caso de emergência, procure imediatamente nossa equipe presencialmente ou através de ligação.",
    ],
  },
  {
    id: "area",
    title: "Área Kids e Família",
    description: "Área para diversão em família e crianças",
    icon: UsersRound,
    details: [
      "Diversão e momentos especiais em família fazem parte da experiência Hotel das Marés 🌊",

      "Aproveite nossos espaços de convivência e lazer.",
    ],
  },
  {
    id: "pet",
    title: "Política de Pet",
    description:
      "Política para pets dentro da hospedagem e área comum no hotel",
    icon: Dog,
    details: [
      "Pedimos sua colaboração para que todos tenham uma ótima experiência durante a hospedagem.",
      "✅ Evite deixar seu PET trancado sozinho no apartamento.",
      "✅ Faça com que seu vizinho também goste do seu amigão 😊",
      "✅ Evite áreas de restaurante e alimentação.",
      "Contamos com sua compreensão 🌊",
    ],
  },
  {
    id: "serviços",
    title: "Serviços extras",
    description: "serviços extras ofeecidos pelo Hotel das Marés",
    icon: ConciergeBell,
    details: [
      "Consulte disponibilidade para:",

      "✨ Massagens",
      "🛶 Passeios",
      "🎉 Decorações especiais",
      "🍽️ Experiências diferenciadas",
    ],
  },
  {
    id: "telefones-úteis",
    title: "Telefones Úteis",
    description: "Telefones úteis em caso de emergência",
    icon: PhoneCall,
    details: [
      "🚨 Emergências:",

      "👮 Polícia Civil — 197",
      "🛡️ Defesa Civil — 199",
      "🚔 Polícia Militar — 190",
      "🚑 Ambulância / SAMU — 192",
      "🚒 Corpo de Bombeiros — 193",
      "👩 Delegacia da Mulher — 180",
    ],
  },
  {
    id: "região",
    title: "Contatos da Região",
    description: "Telefones úteis da Região de Trairi",
    icon: PhoneCall,
    details: [
      "🏥 Contatos Úteis da Região",

      "🏥 Hospital de Trairi:",
      "📞 (85) 98441-6151",

      "💊 Farmácia:",
      "📞 (85) 99639-0708",

      "🚗 Reboque 24 Horas:",
      "📞 (85) 98993-5460",

      "🔋 Casa das Baterias:",
      "📞 (85) 999465766",

    ],
  },
  {
    id: "Emergência",
    title: "Emergência e Segurança",
    description: "Em casos mais urgentes",
    icon: Siren,
    details: [
      "Em caso de necessidade, entre em contato imediatamente com nossa equipe.",

      "Sua segurança é prioridade.",
    ],
  },
  {
    id: "servico-quarto",
    title: "Serviço de Quarto e Limpeza",
    description: "Informações sobre serviço de quarto e limpeza.",
    icon: Bell,
    details: [
      "🛎️ Serviço de Quarto e Limpeza",
      "O serviço de quarto está disponível para os hóspedes e possui taxa adicional.",
      "A limpeza do apartamento deve ser solicitada na recepção até as 12h.",
      "A troca de enxoval poderá ser realizada mediante solicitação após 48 horas de hospedagem.",
    ],
  },
];

export const exclusiveItems: GuideItem[] = [
  {
    id: "cashback",
    title: "Cashback Hotel das Marés",
    description: "Ganhe benefícios para futuras hospedagens.",
    icon: Gift,
    details: [
      "💰 Cashback Hotel das Marés",

      "Clientes membros do programa fidelidade do Hotel das Marés acumulam **CASHBACK** em cada hospedagem 🌊",

      "Cadastre-se e aproveite ainda mais suas hospedagens economizando em futuras experiências.",

      "✨ Cadastre-se e acumule benefícios!",
    ],
    buttonText: "Quero participar",
    buttonHref: "https://wa.me/5585999120074",
  },
  {
    id: "vouchers",
    title: "Vouchers Promocionais",
    description: "Acesse promoções e ofertas especiais.",
    icon: Ticket,
    details: [
      " 🎁 Vouchers Promocionais",

      "Temos **VOUCHERS promocionais** que oferecem **BÔNUS** para hospedagem no Hotel das Marés 🌊",

      "Aproveite campanhas especiais e garanta vantagens exclusivas para futuras experiências conosco.",
    ],
    buttonText: "Consulte aqui",
    buttonHref:
      "https://hbook.hsystem.com.br/Voucher?companyId=668701b7eb07d802b99fe55e&utm_source=chatgpt.com",
  },
  {
    id: "instagram",
    title: "Instagram Oficial",
    description: "Acompanhe novidades e conteúdos do hotel.",
    icon: Camera,
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
    icon: PawPrint,
    details: [
      "Acompanhe as aventuras da Tata pelo hotel.",
      "Veja novidades, fotos, promoções e momentos especiais.",
      "Siga o Hotel das Marés no Instagram e fique por dentro de tudo.",
    ],
    buttonText: "Conhecer a Tata no Instagram",
    buttonHref: "https://hoteldasmares.com.br/conheca-a-tata/",
  },
];

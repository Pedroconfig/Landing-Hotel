export type ChatbotAnswer = {
  keywords: string[];
  answer: string;
};

export const chatbotAnswers: ChatbotAnswer[] = [
  {
    keywords: ["wifi", "wi-fi", "internet", "senha", "rede"],
    answer:
      "A rede Wi-Fi é HOTEL_DAS_MARES e a senha é mares2026. Caso tenha dificuldade para conectar, fale com a recepção.",
  },
  {
    keywords: ["recepção", "recepcao", "ajuda", "whatsapp", "atendimento"],
    answer:
      "Você pode falar com a recepção pelo WhatsApp: https://wa.me/5585999120074",
  },
  {
    keywords: ["cashback", "benefício", "beneficio", "vantagem"],
    answer:
      "O cashback oferece benefícios para futuras hospedagens, promoções exclusivas e créditos para próximas reservas.",
  },
  {
    keywords: ["voucher", "vouchers", "promoção", "promocao", "desconto"],
    answer:
      "Os vouchers promocionais podem oferecer condições especiais. Consulte a recepção para saber quais estão disponíveis.",
  },
  {
    keywords: ["check-out", "checkout", "sair", "saída", "saida"],
    answer:
      "Para informações sobre check-out, confirme o horário limite com a recepção e verifique seus pertences antes de sair.",
  },
  {
    keywords: ["piscina", "piscinas"],
    answer:
      "As piscinas devem ser utilizadas respeitando as normas de segurança. Crianças devem estar acompanhadas por responsáveis.",
  },
  {
    keywords: ["restaurante", "comida", "jantar", "almoço", "almoco"],
    answer:
      "Para informações sobre restaurante, cardápio e horários, fale com a equipe do hotel ou com a recepção.",
  },
  {
    keywords: ["café", "cafe", "café da manhã", "cafe da manha"],
    answer:
      "O café da manhã é servido diariamente. Para confirmar horário e local, consulte a recepção.",
  },
  {
    keywords: ["normas", "regras", "regra"],
    answer:
      "As normas ajudam a manter uma boa experiência para todos os hóspedes. Respeite horários, espaços comuns e orientações do hotel.",
  },
];

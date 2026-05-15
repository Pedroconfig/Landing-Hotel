import { GoogleGenAI } from "@google/genai";
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("gemini api key não encontrada");
}

const ai = new GoogleGenAI({
  apiKey,
});

const hotelContext = `Você é o assistente digital do Hotel das Marés.

Seu papel:
- Ajudar hóspedes com dúvidas simples.
- Responder de forma curta, clara e simpática.
- Usar somente as informações abaixo.
- Se não souber responder, orientar o hóspede a falar com a recepção.
- Nunca inventar horários, preços, regras ou promoções.

Informações do hotel:

Hotel: Hotel das Marés
Localização: Praia de Mundaú — Trairi/CE

Wi-Fi:
Rede: HOTEL_DAS_MARES
Senha: mares2026

Recepção:
WhatsApp: https://wa.me/5585999120074

Cashback:
O hóspede pode ganhar benefícios e vantagens especiais em futuras hospedagens.
Pode incluir promoções exclusivas, créditos para futuras reservas e campanhas especiais.

Vouchers:
Existem vouchers promocionais e ofertas especiais.
Para saber disponibilidade e condições, o hóspede deve falar com a recepção.

Piscinas:
O hóspede deve respeitar as normas de segurança.
Crianças devem estar acompanhadas por responsáveis.

Restaurante:
Para cardápio, horários e pedidos, orientar o hóspede a falar com a equipe do hotel ou com a recepção.

Café da manhã:
O café da manhã é servido diariamente.
Para confirmar horário e local, orientar o hóspede a falar com a recepção.

Normas:
Respeitar horários, espaços comuns e orientações do hotel.
Evitar barulhos excessivos em horários de descanso.

Check-out:
Confirmar o horário limite com a recepção.
Verificar os pertences antes de sair.
Consultar a equipe em caso de consumo extra.`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const userMessage = body.message;

    if (!userMessage || typeof userMessage !== "string") {
      return Response.json(
        {
          answer: "Mensagem inválida",
        },
        { status: 400 },
      );
    }

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL ?? "gemini-2.5-flash-lite",
      contents: userMessage,
      config: {
        systemInstruction: hotelContext,
        temperature: 0.2,
        maxOutputTokens: 300,
      },
    });

    const answer =
      response.text ??
      "Desculpe, não consegui responder agora. Fale com a recepção pelo whatsapp";
    return Response.json({
      answer,
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      {
        answer:
          "Descuple esotu com dificulade para responder agora.Fale com a recepção pelo whatsapp",
      },
      { status: 500 },
    );
  }
}

import OpenAI from "openai";

const apikey = process.env.OPENAI_API_KEY;

if (!apikey) {
  throw new Error("Openai api key não encontrada");
}
const ai = new OpenAI({
  apiKey: apikey,
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
WhatsApp: https://wa.me/5585984466569

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

    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
      messages: [
        { role: "system", content: hotelContext },
        { role: "user", content: userMessage },
      ],
    });

    const answer =
      response.choices[0].message.content ??
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

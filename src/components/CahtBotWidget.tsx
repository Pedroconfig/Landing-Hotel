"use client";

import { useRef, useState, type FormEvent } from "react";

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Olá! Sou o assistente digital do Hotel das Marés. Como posso ajudar?",
    sender: "bot",
  },
];

const quickQuestions = [
  "Qual a senha do Wi-Fi?",
  "Falar com a recepção",
  "Como funciona o cashback?",
  "Informações sobre check-out",
];

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const nextMessageId = useRef(initialMessages.length + 1);

  function createMessage(text: string, sender: "bot" | "user"): Message {
    const message: Message = {
      id: nextMessageId.current,
      text,
      sender,
    };

    nextMessageId.current += 1;

    return message;
  }

  async function sendMessage(text: string) {
    const trimmedText = text.trim();

    if (!trimmedText || isLoading) return;

    const userMessage = createMessage(trimmedText, "user");

    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedText,
        }),
      });

      const data = await response.json();

      const botMessage = createMessage(data.answer, "bot");

      setMessages((currentMessages) => [...currentMessages, botMessage]);
    } catch {
      const errorMessage = createMessage(
        "Desculpe, não consegui responder agora. Fale com a recepção pelo WhatsApp.",
        "bot",
      );

      setMessages((currentMessages) => [...currentMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    sendMessage(inputValue);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#009CDE] text-2xl text-white shadow-lg transition hover:scale-105 hover:bg-sky-600"
        aria-label={isOpen ? "Fechar chatbot" : "Abrir chatbot"}
      >
        💬
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[520px] w-[340px] max-w-[calc(100vw-40px)] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
          <header className="bg-[#009CDE] px-5 py-4 text-white">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="font-bold">Assistente Hotel das Marés</h2>
                <p className="text-sm text-white/80">Atendimento com IA</p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-white/15 px-3 py-1 text-sm transition hover:bg-white/25"
                aria-label="Fechar chatbot"
              >
                ✕
              </button>
            </div>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4">
            {messages.map((message) => {
              const isUserMessage = message.sender === "user";

              return (
                <div
                  key={message.id}
                  className={`flex ${
                    isUserMessage ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      isUserMessage
                        ? "bg-[#009CDE] text-white"
                        : "bg-white text-slate-700 shadow-sm"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
                  Digitando...
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-slate-200 bg-white p-4">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {quickQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => sendMessage(question)}
                  disabled={isLoading}
                  className="shrink-0 rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {question}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Digite sua dúvida..."
                className="min-w-0 flex-1 rounded-full border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#009CDE]"
              />

              <button
                type="submit"
                disabled={isLoading}
                className="rounded-full bg-[#F7941D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { LoaderCircle, MessageCircle, Send, Sparkles, X } from "lucide-react";

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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nextMessageId = useRef(initialMessages.length + 1);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  function createMessage(text: string, sender: "bot" | "user"): Message {
    const message = { id: nextMessageId.current, text, sender };
    nextMessageId.current += 1;
    return message;
  }

  async function sendMessage(text: string) {
    const trimmedText = text.trim();
    if (!trimmedText || isLoading) return;

    setMessages((current) => [...current, createMessage(trimmedText, "user")]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmedText }),
      });
      const data = await response.json();
      setMessages((current) => [...current, createMessage(data.answer, "bot")]);
    } catch {
      setMessages((current) => [
        ...current,
        createMessage(
          "Desculpe, não consegui responder agora. Fale com a recepção pelo WhatsApp.",
          "bot",
        ),
      ]);
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
      {isOpen && (
        <div
          role="dialog"
          aria-label="Assistente virtual do Hotel das Marés"
          className="chat-panel-position fixed inset-x-3 z-50 flex h-[min(620px,calc(100dvh-11rem))] flex-col overflow-hidden rounded-[1.6rem] border border-[#0b536a]/10 bg-white shadow-[0_28px_90px_rgba(3,47,64,.28)] sm:inset-x-auto sm:right-5 sm:h-[520px] sm:w-[390px] sm:rounded-[2rem]"
        >
          <header className="relative overflow-hidden bg-[#064b61] px-5 py-5 text-white">
            <div className="absolute -right-9 -top-12 h-32 w-32 rounded-full border-[22px] border-white/[0.05]" />
            <div className="relative flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f7941d] shadow-lg shadow-slate-950/15">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h2 className="font-sans text-sm font-black">Assistente das Marés</h2>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs text-white/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Pronto para ajudar
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 transition hover:bg-white/20"
                aria-label="Fechar chatbot"
              >
                <X size={17} />
              </button>
            </div>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-[#f5f2eb] p-4">
            {messages.map((message) => {
              const isUserMessage = message.sender === "user";
              return (
                <div key={message.id} className={`flex ${isUserMessage ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[86%] px-4 py-3 text-sm leading-6 ${
                      isUserMessage
                        ? "rounded-[1.25rem] rounded-br-md bg-[#08708e] text-white"
                        : "rounded-[1.25rem] rounded-bl-md border border-[#0b536a]/8 bg-white text-[#3f626c] shadow-sm"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              );
            })}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-[1.25rem] rounded-bl-md bg-white px-4 py-3 text-sm text-[#668089] shadow-sm">
                  <LoaderCircle size={15} className="animate-spin text-[#08708e]" />
                  Pensando...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-[#0b536a]/8 bg-white p-4">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
              {quickQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => sendMessage(question)}
                  disabled={isLoading}
                  className="shrink-0 rounded-full border border-[#0b536a]/10 bg-[#eef6f6] px-3 py-2 text-xs font-bold text-[#41636c] transition hover:border-[#08708e]/25 hover:text-[#08708e] disabled:opacity-50"
                >
                  {question}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-full border border-[#0b536a]/15 bg-[#faf9f6] p-1.5 pl-4 focus-within:border-[#08708e]/50 focus-within:ring-4 focus-within:ring-[#08708e]/8">
              <input
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Digite sua dúvida..."
                aria-label="Sua dúvida"
                className="min-w-0 flex-1 bg-transparent py-2 text-sm text-[#234d59] outline-none placeholder:text-[#81969c]"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7941d] text-white transition hover:bg-[#ff9f2d] disabled:cursor-not-allowed disabled:opacity-45"
                aria-label="Enviar mensagem"
              >
                <Send size={17} />
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="chat-trigger-position fixed right-4 z-50 flex h-13 w-13 items-center justify-center gap-2 rounded-full bg-[#f7941d] text-sm font-black text-white shadow-[0_14px_38px_rgba(247,148,29,.36)] transition active:scale-95 hover:bg-[#ff9f2d] sm:right-5 sm:h-15 sm:w-auto sm:px-5 sm:hover:-translate-y-0.5"
        aria-label={isOpen ? "Fechar chatbot" : "Abrir chatbot"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
        <span className="hidden sm:inline">{isOpen ? "Fechar" : "Precisa de ajuda?"}</span>
      </button>
    </>
  );
}

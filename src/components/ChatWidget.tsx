"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { sendBotMessage } from "../lib/botApi";

export default function ChatWidget() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const tooltipTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const alreadyShown = localStorage.getItem("chatTooltipShown");

      if (window.scrollY > 100 && alreadyShown !== "true") {
        setShowTooltip(true);
        localStorage.setItem("chatTooltipShown", "true");

        if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current);
        tooltipTimeoutRef.current = setTimeout(() => {
          setShowTooltip(false);
        }, 5000);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setLoading(true);

    try {
      const res = await sendBotMessage(input, "frontend-user");
      setMessages((prev) => [...prev, { role: "bot", text: res.reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "❌ Serwer niedostępny" },
      ]);
    } finally {
      setLoading(false);
      setInput("");
      inputRef.current?.focus();
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="px-3 py-1 text-sm rounded-full shadow-md bg-[var(--brand-green)] text-[var(--brand-beige)]"
            role="status"
          >
            💬 Masz pytanie? Napisz do mnie!
          </motion.div>
        )}
        <motion.button
          type="button"
          aria-label={isOpen ? "Zamknij czat" : "Otwórz czat"}
          aria-expanded={isOpen}
          aria-controls="chat-panel"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative w-14 h-14 rounded-full text-2xl flex items-center justify-center shadow-lg
                     bg-[var(--brand-green)] text-[var(--brand-beige)]
                     border border-[var(--brand-beige)]/30
                     hover:bg-[var(--brand-rose)] focus:outline-none
                     focus-visible:ring-2 focus-visible:ring-[var(--brand-rose)]/60
                     transition"
        >
          💬
          {!isOpen && (
            <span
              className="absolute top-1 right-1 w-3 h-3 bg-red-500 
                        rounded-full border-2 border-[var(--brand-beige)]"
              aria-hidden
            />
          )}
        </motion.button>
      </div>

      {isOpen && (
        <div
          id="chat-panel"
          className="fixed bottom-24 right-6 w-80 h-[500px] z-50 overflow-hidden
                     rounded-lg border shadow-xl
                     bg-[var(--background)] text-[var(--foreground)]
                     border-[var(--brand-green)]/15"
          role="dialog"
          aria-modal="true"
          aria-label="Chat z Vitą"
        >
          <div
            className="p-3 font-semibold text-[var(--brand-beige)]
                          bg-gradient-to-r from-[var(--brand-rose)]/80 to-[var(--brand-green)]/70
                          flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-[var(--brand-beige)]/25 grid place-items-center">
              🎤
            </div>
            Chat z Vitą
          </div>

          <div
            className="flex-1 overflow-y-auto p-4 space-y-4
                          bg-[var(--brand-beige)]/30 dark:bg-[var(--brand-beige)]/10"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end gap-2 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "bot" && (
                  <div
                    className="w-8 h-8 rounded-full text-[var(--brand-beige)]
                                  bg-gradient-to-r from-[var(--brand-rose)] to-[var(--brand-green)]
                                  grid place-items-center text-sm font-bold"
                  >
                    V
                  </div>
                )}

                <div
                  className={`px-3 py-2 rounded-lg max-w-[70%] text-sm leading-relaxed
                  ${
                    msg.role === "user"
                      ? "bg-[var(--brand-rose)] text-[var(--brand-beige)] rounded-br-none"
                      : "bg-[var(--brand-beige)] text-[var(--brand-green)] rounded-bl-none border border-[var(--brand-green)]/15"
                  }`}
                >
                  {msg.text}
                </div>

                {msg.role === "user" && (
                  <div
                    className="w-8 h-8 rounded-full grid place-items-center text-sm font-bold
                                  bg-[var(--brand-rose)]/85 text-[var(--brand-beige)]"
                  >
                    U
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="text-sm italic text-[var(--brand-sage)]">
                Piszę odpowiedź...
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div
            className="flex items-center gap-2 border-t p-2
                          bg-[var(--background)] border-[var(--brand-green)]/15"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 px-3 py-2 text-sm rounded-lg outline-none
                         bg-[var(--brand-beige)] text-[var(--brand-green)]
                         placeholder-[var(--brand-sage)]/70
                         border border-[var(--brand-green)]/15
                         focus:border-[var(--brand-rose)]/50 focus:ring-2 focus:ring-[var(--brand-rose)]/40"
              placeholder="Napisz wiadomość..."
            />
            <button
              type="button"
              onClick={handleSend}
              className="px-4 h-10 rounded-lg font-medium
                         bg-[var(--brand-green)] text-[var(--brand-beige)]
                         hover:bg-[var(--brand-rose)] transition
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-rose)]/60"
              title="Wyślij"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}

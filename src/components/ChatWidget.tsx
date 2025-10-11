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

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="bg-black text-white text-sm px-3 py-1 rounded-full shadow-md"
          >
            💬 Masz pytanie? Napisz do mnie!
          </motion.div>
        )}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative w-14 h-14 rounded-full border border-(--brand-beige) bg-(--brand-green) text-white text-2xl flex items-center justify-center shadow-lg hover:bg-(--brand-rose) transition duration-300"
        >
          💬
          {/* Notification dot */}
          {!isOpen && (
            <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
          )}
        </motion.button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-[500px] bg-white shadow-xl rounded-lg border border-gray-200 flex flex-col overflow-hidden z-50">
          {/* Header */}
          <div className="p-3 font-semibold bg-gradient-to-r from-pink-300 to-green-300 text-white flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
              🎤
            </div>
            Chat z Vitą
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-(--brand-beige)/30">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end gap-2 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "bot" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-300 to-green-300 flex items-center justify-center text-white font-bold text-sm">
                    V
                  </div>
                )}
                <div
                  className={`px-3 py-2 rounded-lg max-w-[70%] text-sm ${
                    msg.role === "user"
                      ? "bg-(--brand-rose) text-white rounded-br-none"
                      : "bg-white text-(--brand-green) border border-(--brand-green)/20 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-(--brand-rose)/80 flex items-center justify-center text-white font-bold text-sm">
                    U
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="text-sm text-gray-400 italic">
                Piszę odpowiedź...
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="flex border-t p-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 px-3 py-2 outline-none text-sm border border-gray-200 rounded-lg"
              placeholder="Napisz wiadomość..."
            />
            <button
              onClick={handleSend}
              className="ml-2 px-4 bg-(--brand-green) text-white rounded-lg hover:bg-(--brand-rose) transition"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}

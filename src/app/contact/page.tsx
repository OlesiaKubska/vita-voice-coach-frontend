"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6 text-center"
      >
        Kontakt
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg text-center mb-10"
      >
        Masz pytania lub chcesz umówić się na lekcję? Skontaktuj się ze mną! 💌
      </motion.p>

      <div className="space-y-6">
        {[
          { title: "📧 Email", value: "email@gmail.com" },
          { title: "📱 Telefon", value: "+48 123 456 789" },
          { title: "📍 Lokalizacja", value: "Białystok, Polska" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.value}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <a
          href="mailto:twojemail@example.com"
          className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
        >
          Napisz do mnie
        </a>
      </motion.div>
    </section>
  );
}

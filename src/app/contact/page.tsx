"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6 text-center text-(--brand-green)"
      >
        Kontakt
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg text-center mb-10 text-(--brand-sage)"
      >
        Masz pytania lub chcesz umówić się na lekcję? Skontaktuj się ze mną! 💌
      </motion.p>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="/images/contact.jpg"
            alt="Vita Kociubajło – kontakt"
            fill
            className="object-cover"
          />
        </motion.div>

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
              className="bg-(--brand-beige) shadow-md rounded-lg p-6 border-l-4 border-(--brand-green)"
            >
              <h2 className="text-2xl font-semibold mb-2 text-(--brand-green)">
                {item.title}
              </h2>
              <p className="text-(--brand-sage)">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <a
          href="mailto:email@gmail.com"
          className="px-6 py-3 bg-(--brand-red) text-white font-semibold rounded-md shadow hover:bg-(--brand-green) transition"
        >
          Napisz do mnie
        </a>
      </motion.div>
    </section>
  );
}

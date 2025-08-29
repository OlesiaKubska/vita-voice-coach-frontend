"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-brand-beige">
      <div className="max-w-6xl mx-auto px-6 md:grid md:grid-cols-2 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative w-56 h-[360px] sm:w-64 sm:h-[420px] md:w-80 md:h-[480px] lg:w-[24rem] lg:h-[600px] mx-auto md:mx-0"
        >
          <Image
            src="/images/vita-about.jpg"
            alt="Vita Kociubajło – trenerka głosu"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="rounded-lg shadow-lg object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 md:mt-0"
        >
          <h2 className="text-3xl font-bold mb-4 text-brand-green">
            O mnie 🎶
          </h2>
          <p className="text-lg text-brand-sage mb-6 leading-relaxed">
            Nazywam się <strong>Vita Kociubajło</strong>. Jestem trenerką głosu,
            dyrygentką i aktywistką muzyczną. Od lat pomagam ludziom rozwijać
            swoje umiejętności wokalne, pewność siebie i czerpać radość ze
            śpiewu. Pracowałam z chórami, młodzieżą i dorosłymi w Polsce i za
            granicą.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-(--brand-green)">
            Specjalizacje:
          </h3>
          <ul className="grid grid-cols-2 gap-3 text-(--brand-green) mb-6">
            <li>🎤 Nauka śpiewu</li>
            <li>🎶 Dyrygentura</li>
            <li>💎 Rozwój osobisty</li>
            <li>🗣 Wystąpienia publiczne</li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="px-6 py-3 bg-(--brand-green) text-white rounded-md shadow hover:bg-(--brand-sage) transition"
            >
              Poznaj moje usługi
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-(--brand-red) text-(--brand-red) rounded-md hover:bg-(--brand-red)/10 transition"
            >
              Umów się na konsultację
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

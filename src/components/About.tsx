"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-(--brand-rose)/10">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-10 text-center"
      >
        O mnie
      </motion.h1>
      <div className="max-w-6xl mx-auto px-6 md:grid md:grid-cols-2 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative w-full h-[500px] md:h-full max-h-[600px] mx-auto md:mx-0"
        >
          <Image
            src="/images/about/vita-about-mobile.jpg"
            alt="Vita Kociubajło – trenerka głosu"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg shadow-lg object-cover object-top"
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
          <p className="text-lg text-brand-sage mb-6 leading-relaxed">
            Nazywam się{" "}
            <strong className="text-(--brand-rose)">Vita Kociubajło</strong>.
            Jestem trenerką głosu, dyrygentką i aktywistką muzyczną. Od lat
            pomagam ludziom rozwijać swoje umiejętności wokalne, pewność siebie
            i czerpać radość ze śpiewu. Pracowałam z chórami, młodzieżą i
            dorosłymi w Polsce i za granicą.
          </p>
          <p className="text-lg text-brand-sage mb-6 leading-relaxed">
            Wierzę, że każdy ma w sobie unikalny głos, który warto odkryć i
            pielęgnować. Moim celem jest stworzenie bezpiecznej i wspierającej
            przestrzeni, gdzie każdy może rozwijać swoje umiejętności wokalne i
            osobiste.
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/services">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-6 py-3 bg-(--brand-rose) text-(--brand-beige) font-medium rounded-md shadow
               hover:bg-(--brand-beige) hover:border hover:border-(--brand-rose) hover:text-(--brand-rose) transition-colors duration-300 text-center"
              >
                Poznaj moją ofertę
              </motion.div>
            </Link>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-6 py-3 bg-(--brand-beige) border border-(--brand-rose) text-(--brand-rose) font-medium rounded-md
               hover:bg-(--brand-rose) hover:text-(--brand-beige) transition-colors duration-300 text-center"
              >
                Umów się na konsultację
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

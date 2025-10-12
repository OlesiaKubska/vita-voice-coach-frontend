"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.2, ease: easeOut },
  }),
};

export default function ContactInfo() {
  return (
    <section className=" mx-auto py-20 px-6 bg-(--brand-rose)/10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-10 text-center text-(--brand-green)"
      >
        Kontakt
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-lg text-center mb-10 text-(--brand-sage)"
      >
        Masz pytania lub chcesz umówić się na lekcję? Skontaktuj się ze mną! 💌
      </motion.p>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[420px] md:h-[500px] lg:h-[560px] 
             rounded-2xl overflow-hidden shadow-xl 
             bg-(--brand-beige) dark:bg-(--brand-green)/20"
        >
          <Image
            src="/images/about/contact.jpg"
            alt="Vita Kociubajło – kontakt"
            fill
            sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
            className="object-cover md:object-cover lg:object-top
               rounded-2xl transition-transform duration-700 hover:scale-105"
            priority
          />
        </motion.div>

        <div className="space-y-6">
          {[
            { title: "📧 Email", value: "vkociubajlo@gmail.com" },
            { title: "📱 Telefon", value: "+48 517 522 820" },
            {
              title: "📍 Lokalizacja",
              value: "Białystok, Polska",
              link: "https://maps.app.goo.gl/m6YoKnzVkgY19QpL9",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              className="bg-(--brand-beige) shadow-md rounded-lg p-6 border-l-4 border-(--brand-rose) 
                         hover:shadow-xl hover:-translate-y-1 transition transform"
            >
              <h2 className="text-2xl font-semibold mb-2 text-(--brand-green)">
                {item.title}
              </h2>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--brand-sage) hover:text-(--brand-rose) underline transition-colors duration-300"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-(--brand-sage)">{item.value}</p>
              )}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              href="mailto:vkociubajlo@gmail.com"
              aria-label="Wyślij email do Vita Kociubajło"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="px-6 py-3 bg-(--brand-rose) text-(--brand-beige) font-medium rounded-md shadow 
                     hover:bg-(--brand-beige) hover:border hover:border-(--brand-rose) hover:text-(--brand-rose) 
                     transition-colors duration-300 text-center"
            >
              Napisz do mnie
            </motion.a>

            <motion.a
              href="tel:+48517522820"
              aria-label="Zadzwoń teraz do Vita Kociubajło"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="px-6 py-3 bg-(--brand-beige) border border-(--brand-rose) text-(--brand-rose) font-medium rounded-md 
                     hover:bg-(--brand-rose) hover:text-(--brand-beige) transition-colors duration-300 text-center"
            >
              Zadzwoń teraz
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

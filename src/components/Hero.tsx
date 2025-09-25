"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero/group-hero.webp')" }}
      />
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left max-w-xl md:mr-12"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="inline-block mb-4 px-4 py-1 text-sm bg-(--brand-rose) text-(--brand-beige) rounded-full"
          >
            Vita – kobieta wielu wymiarów
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight text-(--brand-green)"
          >
            Trenerka Głosu i Pewności Siebie
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-base sm:text-lg md:text-xl mb-6 text-(--brand-green)"
          >
            Pomagam kobietom i młodzieży rozwijać głos, pewność siebie i
            umiejętności wystąpień publicznych – w śpiewie i w życiu codziennym.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0"
          >
            {/* Primary button */}
            <Link href="/services">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-6 py-3 bg-(--brand-rose) text-(--brand-beige) font-medium rounded-md shadow 
               hover:bg-(--brand-beige) hover:shadow-2xl hover:border hover:border-(--brand-rose) hover:text-(--brand-rose) transition-colors duration-300 text-center"
              >
                Moja Oferta
              </motion.div>
            </Link>

            {/* Secondary button */}
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-6 py-3 bg-(--brand-beige) border border-(--brand-rose) text-(--brand-rose) font-medium rounded-md
               hover:bg-(--brand-rose) hover:shadow-2xl hover:text-(--brand-beige) transition-colors duration-300 text-center"
              >
                Umów się na konsultację
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="relative mt-10 md:mt-0 w-48 sm:w-60 md:w-[28rem] aspect-[3/4]"
        >
          <Image
            src="/images/hero/hero2.webp"
            alt="Trenerka głosu i śpiewu"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="rounded-lg object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

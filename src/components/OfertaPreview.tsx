"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaMicrophone,
  FaHeart,
  FaComments,
  FaFemale,
  FaUserGraduate,
  FaLaptop,
  FaBuilding,
  FaMusic,
  FaArrowRight,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";

const categories = [
  { name: "Nauka śpiewu", icon: <FaMicrophone /> },
  { name: "Rozwój osobisty przez głos", icon: <FaHeart /> },
  { name: "Wystąpienia publiczne", icon: <FaComments /> },
  { name: "Warsztaty dla kobiet", icon: <FaFemale /> },
  { name: "Zajęcia dla młodzieży", icon: <FaUserGraduate /> },
  { name: "Kursy online", icon: <FaLaptop /> },
  { name: "Warsztaty dla firm", icon: <FaBuilding /> },
  { name: "Sesje nagrań i audycje", icon: <FaMusic /> },
];

export default function OfertaPreview() {
  return (
    <section className="py-20 bg-(--brand-beige)">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-(--brand-green) flex justify-center items-center gap-3 text-center"
        >
          Moja oferta <FaMicrophone className="text-(--brand-rose)" />
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="flex flex-wrap justify-center lg:justify-start gap-6"
          >
            {categories.map((category) => (
              <motion.span
                key={category.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  show: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center shadow-lg justify-center gap-2 
                            rounded-full bg-white/80 text-(--brand-green) 
                            border border-(--brand-rose) 
                            font-medium px-5 py-2 hover:bg-(--brand-rose)/20 
                            transition cursor-default w-48 hover:shadow-2xl"
              >
                {category.icon}
                {category.name}
              </motion.span>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link
                href="/services"
                className="inline-flex items-center font-medium px-6 py-3 bg-(--brand-rose) 
                            shadow-lg border border-(--brand-rose) text-(--brand-beige) rounded-md 
                            hover:bg-(--brand-beige) hover:text-(--brand-rose) hover:shadow-2xl transition-all duration-300"
              >
                Zobacz całą ofertę <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid grid-cols-2 gap-8 lg:gap-12 text-center"
          >
            {[
              {
                icon: (
                  <FaMicrophone className="text-5xl text-(--brand-rose) mx-auto mb-4" />
                ),
                number: "50+",
                label: "Uczniów",
              },
              {
                icon: (
                  <FaUsers className="text-5xl text-(--brand-rose) mx-auto mb-4" />
                ),
                number: "30+",
                label: "Warsztatów dla kobiet",
              },
              {
                icon: (
                  <FaMusic className="text-5xl text-(--brand-rose) mx-auto mb-4" />
                ),
                number: "1000+",
                label: "Godzin nagrań",
              },
              {
                icon: (
                  <FaCalendarAlt className="text-5xl text-(--brand-rose) mx-auto mb-4" />
                ),
                number: "7+",
                label: "Lat doświadczenia",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition"
              >
                {item.icon}
                <h3 className="text-3xl font-bold text-(--brand-green)">
                  {item.number}
                </h3>
                <p className="text-(--brand-sage) text-lg">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
          {/* Ліва частина */}
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
                className="inline-flex items-center justify-center gap-2 
                        rounded-full bg-white/80 text-(--brand-green) 
                        border border-(--brand-rose) 
                        font-medium px-5 py-2 cursor-default w-48
                        transition-all duration-300
                        hover:text-white 
                        hover:bg-gradient-to-r 
                        hover:from-pink-300 hover:via-green-200 hover:to-green-300
                        bg-[length:200%_200%] hover:animate-gradient-x
                        hover:shadow-[0_0_15px_rgba(244,114,182,0.5),0_0_25px_rgba(134,239,172,0.5)]"
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
                className="inline-flex items-center font-medium px-6 py-3 
                           rounded-md shadow-lg
                           bg-gradient-to-r from-pink-300 via-green-200 to-green-300 text-(--brand-green)
                           hover:text-white bg-[length:200%_200%] animate-gradient-x
                           hover:shadow-[0_0_15px_rgba(244,114,182,0.5),0_0_25px_rgba(134,239,172,0.5)]
                           transition-all duration-300"
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12 text-center"
          >
            {[
              {
                icon: (
                  <FaMicrophone className="text-3xl text-(--brand-green) hover:text-white transition-colors duration-300" />
                ),
                number: "50+",
                label: "Uczniów",
              },
              {
                icon: (
                  <FaUsers className="text-3xl text-(--brand-green) hover:text-white transition-colors duration-300" />
                ),
                number: "30+",
                label: "Warsztatów dla kobiet",
              },
              {
                icon: (
                  <FaMusic className="text-3xl text-(--brand-green) hover:text-white transition-colors duration-300" />
                ),
                number: "1000+",
                label: "Godzin nagrań",
              },
              {
                icon: (
                  <FaCalendarAlt className="text-3xl text-(--brand-green) hover:text-white transition-colors duration-300" />
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
                className="bg-white/80 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition flex flex-col items-center"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-xl 
                      bg-gradient-to-r from-pink-300 via-green-200 to-green-300 
                      bg-[length:200%_200%] animate-gradient-x shadow-md mb-4"
                >
                  {item.icon}
                </div>

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

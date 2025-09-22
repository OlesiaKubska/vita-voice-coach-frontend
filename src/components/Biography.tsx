"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaMusic,
  FaUsers,
  FaGlobeEurope,
  FaAward,
  FaTheaterMasks,
  FaBook,
  FaChalkboardTeacher,
  FaChild,
  FaStar,
} from "react-icons/fa";

const sections = [
  {
    year: "Początki",
    icon: <FaMusic />,
    text: "Vita Wirynieja Kociubajło urodziła się w Kuzniecowsku na Ukrainie. Rozpoczęła naukę muzyki w klasie fortepianu i śpiewu solowego w szkole dziecięcej. Kontynuowała edukację w Studium Chórmistrzowskim przy Duchownym Seminarium w Poczajowie.",
    image: "/images/about/vita-piano.png",
  },
  {
    year: "Pierwszy chór",
    icon: <FaUsers />,
    text: "W wieku 15 lat została dyrygentką chóru młodzieżowego w cerkwi św. Włodzimierza. Po zakończeniu Studium prowadziła chór w rodzinnym mieście, a rok później rozpoczęła swoją historię w Polsce.",
    image: "/images/about/vita-chor.png",
  },
  {
    year: "Polska i Hajnówka",
    icon: <FaGlobeEurope />,
    text: "W 1999 roku podczas Międzynarodowego Festiwalu Muzyki Cerkiewnej poznała Hajnówkę. Proboszcz zaprosił ją do prowadzenia chóru w cerkwi św. Jana Chrzciciela. Już w 2000 roku chór zdobył nagrodę na festiwalu w Hajnówce, a Vita została określona jako „chluba parafii i miasta”.",
    image: "/images/about/vita-poland.jpg",
  },
  {
    year: "Woskliknowienije",
    icon: <FaAward />,
    text: "W 2000 roku założyła młodzieżową grupę „Woskliknowienije”. Zespół koncertował w Polsce i Europie (Bułgaria, Ukraina, Białoruś, Litwa, Estonia, Serbia), zdobywając nagrody m.in. I miejsce w Bułgarii (2006) i II miejsce na Ukrainie (2004). Zespół działa do dziś.",
    image: "/images/about/vita-awards.jpg",
  },
  {
    year: "Dżereło",
    icon: <FaTheaterMasks />,
    text: "W latach 2009–2012 prowadziła zespół ludowy młodych Ukraińców Podlasia „Dżereło”, który wykonywał tradycyjne pieśni ukraińskie. Projekt był wspierany przez miasto Białystok i podkreślał znaczenie kultury słowiańskiej.",
    image: "/images/about/vita-dzereło.jpg",
  },
  {
    year: "Edukacja i rozwój",
    icon: <FaBook />,
    text: "Ukończyła Chrześcijańską Akademię Teologiczną w Warszawie (2010), studia podyplomowe w Bydgoszczy – dyrygentura chóralna i emisja głosu (2012–2014), a także marketing internetowy w Białymstoku (2017). Posługuje się polskim, rosyjskim, a także uczy się francuskiego i angielskiego.",
    image: "/images/about/vita-study.jpg",
  },
  {
    year: "Warsztaty i edukacja",
    icon: <FaChalkboardTeacher />,
    text: "Organizuje warsztaty muzyczne dla dzieci i młodzieży, ucząc śpiewu, emisji głosu i gry na instrumentach. Dzieli się wiedzą zdobytą również podczas warsztatów z Anną Koropniczenko (Hajnówka 2017, Kijów 2018).",
    image: "/images/about/vita-workshops.png",
  },
  {
    year: "Prywatnie",
    icon: <FaChild />,
    text: "Vita jest mamą dwóch synów, co sprawia, że praca z dziećmi jest jej szczególnie bliska. Łączy tradycję z nowoczesnością i nieustannie rozwija swoje umiejętności.",
    image: "/images/about/vita-family.png",
  },
  {
    year: "Dziś i jutro",
    icon: <FaStar />,
    text: "Planuje utworzyć studio chóralne z chórem chłopięcym jako jego podstawą. Ambicje podpowiadają jej kolejne ścieżki rozwoju – zarówno osobistego, jak i w pracy z młodzieżą. Vita to dyrygentka, trenerka i kobieta wielu wymiarów.",
    image: "/images/about/vita-now.jpg",
  },
];

export default function Biography() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="biography" className="py-20 bg-(--brand-beige)/40">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-(--brand-green) mb-12"
      >
        Moja historia 🎼
      </motion.h2>

      <div className="max-w-6xl mx-auto px-6 space-y-10">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row items-center"
          >
            {section.image && (
              <div className="relative w-full md:w-1/2">
                <Image
                  src={section.image}
                  alt={section.year}
                  width={800}
                  height={500}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  className="w-full h-auto object-cover rounded-lg"
                  priority
                />
              </div>
            )}

            <div className="p-6 md:w-2/3">
              <h3 className="text-2xl font-bold text-(--brand-green) mb-3">
                <span className="text-3xl text-(--brand-rose) ">
                  {section.icon}
                </span>{" "}
                {section.year}
              </h3>
              <p className="text-(--brand-green) text-lg leading-relaxed">
                {expanded === i
                  ? section.text
                  : section.text.slice(0, 160) + "..."}
              </p>
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="mt-4 text-(--brand-rose) font-medium hover:underline"
              >
                {expanded === i ? "Zwiń" : "Czytaj więcej"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

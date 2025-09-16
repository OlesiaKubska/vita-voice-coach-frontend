"use client";

import React from "react";
import ServiceCard from "../../components/ServiceCard";
import { getServices } from "../../lib/api";
import { Service } from "../../lib/types";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const [services, setServices] = React.useState<Service[]>([]);

  React.useEffect(() => {
    getServices().then(setServices);
  }, []);

  return (
    <>
      <main className="max-w-5xl mx-auto py-20 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-10 text-center"
        >
          Moja oferta 🎤
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}

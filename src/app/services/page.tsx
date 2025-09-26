"use client";

import React, { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard";
import { getServices } from "../../lib/api";
import { Service } from "../../lib/types";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedServices = await getServices();
      setServices(fetchedServices);
    }
    fetchData();
  }, []);

  return (
    <main className="py-20 bg-(--brand-rose)/5">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12 text-(--brand-green)"
      >
        Moja oferta
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <ServiceCard
              title={service.title}
              shortDescription={service.description.slice(0, 120) + "..."}
              icon={service.icon || "FaStar"}
              slug={service.slug}
              image={
                typeof service.image === "string"
                  ? service.image
                  : service.image?.url
              }
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
}

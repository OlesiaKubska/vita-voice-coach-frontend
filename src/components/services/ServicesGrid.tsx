"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { filterServices } from "@/lib/filters";
import type { Service } from "@/lib/types";

interface ServicesGridProps {
  services: Service[];
  category?: string | null;
}

export default function ServicesGrid({
  services,
  category,
}: ServicesGridProps) {
  const filteredServices = filterServices(services, { category });

  if (!filteredServices.length) {
    return (
      <p className="text-center text-[var(--brand-green)] mt-12">
        Brak usług w tej kategorii.
      </p>
    );
  }

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6
                  items-stretch auto-rows-fr"
    >
      {filteredServices.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.12 }}
          className="h-full"
        >
          <ServiceCard
            title={service.title}
            shortDescription={
              service.shortDescription ||
              (service.description
                ? service.description.slice(0, 120) + "..."
                : "")
            }
            icon={service.icon || "FaStar"}
            slug={service.slug}
            image={service.image}
          />
        </motion.div>
      ))}
    </div>
  );
}

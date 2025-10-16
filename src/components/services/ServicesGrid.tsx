"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { filterServices } from "@/lib/filters";
import { Service } from "@/lib/types";

export default function ServicesGrid({
  services,
  category,
}: {
  services: Service[];
  category?: string | null;
}) {
  const items = filterServices(services, { category });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
      {items.map((service, i) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: i * 0.12 }}
        >
          <ServiceCard
            id={service.id}
            title={service.title}
            shortDescription={
              service.shortDescription ??
              service.description.slice(0, 120) + "..."
            }
            icon={service.icon || "FaStar"}
            slug={service.slug}
            image={
              typeof service.image === "string"
                ? { url: service.image }
                : service.image
            }
          />
        </motion.div>
      ))}
    </div>
  );
}

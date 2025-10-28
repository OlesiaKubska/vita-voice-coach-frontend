"use client";

import { useEffect, useState } from "react";
import { getServices } from "@/lib/api";
import { Service } from "@/lib/types";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import ServicesFilter from "@/components/services/ServicesFilter";
import ServicesGrid from "@/components/services/ServicesGrid";

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const search = useSearchParams();
  const category = search.get("category");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const fetchedServices = await getServices();
        if (active) setServices(fetchedServices);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="py-20 bg-[var(--brand-rose)]/5">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-4 text-[var(--brand-green)]"
      >
        Moja oferta
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="max-w-3xl mx-auto px-6 text-center mb-12"
      >
        <p className="text-lg leading-relaxed text-[var(--brand-sage)]">
          Poznaj ofertę VitaVoice – warsztaty, lekcje i kursy, które pomogą Ci
          odzyskać kontakt ze swoim głosem, odwagą i autentycznością.
        </p>
        <p className="mt-2 font-semibold text-[var(--brand-rose)] uppercase">
          Twój głos jest Twoją siłą.
        </p>
      </motion.div>

      {loading && (
        <p className="text-center text-[var(--brand-green)]">
          Ładowanie usług…
        </p>
      )}

      <div className="max-w-6xl text-center mx-auto px-6">
        <ServicesFilter services={services} />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <ServicesGrid services={services} category={category} />
      </div>
    </main>
  );
}

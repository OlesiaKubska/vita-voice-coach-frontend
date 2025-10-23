"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { getTestimonials } from "@/lib/api";
import { Testimonial } from "@/lib/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    }
    load();
  }, []);

  return (
    <section className="py-20 bg-[var(--brand-beige)] overflow-hidden relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden dark:block bg-grid opacity-40"
      />
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-[var(--brand-green)] text-center"
        >
          Opinie klientów
        </motion.h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true, el: ".custom-pagination" }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12 relative"
        >
          {testimonials.map((t) => {
            const author = t.author || "Anonim";
            const initial = author.charAt(0).toUpperCase();
            const text = t.text || "Brak opinii";
            const rating = t.rating || 0;
            const raw = t.photo?.url || "";

            const photoUrl =
              raw && (raw.startsWith("http://") || raw.startsWith("https://"))
                ? raw
                : raw
                ? `${API_URL}${raw}`
                : "";

            const hasPhoto = !!photoUrl;

            return (
              <SwiperSlide key={t.id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[var(--brand-rose)]/10 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center min-h-[350px]"
                >
                  {hasPhoto ? (
                    <div className="w-20 h-20 mb-4 relative">
                      <Image
                        src={photoUrl}
                        alt={author}
                        fill
                        sizes="80px"
                        className="rounded-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-300 to-green-300 text-white font-bold text-2xl">
                      {initial}
                    </div>
                  )}

                  <p className="text-[var(--brand-green)] italic mb-4">
                    {`"${text}"`}
                  </p>

                  <h3 className="font-semibold text-[var(--brand-rose)]">
                    {author}
                  </h3>

                  <div className="mt-2 flex gap-1 justify-center">
                    {Array.from({ length: rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="custom-pagination mt-6 flex justify-center" />
      </div>
    </section>
  );
}

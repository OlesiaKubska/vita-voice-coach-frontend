"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { getTestimonials } from "@/lib/api";
import type { Testimonial } from "@/lib/types";
import { pickImageUrl } from "@/lib/utils";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTestimonials()
      .then((data) => setTestimonials(Array.isArray(data) ? data : []))
      .catch((err) => {
        console.error("Error fetching testimonials:", err);
        setTestimonials([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-[var(--brand-beige)]">
        <div className="max-w-4xl mx-auto px-6 text-center text-[var(--brand-green)]">
          Ładowanie opinii…
        </div>
      </section>
    );
  }

  if (!testimonials.length) {
    return (
      <section className="py-20 bg-[var(--brand-beige)]">
        <div className="max-w-4xl mx-auto px-6 text-center text-[var(--brand-green)]">
          Jeszcze brak opinii — wkrótce je dodamy!
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[var(--brand-beige)] overflow-hidden relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-40"
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
            const rating = Math.max(0, Math.min(5, t.rating || 0));
            const photo = pickImageUrl(t.photo ?? null, author);

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
                  {photo?.url ? (
                    <div className="w-20 h-20 mb-4 relative">
                      <Image
                        src={photo.url}
                        alt={photo.alt}
                        fill
                        sizes="80px"
                        className="rounded-full object-cover"
                        loading="lazy"
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

                  <div
                    className="mt-2 flex gap-1 justify-center"
                    aria-label={`Ocena: ${rating}/5`}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      >
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

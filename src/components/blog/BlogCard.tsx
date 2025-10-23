"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { makeAbsolute, formatDate, buildExcerpt } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  image?: string;
}

export default function BlogCard({
  title,
  excerpt,
  slug,
  date,
  image,
}: BlogCardProps) {
  const imgSrc = image ? makeAbsolute(image) : "";
  const prettyDate = formatDate(date);
  const preview = buildExcerpt(excerpt, 220);

  return (
    <div className="relative group">
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100
                        transition duration-500 blur-2xl bg-gradient-to-r from-[var(--brand-green)] 
                        via-[var(--brand-sage)] to-[var(--brand-rose)]/60 animate-pulse
                        dark:bg-[var(--brand-beige)]/5 dark:border-[var(--brand-rose)]/30"
      ></div>
      <div
        className="relative border border-[var(--brand-rose)]/20 rounded-lg p-6 shadow-md
                      bg-[var(--brand-beige)]/90 backdrop-blur-sm
                      hover:shadow-xl hover:-translate-y-1 transition"
      >
        {imgSrc && (
          <div className="relative w-full h-56 lg:h-82 mb-4">
            <Image
              src={imgSrc}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover rounded-md"
            />
          </div>
        )}

        <h2 className="text-2xl font-semibold mb-3 text-[var(--brand-green)]">
          {title}
        </h2>

        <p className="text-sm text-[var(--brand-sage)]/90 mb-3">{prettyDate}</p>

        <p className="text-[var(--brand-sage)] mb-4 line-clamp-3 leading-relaxed">
          {preview}
        </p>

        <Link
          href={slug ? `/blog/${slug}` : "#"}
          className="inline-flex items-center text-[var(--brand-rose)] font-medium hover:underline"
        >
          Czytaj więcej <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}

"use client";

import { IconType } from "react-icons";
import Image from "next/image";
import * as FaIcons from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { makeAbsolute, buildExcerpt } from "@/lib/utils";
import type { Service } from "@/lib/types";

type ServiceCardProps = Pick<
  Service,
  "id" | "title" | "shortDescription" | "slug" | "icon" | "image"
>;

export default function ServiceCard({
  title,
  shortDescription,
  icon,
  slug,
  image,
}: ServiceCardProps) {
  const Icon: IconType =
    (icon && FaIcons[icon as keyof typeof FaIcons]) || FaIcons.FaStar;

  const imgSrc = image?.url ? makeAbsolute(image.url) : undefined;
  const preview = buildExcerpt(shortDescription, 200);

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
          <div className="relative w-full h-48 mb-4">
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

        <div className="flex items-center gap-3 mb-4">
          <Icon className="text-3xl text-[var(--brand-rose)]" />
          <h3 className="text-xl font-semibold text-[var(--brand-green)]">
            {title}
          </h3>
        </div>

        <p className="text-[var(--brand-sage)] mb-4 line-clamp-3 leading-relaxed">
          {preview}
        </p>

        <Link
          href={`/services/${slug}`}
          className="inline-flex items-center text-[var(--brand-rose)] font-medium hover:underline"
          aria-label={`Dowiedz się więcej: ${title}`}
        >
          Dowiedz się więcej <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}

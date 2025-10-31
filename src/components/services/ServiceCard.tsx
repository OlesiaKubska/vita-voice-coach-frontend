"use client";

import { IconType } from "react-icons";
import Image from "next/image";
import * as FaIcons from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { buildExcerpt, pickImageUrl } from "@/lib/utils";
import type { Service } from "@/lib/types";

type ServiceCardProps = Pick<
  Service,
  "title" | "shortDescription" | "icon" | "image" | "slug"
>;

export default function ServiceCard({
  title,
  shortDescription,
  icon,
  slug,
  image,
}: ServiceCardProps) {
  const Icon: IconType = (FaIcons[icon as keyof typeof FaIcons] ??
    FaIcons.FaStar) as IconType;

  const hero = pickImageUrl(image, title);
  const preview = buildExcerpt(shortDescription, 200);

  return (
    <article className="group h-full flex flex-col relative">
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100
                  transition duration-500 blur-2xl bg-gradient-to-r from-[var(--brand-green)] 
                  via-[var(--brand-sage)] to-[var(--brand-rose)]/60 animate-pulse
                  dark:bg-[var(--brand-beige)]/5 dark:border-[var(--brand-rose)]/30"
      ></div>
      <div
        className="relative border border-[var(--brand-rose)]/20 rounded-lg p-6 shadow-md
                  bg-[var(--brand-beige)]/90 backdrop-blur-sm
                  hover:shadow-xl hover:-translate-y-1 transition
                  flex flex-col flex-1"
      >
        <div className="relative mb-4 rounded-md overflow-hidden aspect-[16/9]">
          {hero?.url ? (
            <Image
              src={hero.url}
              alt={hero.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[var(--brand-rose)]/10" />
          )}
        </div>

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
          className="mt-auto inline-flex items-center text-[var(--brand-rose)] font-medium hover:underline"
          aria-label={`Dowiedz się więcej: ${title}`}
        >
          Dowiedz się więcej <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </article>
  );
}

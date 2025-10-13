"use client";

import { IconType } from "react-icons";
import Image from "next/image";
import * as FaIcons from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

interface ServiceCardProps {
  id?: number;
  title: string;
  shortDescription: string;
  icon: string;
  image?: string;
  slug: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ServiceCard({
  title,
  shortDescription,
  icon,
  slug,
  image,
}: ServiceCardProps) {
  const Icon: IconType =
    FaIcons[icon as keyof typeof FaIcons] || FaIcons.FaStar;

  return (
    <div className="relative group">
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-gradient-to-r from-(--brand-green) via-(--brand-sage) to-(--brand-rose)/60 animate-pulse"></div>
      <div className="relative h-full border border-(--brand-rose)/30 rounded-lg p-6 shadow-md bg-white/80 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition transform flex flex-col justify-between">
        {image && (
          <div className="relative w-full h-48 mb-4">
            <Image
              src={`${API_URL}${image}`}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover rounded-md"
            />
          </div>
        )}
        <div className="flex items-center gap-3 mb-4">
          <Icon className="text-3xl text-(--brand-rose)" />
          <h3 className="text-xl font-semibold text-(--brand-green)">
            {title}
          </h3>
        </div>
        <p className="text-(--brand-sage) mb-4">{shortDescription}</p>
        <Link
          href={`/services/${slug}`}
          className="inline-flex items-center text-(--brand-rose) font-medium hover:underline"
        >
          Dowiedz się więcej <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}

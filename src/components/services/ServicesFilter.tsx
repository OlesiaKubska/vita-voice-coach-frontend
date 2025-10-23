"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Service } from "@/lib/types";

export default function ServicesFilter({ services }: { services: Service[] }) {
  const search = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const active = search.get("category") ?? "all";

  const categories = useMemo(() => {
    const set = new Set<string>();
    services.forEach((s) => s.category && set.add(s.category));
    return ["all", ...Array.from(set)];
  }, [services]);

  const setCategory = (cat: string) => {
    const params = new URLSearchParams(search.toString());
    if (cat === "all") params.delete("category");
    else params.set("category", cat);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`px-4 py-2 rounded-full border transition
            ${
              active === cat
                ? "bg-[var(--brand-rose)] text-[var(--brand-beige)] border-[var(--brand-rose)]"
                : "bg-[var(--brand-beige)] text-[var(--brand-rose)] border-[var(--brand-rose)]/40 hover:border-[var(--brand-rose)]"
            }`}
          aria-pressed={active === cat}
        >
          {cat === "all" ? "Wszystkie" : cat}
        </button>
      ))}
    </div>
  );
}

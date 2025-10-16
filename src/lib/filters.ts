import { Service } from "@/lib/types";

export function filterServices(
  services: Service[],
  { category }: { category?: string | null }
) {
    if (!category || category === "all") return services;
    return services.filter((s) => s.category === category);
}
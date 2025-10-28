import { Service, ServiceCategory } from "@/lib/types";

const uiToApi: Record<string, ServiceCategory> = {
  "warsztaty": "Warsztaty",
  "lekcje": "Lekcje",
  "kursy-online": "Kursy online",
  "wystapienia": "Wystąpienia",
  "rozwoj-osobisty": "Rozwój osobisty",
  "nagrania": "Nagrania",
};

export function filterServices(
  services: Service[],
  { category }: { category?: string | null }
): Service[] {
  if (!category || category.toLowerCase() === "all") return services;

  const normalizedKey = category.trim().toLowerCase();
  const normalized =
    (uiToApi[normalizedKey] ?? category) as ServiceCategory;

  return services.filter((s) => s.category === normalized);
}

import ServiceContent from "@/components/services/ServiceContent";
import { getServiceBySlug, getServices } from "@/lib/api";
import { Service } from "@/lib/types";
import { notFound } from "next/navigation";

export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  try {
    const services: Service[] = await getServices();
    return (Array.isArray(services) ? services : []).map((service) => ({
      slug: service.slug,
    }));
  } catch (error) {
    console.error("[generateStaticParams for services] failed:", error);
    return [];
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let service: Service | null = null;
  try {
    service = await getServiceBySlug(slug);
  } catch (error) {
    console.error("[ServicePage] getServiceBySlug failed:", error);
  }

  if (!service) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      <ServiceContent service={service} />
    </main>
  );
}

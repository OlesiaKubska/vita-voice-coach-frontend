import ServiceContent from "@/components/services/ServiceContent";
import { getServices } from "../../../lib/api";
import { Service } from "../../../lib/types";

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const services: Service[] = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const services: Service[] = await getServices();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <div className="text-center py-20">Service not found</div>;
  }

  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      <ServiceContent service={service} />
    </main>
  );
}

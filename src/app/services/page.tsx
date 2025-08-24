import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard";
import { getServices } from "../../lib/api";
import { Service } from "../../lib/types";

export default async function ServicesPage() {
  const services: Service[] = await getServices();

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-10 text-center">Moje Usługi</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

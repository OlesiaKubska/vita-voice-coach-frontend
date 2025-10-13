import Hero from "../components/Hero";
import About from "@/components/about/About";
import OfertaPreview from "../components/services/OfertaPreview";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactInfo from "@/components/contact/ContactInfo";

export default function Home() {
  return (
    <>
      <Hero />
      <OfertaPreview />
      <About />
      <TestimonialsSection />
      <ContactInfo />
    </>
  );
}

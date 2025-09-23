import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../app/contact/page";
import OfertaPreview from "../components/OfertaPreview";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <OfertaPreview />
      <About />
      <TestimonialsSection />
      <Contact />
    </>
  );
}

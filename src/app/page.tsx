import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../app/services/page";
import Contact from "../app/contact/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
}

import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Service";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <ContactCTA/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

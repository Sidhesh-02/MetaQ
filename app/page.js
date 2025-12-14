import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Service";
import Partner from "@/components/Partner";


export default function Home() {
  
  return (
    <>
      <Hero/>
      <Services/>
      <Portfolio/>
      <Pricing/>
      <Partner/>
      <About/>
      <Footer/>
    </>
  );
}

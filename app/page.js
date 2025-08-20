import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Service";
import LovedBy from "@/components/SliderAnimation";


export default function Home() {
  
  return (
    <>
      {/* <div className="relative max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent dark:via-green-400/40" /> */}
      <Hero/>
      {/* <LovedBy/> */}
      <Services/>
      <Portfolio/>
      <Pricing/>
      <About/>
      <Footer/>
    </>
  );
}

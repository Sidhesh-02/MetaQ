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
      <Hero/>
      <div className="relative max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent dark:via-green-400/40" />
      <LovedBy/>
      <div className="relative max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent dark:via-green-400/40" />
      <Services/>
      <div className="relative max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent dark:via-green-400/40" />
      <Portfolio/>
      <div className="relative max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent dark:via-green-400/40" />
      <About/>
      {/* <Testimonials/> */}
      <div className="relative max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent dark:via-green-400/40" />
      <Pricing/>
      <Footer/>
    </>
  );
}

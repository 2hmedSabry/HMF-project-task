import Header from "@/components/layout/header/Header";
import About from "@/components/sections/about/About";
import HeroSection from "@/components/sections/hero/HeroSection";
import OurServices from "@/components/sections/ourServices/OurServices";

export default function Home() {
  return (
    <>
      <HeroSection>
        <Header />
      </HeroSection>
      <About/> 
      <OurServices/>
    </>
  );
}

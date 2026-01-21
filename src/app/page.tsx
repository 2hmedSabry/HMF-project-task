import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import About from "@/components/sections/about/About";
import HeroSection from "@/components/sections/hero/HeroSection";
import OurPartners from "@/components/sections/ourPartners/OurPartners";
import OurProjects from "@/components/sections/ourProjects/OurProjects";
import OurServices from "@/components/sections/ourServices/OurServices";
import MediaSection from "@/components/sections/media/MediaSection";

export default function Home() {
  return (
    <>
      <HeroSection>
        <Header />
      </HeroSection>
      <About/> 
      <OurServices/>
      <OurProjects/>
      <MediaSection/>
      <OurPartners/>
      <Footer />
    </>
  );
}

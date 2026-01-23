import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header/Header";
import About from "@/components/sections/About";
import HeroSection from "@/components/sections/HeroSection";
import OurPartners from "@/components/sections/OurPartners";
import OurProjects from "@/components/sections/OurProjects";
import OurServices from "@/components/sections/OurServices";
import MediaSection from "@/components/sections/MediaSection";

export default function Home() {
  return (
    <>
      <HeroSection>
        <Header />
      </HeroSection>
      <About />
      <OurServices />
      <OurProjects />
      <MediaSection />
      <OurPartners />
      <Footer />
    </>
  );
}

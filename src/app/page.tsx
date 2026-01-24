import {
  About,
  HeroSection,
  MediaSection,
  OurPartners,
  OurProjects,
  OurServices
} from "@/sections";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";

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

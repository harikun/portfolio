import Navbar from "../components/NavBar";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PorfolioSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <BlogSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default HomePage;

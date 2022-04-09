import Navbar from "../components/NavBar";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PorfolioSection";
import ClientsSection from "../components/ClientsSection";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ClientsSection />
    </>
  );
}

export default HomePage;

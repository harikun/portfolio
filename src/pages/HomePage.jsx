import Navbar from "../components/NavBar";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PorfolioSection";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
    </>
  );
}

export default HomePage;

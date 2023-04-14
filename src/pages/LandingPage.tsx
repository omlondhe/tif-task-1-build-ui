import About from "../components/About";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import "../styles/pages/LandingPage.css";

function LandingPage() {
  return (
    <main className="landingPage" aria-label="Landing page.">
      <Hero />
      <About />
      <Carousel />
      <Footer />
    </main>
  );
}

export default LandingPage;

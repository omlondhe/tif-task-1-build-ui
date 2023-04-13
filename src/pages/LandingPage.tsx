import About from "../components/About";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import "../styles/pages/LandingPage.css";

function LandingPage() {
  return (
    <div className="landingPage">
      <Hero />
      <About />
      <Carousel />
      <Footer />
    </div>
  );
}

export default LandingPage;

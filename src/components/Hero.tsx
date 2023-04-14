import { Img, Text } from "@chakra-ui/react";
import "../styles/components/Hero.css";
import logoTopDesktop from "../assets/images/desktop/logo-top-desktop.png";
import pizzaImageDesktop from "../assets/images/desktop/pizza-image-desktop.png";
import pizzaImageMobile from "../assets/images/mobile/pizza-image-mobile.png";
import vectorImageDesktop from "../assets/images/desktop/vector-image-desktop.png";
import vectorImageMobile from "../assets/images/mobile/vector-image-mobile.png";

function Hero() {
  return (
    <header className="hero" aria-label="Header of landing page.">
      {/* Hero left */}
      <section
        className="hero__data"
        aria-label="Logo, title and sub-heading section of website."
      >
        <div className="hero__data__image">
          <img src={logoTopDesktop} alt="Logo of the website" />
        </div>
        {/* Chakra UI Text */}
        <Text
          className="hero__data__text__heading"
          aria-label="Tag line of website."
        >
          Discover the
          <br />
          <span className="hero__data__text__heading__span">Best</span> Food and
          Drinks
        </Text>
        <Text
          className="hero__data__text__subheading"
          aria-label="Short description of the page."
        >
          Naturally made Healthcare Products for the better care & support of
          your body.
        </Text>
        <button
          className="hero__data__explore__now__button"
          aria-label="Explore now button."
        >
          Explore Now!
        </button>
      </section>
      {/* Hero right */}
      <section
        className="hero__image__section"
        aria-label="Image section of header."
      >
        <div className="hero__image__section__image">
          <img className="desktop" src={pizzaImageDesktop} alt="Pizza image" />
          <img className="mobile" src={pizzaImageMobile} alt="Pizza image" />
        </div>
        <div className="hero__image__section__vector">
          <img
            className="desktop"
            src={vectorImageDesktop}
            alt="Svg design"
            style={{ transform: "rotate(-0.05deg)" }}
          />
          <img className="mobile" src={vectorImageMobile} alt="Svg design" />
        </div>
        <button
          className="hero__image__section__get__in__touch__button"
          aria-label="Get in touch button."
        >
          Get In Touch
        </button>
      </section>
    </header>
  );
}

export default Hero;

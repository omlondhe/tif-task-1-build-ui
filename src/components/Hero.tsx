import { Img, Text } from "@chakra-ui/react";
import "../styles/components/Hero.css";
import logoTopDesktop from "../assets/images/desktop/logo-top-desktop.png";
import pizzaImageDesktop from "../assets/images/desktop/pizza-image-desktop.png";
import pizzaImageMobile from "../assets/images/mobile/pizza-image-mobile.png";
import vectorImageDesktop from "../assets/images/desktop/vector-image-desktop.png";
import vectorImageMobile from "../assets/images/mobile/vector-image-mobile.png";

function Hero() {
  return (
    <header className="hero">
      {/* Hero left */}
      <section className="hero__left">
        <div className="hero__left__image">
          <img src={logoTopDesktop} alt="Logo of the website" />
        </div>
        {/* Chakra UI Text */}
        <Text className="hero__left__text__heading">
          Discover the
          <br />
          <span className="hero__left__text__heading__span">Best</span> Food and
          Drinks
        </Text>
        <Text className="hero__left__text__subheading">
          Naturally made Healthcare Products for the better care & support of
          your body.
        </Text>
        <button className="hero__left__explore__now__button">
          Explore Now!
        </button>
      </section>
      {/* Hero right */}
      <section className="hero__right">
        <div className="hero__right__image">
          <img className="desktop" src={pizzaImageDesktop} alt="Pizza image" />
          <img className="mobile" src={pizzaImageMobile} alt="Pizza image" />
        </div>
        <div className="hero__right__vector">
          <img className="desktop" src={vectorImageDesktop} alt="Svg design" />
          <img className="mobile" src={vectorImageMobile} alt="Svg design" />
        </div>
        <button className="hero__right__get__in__touch__button">
          Get In Touch
        </button>
      </section>
    </header>
  );
}

export default Hero;

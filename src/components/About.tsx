import "../styles/components/About.css";
import aboutImageDesktop from "../assets/images/desktop/about-image-desktop.jpeg";
import { Text } from "@chakra-ui/react";

function About() {
  return (
    <section className="about" aria-label="About section of landing page.">
      <main className="about__main" aria-label="Main content of about section.">
        <div
          className="about__main__image"
          aria-label="Image for about section."
        >
          <img src={aboutImageDesktop} alt="About placeholder image" />
        </div>
        <div className="about__main__data" aria-label="About us details.">
          <Text
            className="about__main__data__title"
            aria-aria-labelledby="aboutText"
          >
            About Us
          </Text>
          <Text className="about__main__data__description" id="aboutText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </Text>
          <button className="about__main__data__read__more__button">
            Read More
          </button>
        </div>
      </main>
    </section>
  );
}

export default About;

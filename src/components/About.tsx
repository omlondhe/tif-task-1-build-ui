import "../styles/components/About.css";
import aboutImageDesktop from "../assets/images/desktop/about-image-desktop.jpeg";
import { Text } from "@chakra-ui/react";

function About() {
  return (
    <section className="about">
      <main className="about__main">
        <div className="about__main__image">
          <img src={aboutImageDesktop} alt="About placeholder image" />
        </div>
        <div className="about__main__data">
          <Text className="about__main__data__title">About Us</Text>
          <Text className="about__main__data__description">
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

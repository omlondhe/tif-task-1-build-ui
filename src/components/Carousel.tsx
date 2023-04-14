import { useEffect, useRef, useState } from "react";
import "../styles/components/Carousel.css";
import Card from "./Card";
import CardImage1 from "../assets/images/desktop/card-image-1.jpeg";
import CardImage2 from "../assets/images/desktop/card-image-2.jpeg";
import CardImage3 from "../assets/images/desktop/card-image-3.jpeg";
import CardImage4 from "../assets/images/desktop/card-image-4.jpeg";
import CardImage5 from "../assets/images/desktop/card-image-5.jpeg";
import CardImage6 from "../assets/images/desktop/card-image-6.jpeg";
import { Text } from "@chakra-ui/react";
import Left from "@mui/icons-material/KeyboardArrowLeftRounded";
import Right from "@mui/icons-material/KeyboardArrowRightRounded";

const CardData = [
  [
    {
      image: CardImage1,
      title: `Grilled  Tomatoes at Home`,
      descriptionDesktop: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`,
      descriptionMobile: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....`,
    },
    {
      image: CardImage2,
      title: `Snacks for Travel`,
      descriptionDesktop: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`,
      descriptionMobile: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....`,
    },
    {
      image: CardImage3,
      title: `Post-workout Recipes`,
      descriptionDesktop: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`,
      descriptionMobile: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....`,
    },
  ],
  [
    {
      image: CardImage4,
      title: `How To Grill Corn`,
      descriptionDesktop: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`,
      descriptionMobile: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....`,
    },
    {
      image: CardImage5,
      title: `Crunchwrap Supreme`,
      descriptionDesktop: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`,
      descriptionMobile: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....`,
    },
    {
      image: CardImage6,
      title: `Broccoli Cheese Soup`,
      descriptionDesktop: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`,
      descriptionMobile: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....`,
    },
  ],
];

function Carousel() {
  const [page, setPage] = useState(1);

  return (
    <section className="carousel" aria-label="Carousel section of articles.">
      <Text className="carousel__title" aria-label="Latest articles section.">
        Latest Articles
      </Text>
      <section className="carousel__section" aria-label="Carousel section.">
        {CardData[page - 1].map((data) => (
          <Card
            image={data.image}
            title={data.title}
            descriptionDesktop={data.descriptionDesktop}
            descriptionMobile={data.descriptionMobile}
          />
        ))}
      </section>
      <div
        className="carousel__handler"
        aria-label="Carousel handler button with page indicator."
      >
        <span
          role="button"
          onClick={() => setPage(1)}
          aria-label="Carousel left button."
        >
          <Left
            className="carousel__handler__left"
            style={{
              borderColor: page === 1 ? "#AFAFAF" : "#424961",
              color: page === 1 ? "#AFAFAF" : "#424961",
            }}
          />
        </span>
        <div
          className="carousel__handler__label"
          aria-label="Carousel page indicator label."
        >
          {page}/2
        </div>
        <span
          role="button"
          onClick={() => setPage(2)}
          aria-label="Carousel right indicator."
        >
          <Right
            className="carousel__handler__right"
            style={{
              borderColor: page === 2 ? "#AFAFAF" : "#424961",
              color: page === 2 ? "#AFAFAF" : "#424961",
            }}
          />
        </span>
      </div>
    </section>
  );
}

export default Carousel;

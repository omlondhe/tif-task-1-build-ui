import { Text } from "@chakra-ui/react";
import "../styles/components/Card.css";
import { CardTypes } from "../utils/types/componentTypes";

function Card({
  image,
  title,
  descriptionDesktop,
  descriptionMobile,
}: CardTypes) {
  return (
    <div
      className="card"
      aria-label="Card item of carousel indicating article."
    >
      <div className="card__image" aria-label="Article image">
        <img src={image} alt={`Image for ${title}`} />
      </div>
      <Text className="card__title" aria-labelledby={`description-${title}`}>
        {title}
      </Text>
      <Text id={`description-${title}`} className="card__description__desktop">
        {descriptionDesktop}
      </Text>
      <Text className="card__description__mobile">{descriptionMobile}</Text>
      <button
        className="card__read__more__button"
        aria-label="Read more button for article."
      >
        Read More
      </button>
    </div>
  );
}

export default Card;

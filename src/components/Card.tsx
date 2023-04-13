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
    <div className="card">
      <div className="card__image">
        <img src={image} alt={`Image for ${title}`} />
      </div>
      <Text className="card__title">{title}</Text>
      <Text className="card__description__desktop">{descriptionDesktop}</Text>
      <Text className="card__description__mobile">{descriptionMobile}</Text>
      <button className="card__read__more__button">Read More</button>
    </div>
  );
}

export default Card;

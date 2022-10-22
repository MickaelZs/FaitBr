import "./index.scss";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";

function CardCarrouselHome() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="./images/testimagem.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="./images/testimagem.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="./images/testimagem.png" />
      )
    },
  ];
  return (
    <div className="">
      <Carousel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={true}
      />
    </div>
  );
}

export default CardCarrouselHome;

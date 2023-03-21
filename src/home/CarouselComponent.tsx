import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./Home.css";

interface CarouselProps {
  title: string;
  image1: string;
  image2: string;
  image3: string;
}

const CarouselComponent = ({
  title,
  image1,
  image2,
  image3,
}: CarouselProps) => {
  return (
    <Link to={`/${title.toLowerCase()}`}>
      <span className="carousel-title">{title}</span>
      <Carousel
        className="carousel-component-container"
        autoPlay={false}
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
        dynamicHeight
      >
        <img src={image1} alt="test" />
        <img src={image2} alt="test" />
        <img src={image3} alt="test" />
      </Carousel>
      <div className="carousel-text">
        <span>Learn More</span>
        <ArrowCircleRightIcon />
      </div>
    </Link>
  );
};

export default CarouselComponent;

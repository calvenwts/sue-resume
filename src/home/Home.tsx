import { Container } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CarouselComponent from "./CarouselComponent";
import "./Home.css";

const Home = () => {
  const picture1 =
    "https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SueWeb/handover/parque/12.JPG";
  const picture2 =
    "https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SueWeb/handover/parque/4.JPG";
  const picture3 =
    "https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SueWeb/handover/cantara/6.JPG";

  return (
    <Container
      sx={{ display: "flex" }}
      maxWidth="lg"
      className="content-container home-container"
    >
      <CarouselComponent
        title="Interior"
        image1={picture1}
        image2={picture2}
        image3={picture3}
      />
      <div className="divider" />
      <CarouselComponent
        title="Graphic"
        image1={
          "https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SueWeb/card/4.JPG"
        }
        image2={
          "https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SueWeb/card/5.JPG"
        }
        image3={
          "https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SueWeb/card/10.JPG"
        }
      />
      <div className="divider" />
      <CarouselComponent
        title="Photography"
        image1={
          "https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SueWeb/product/5.jpg"
        }
        image2={
          "https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SueWeb/food/28.JPG"
        }
        image3={
          "https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SueWeb/food/37.JPG"
        }
      />
    </Container>
  );
};

export default Home;

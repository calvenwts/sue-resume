import { Container } from "@mui/material";
import TileComponent from "./TileComponent";
import { motion } from "framer-motion";
import "./Tiles.css";

const PhotographyTile = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <Container
      sx={{ display: "flex" }}
      maxWidth="lg"
      className="content-container tile-container"
    >
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <TileComponent
          title="Portrait"
          image1="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/1-1.jpg"
          image2="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/1-2.jpg"
          image3="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/1-3.JPG"
          image4="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/1-4.JPG"
          image5="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/1-5.JPG"
          image6="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/1-6.JPG"
          image7="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/1-7.JPG"
          image8="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/1-8.JPG"
        />
        <TileComponent
          title="Portrait"
          image1="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/2-1.JPG"
          image2="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/2-2.JPG"
          image3="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/2-3.JPG"
          image4="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/2-4.jpg"
          image5="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/2-5.jpg"
          image6="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/2-6.JPG"
          image7="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/2-7.JPG"
          image8="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/2-8.JPG"
        />
        <TileComponent
          title="Portrait"
          image1="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/3-1.JPG"
          image2="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/3-2.JPG"
          image3="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/3-3.JPG"
          image4="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/3-4.JPG"
          image5="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/3-5.JPG"
          image6="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/3-6.JPG"
          image7="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/3-7.JPG"
          image8="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/3-8.JPG"
        />
        <TileComponent
          title="Portrait"
          image1="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/4-1.JPG"
          image2="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/4-2.JPG"
          image3="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/4-3.JPG"
          image4="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/4-4.JPG"
          image5="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/4-5.jpg"
          image6="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/4-6.JPG"
          image7="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/4-7.JPG"
          image8="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/4-8.JPG"
        />
      </motion.div>
    </Container>
  );
};

export default PhotographyTile;

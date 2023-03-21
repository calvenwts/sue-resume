import { Container } from "@mui/material";
import TileComponent from "./TileComponent";
import { motion } from "framer-motion";
import "./Tiles.css";

const EventTile = () => {
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
          title="Event"
          image1="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Event/1-1.JPG"
          image2="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Event/1-2.JPG"
          image3="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Event/1-3.JPG"
          image4="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Event/1-4.JPG"
          image5="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Event/1-5.JPG"
          image6="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Event/1-6.JPG"
          image7="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Event/1-7.JPG"
          image8="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Event/1-8.JPG"
        />
        <TileComponent
          title="Event"
          image1="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Event/2-1.JPG"
          image2="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Event/2-2.JPG"
          image3="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Event/2-3.jpg"
          image4="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Event/2-4.jpg"
          image5="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Event/2-5.JPG"
          image6="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Event/2-6.JPG"
          image7="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Event/2-7.JPG"
          image8="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Event/2-8.JPG"
        />
      </motion.div>
    </Container>
  );
};

export default EventTile;

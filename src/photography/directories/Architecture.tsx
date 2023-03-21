import { Container } from "@mui/material";
import TileComponent from "./TileComponent";
import { motion } from "framer-motion";
import "./Tiles.css";

const ArchitectureTile = () => {
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
          title="Architecture"
          image1="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/1-1.JPG"
          image2="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/1-2.JPG"
          image3="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/1-3.JPG"
          image4="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/1-4.JPG"
          image5="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/1-5.JPG"
          image6="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/1-6.jpg"
          image7="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/1-7.JPG"
          image8="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/1-8.jpg"
        />
        <TileComponent
          title="Architecture"
          image1="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/2-1.JPG"
          image2="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/2-2.JPG"
          image3="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/2-3.JPG"
          image4="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/2-4.JPG"
          image5="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/2-5.JPG"
          image6="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/2-6.JPG"
          image7="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/2-7.JPG"
          image8="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/2-8.JPG"
        />
        <TileComponent
          title="Architecture"
          image1="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/3-1.JPG"
          image2="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/3-2.JPG"
          image3="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/3-3.JPG"
          image4="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/3-4.JPG"
          image5="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/3-5.jpg"
          image6="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/3-6.jpg"
          image7="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/3-7.jpg"
          image8="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/3-8.jpg"
        />
      </motion.div>
    </Container>
  );
};

export default ArchitectureTile;

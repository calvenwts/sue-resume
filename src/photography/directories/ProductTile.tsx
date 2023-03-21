import { Container } from "@mui/material";
import TileComponent from "./TileComponent";
import { motion } from "framer-motion";
import "./Tiles.css";

const ProductTile = () => {
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
          title="Product"
          image1="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/1-1.jpg"
          image2="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/1-2.jpg"
          image3="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/1-3.jpg"
          image4="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/1-4.JPG"
          image5="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/1-5.jpg"
          image6="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/1-6.JPG"
          image7="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/1-7.jpg"
          image8="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/1-8.jpg"
        />
        <TileComponent
          title="Product"
          image1="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/2-1.JPG"
          image2="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/2-2.JPG"
          image3="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/2-3.JPG"
          image4="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/2-4.JPG"
          image5="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/2-5.JPG"
          image6="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/2-6.JPG"
          image7="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/2-7.JPG"
          image8="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/2-8.JPG"
        />
        <TileComponent
          title="Product"
          image1="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/3-1.JPG"
          image2="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/3-2.JPG"
          image3="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/3-3.JPG"
          image4="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/3-4.JPG"
          image5="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/3-5.jpg"
          image6="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/3-6.JPG"
          image7="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/3-7.jpg"
          image8="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/3-8.JPG"
        />
      </motion.div>
    </Container>
  );
};

export default ProductTile;

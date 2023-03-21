import { Container } from "@mui/material";
import "./Photography.css";
import PhotographyComponent from "./PhotographyComponent";
import { motion } from "framer-motion";

const Photography = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <Container
      sx={{ display: "flex" }}
      maxWidth="lg"
      className="content-container photography-container"
    >
      <div className="main-text">Photography</div>
      <motion.div
        className="photography-container-content"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <div className="photography-container-row">
          <PhotographyComponent
            image="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Portrait/Cover.jpg"
            route="Portrait"
            title="Portrait"
          />
          <PhotographyComponent
            image="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Event/Cover.jpg"
            route="Event"
            title="Event"
          />
          <PhotographyComponent
            image="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Furry/Cover.JPG"
            route="FurryOnes"
            title="Furry Ones"
          />
        </div>
        <div className="photography-container-row">
          <PhotographyComponent
            image="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Product/Cover.JPG"
            route="Product"
            title="Product"
          />
          <PhotographyComponent
            image="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Food/Cover.JPG"
            route="Food"
            title="Food"
          />
          <PhotographyComponent
            image="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Photography/Architecture/Cover.JPG"
            route="Architecture"
            title="Architecture"
          />
        </div>
      </motion.div>
    </Container>
  );
};

export default Photography;

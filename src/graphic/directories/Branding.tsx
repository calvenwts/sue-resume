import { Container } from "@mui/material";
import { motion } from "framer-motion";
import "../Graphic.css";

const Branding = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <Container
      sx={{ display: "flex" }}
      maxWidth="lg"
      className="content-container graphic-container"
    >
      <div className="main-text">Graphic</div>
      <motion.div
        className="graphic-content"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <div className="graphic-hero">
          <div className="graphic-hero-title">The Packaging Project</div>
          <div className="graphic-hero-showcase">
            <img
              src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/branding/2.JPG"
              alt="image1"
            />
            <div className="graphic-details">
              <img
                src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/branding/3.JPG"
                alt="image2"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/branding/4.JPG"
                alt="image3"
              />
            </div>
          </div>
          <div className="graphic-hero-showcase">
            <div className="graphic-details">
              <img
                src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/branding/6.jpg"
                alt="image6"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/branding/7.jpg"
                alt="image7"
              />
            </div>
            <img
              src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/branding/5.jpg"
              alt="image5"
            />
          </div>
          <img
            className="solo-image"
            src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/branding/8.jpg"
            alt="image8"
          />
        </div>
      </motion.div>
    </Container>
  );
};

export default Branding;

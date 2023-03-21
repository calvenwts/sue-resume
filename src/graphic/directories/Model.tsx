import { Container } from "@mui/material";
import { motion } from 'framer-motion';
import "../Graphic.css";

const Model = () => {

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };
    return (
        <Container
            sx={{ display: 'flex' }}
            maxWidth="lg"
            className="content-container graphic-container">
            <div className="main-text">
                Graphic
            </div>
            <motion.div className="graphic-content"
                variants={fadeIn}
                initial='hidden'
                animate='visible'
                transition={{ duration: 1 }}
            >
                <div className="graphic-hero">
                    <div className="graphic-hero-title">
                        Model Making
                    </div>
                    <div className="graphic-hero-showcase">
                        <img src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/model-making/2.JPG" alt="image1" />
                        <div className="graphic-details">
                            <img src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/model-making/3.JPG" alt="image2" />
                            <img src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/model-making/4.jpg" alt="image3" />
                        </div>
                    </div>
                    <div className="graphic-hero-showcase">
                        <div className="graphic-details">
                            <img src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/model-making/5.jpg" alt="image2" />
                            <img src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/model-making/6.jpg" alt="image3" />
                        </div>
                        <img src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/model-making/7.jpg" alt="image1" />
                    </div>
                    <div className="graphic-hero-showcase">
                        <img src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/model-making/10.JPG" alt="image1" />
                        <div className="graphic-details">
                            <img src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/model-making/8.jpg" alt="image2" />
                            <img src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/model-making/9.jpg" alt="image3" />
                        </div>
                    </div>
                    <div className="graphic-hero-showcase">
                        <div className="graphic-details">
                            <img src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/model-making/11.JPG" alt="image2" />
                            <img src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/model-making/12.JPG" alt="image3" />
                        </div>
                        <img src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/model-making/13.JPG" alt="image1" />
                    </div>
                    <div className="graphic-hero-showcase">
                        <img src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/model-making/16.JPG" alt="image1" />
                        <div className="graphic-details">
                            <img src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/model-making/14.JPG" alt="image2" />
                            <img src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/model-making/15.JPG" alt="image3" />
                        </div>
                    </div>
                    <div className="graphic-hero-showcase">
                        <img src="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/model-making/17.JPG" alt="image1" />
                    </div>
                </div>
            </motion.div>
        </Container>
    )
}

export default Model;

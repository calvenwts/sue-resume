import { Container } from "@mui/material";
import "./Graphic.css";
import GraphicComponent from "./GraphicComponent";
import { motion } from 'framer-motion';

const Graphic = () => {

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };
    return (
        <Container
            sx={{ display: 'flex' }}
            maxWidth="lg"
            className="content-container photography-container">
            <div className="main-text">
                Graphic
            </div>
            <motion.div className="photography-container-content"
                variants={fadeIn}
                initial='hidden'
                animate='visible'
                transition={{ duration: 1 }}
            >
                <div className="photography-container-row">
                    <GraphicComponent
                        image="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/branding/1.JPG"
                        title="Branding Project"
                        path="branding"
                    />
                    <GraphicComponent
                        image="https://cdn.jsdelivr.net/gh/calvenwts/assets-cdn/SuePortfolio/Graphic/model-making/1.jpg"
                        title="Model Making"
                        path="model"
                    />
                </div>
            </motion.div>
        </Container>
    )
}

export default Graphic;

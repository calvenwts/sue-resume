import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import "./InteriorItem.css";
import { Carousel } from "react-responsive-carousel";

interface props {
  title: string;
  floorplan: string;
  images: string[];
  bathrooms: string;
  rooms: string;
  header: string;
  description: string;
  client: string;
  size: string;
  services: string;
  markets: string;
  region: string;
}

const InteriorItem = ({
  title,
  floorplan,
  images,
  bathrooms,
  rooms,
  header,
  description,
  client,
  size,
  services,
  markets,
  region,
}: props) => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };
  const fadeDown = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container
      sx={{ display: "flex" }}
      maxWidth="lg"
      className="content-container interior-container"
    >
      <div className="interior-content">
        <motion.div
          className="interior-hero-container"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          <Carousel
            className="interior-carousel"
            // autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            stopOnHover={false}
          >
            {images.map((image: string, index: number) => {
              return (
                <div
                  key={`image` + index}
                  className="interior-carousel-container"
                >
                  <img src={image} alt={`image` + index} />
                </div>
              );
            })}
          </Carousel>
        </motion.div>
        <div className="interior-subcontainer">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <div>
              <Typography
                fontSize={{
                  lg: 28,
                  md: 28,
                  sm: 24,
                  xs: 18,
                }}
                variant="h3"
                component="div"
                className="interior-text"
              >
                {title}
              </Typography>
              {/* <Typography
                fontSize={{
                  lg: 20,
                  md: 20,
                  sm: 18,
                  xs: 13,
                }}
                variant="body1"
                component="div"
                className="interior-subtext"
              >
                {`${region}, ${size}`}
              </Typography> */}
              <div className="interior-icons-container">
                <Typography
                  fontSize={{
                    lg: 20,
                    md: 20,
                    sm: 18,
                    xs: 13,
                  }}
                  variant="body1"
                  component="div"
                  sx={{ margin: "0 8px" }}
                >
                  {rooms}
                </Typography>
                <HotelIcon />
                <Typography
                  fontSize={{
                    lg: 20,
                    md: 20,
                    sm: 18,
                    xs: 13,
                  }}
                  variant="body1"
                  component="div"
                  sx={{ margin: "0 8px" }}
                >
                  {bathrooms}
                </Typography>
                <BathtubIcon />
              </div>
            </div>
            <img className="layout-image" src={floorplan} alt="layout" />
          </motion.div>
          <motion.div
            className="interior-subcontainer-description"
            variants={fadeDown}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <strong>{header}</strong>
            <span>{description}</span>
          </motion.div>
          <motion.div
            className="interior-subcontainer-details"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <strong>Project Facts</strong>
            <br />
            <strong>Client:</strong>
            <div>{client}</div>
            <strong>Size:</strong>
            <div>{size}</div>
            <strong>Services:</strong>
            <div>{services}</div>
            <strong>Markets:</strong>
            <div>{markets}</div>
            <strong>Region:</strong>
            <div>{region}</div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default InteriorItem;

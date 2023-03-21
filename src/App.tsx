import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import Graphic from "./graphic/Graphic";
import Home from "./home/Home";
import Interior from "./interior/Interior";
import Photography from "./photography/Photography";
import ArchitectureTile from "./photography/directories/Architecture";
import EventTile from "./photography/directories/EventTile";
import FoodTile from "./photography/directories/FoodTile";
import ProductTile from "./photography/directories/ProductTile";
import PortraitTile from "./photography/directories/PortraitTile";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Branding from "./graphic/directories/Branding";
import Model from "./graphic/directories/Model";
import Kresidences from "./interior/projects/Kresidences";
import CJresidences from "./interior/projects/CJresidences";
import SNresidences from "./interior/projects/SNresidences";
import FurryOnesTile from "./photography/directories/FurryOnesTile";

function App() {
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div className="app-container">
      <NavigationBar />
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/graphic">
            <Route index element={<Graphic />} />
            <Route path="branding" element={<Branding />} />
            <Route path="model" element={<Model />} />
          </Route>
          <Route path="/interior">
            <Route index element={<Interior />} />
            <Route path="k-residence" element={<Kresidences />} />
            <Route path="cj-residence" element={<CJresidences />} />
            <Route path="sn-residence" element={<SNresidences />} />
          </Route>
          <Route path="photography">
            <Route index element={<Photography />} />
            <Route path="portrait" element={<PortraitTile />} />
            <Route path="food" element={<FoodTile />} />
            <Route path="event" element={<EventTile />} />
            <Route path="product" element={<ProductTile />} />
            <Route path="architecture" element={<ArchitectureTile />} />
            <Route path="furryones" element={<FurryOnesTile />} />
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </motion.div>
      <Footer />
    </div>
  );
}

export default App;

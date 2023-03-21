import { AnimatePresence, motion } from "framer-motion";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useState } from "react";

interface Props {
    handleFilter: (value: string) => void;
}

const InteriorFilterComponent = ({ handleFilter }: Props) => {

    const [isMouse, toggleMouse] = useState(false);
    const [filterName, setFilterName] = useState<string>("Project Types")
    const [filterActive, setFilterActive] = useState<boolean>(false);

    const toggleMouseMenu = () => {
        toggleMouse(!isMouse);
        setFilterActive(!filterActive);
    };
    const subMenuAnimate = {
        enter: {
            transition: {
                duration: 0.6,
            },
            opacity: [0, 0.3, 0.6, 1],
            y: 0,
        },
        exit: {
            transition: {
                duration: 0.6,
            },
            opacity: [1, 0.6, 0.3, 0],
            y: -500,
        }
    };

    const handleSelect = (value: string) => {
        setFilterName(value);
        // setFilterActive(false);
        // handleFilter(value);
    }

    return (
        <div className="dropdown-container">
            <motion.div
                onClick={toggleMouseMenu}
            >
                <div className="filter-title">
                    {filterName}
                    <div className={filterActive ? "inactive-filter" : "active-filter"} style={filterActive ? { paddingLeft:"24px", paddingTop: "12px"}: {paddingRight: "24px"}}>
                        <KeyboardArrowDownOutlinedIcon />
                    </div>
                </div>
                <AnimatePresence>
                    <motion.div
                        className="dropdown-menu"
                        initial="exit"
                        animate={isMouse ? "enter" : "exit"}
                        variants={subMenuAnimate}
                    >
                        <div onClick={() => handleSelect("Project Types")} className="sub-menu-item">All</div>
                        <div onClick={() => handleSelect("Residential")} className="sub-menu-item">Residential</div>
                        <div onClick={() => handleSelect("Commercial")} className="sub-menu-item">Commercial</div>
                        <div onClick={() => handleSelect("Hospitality")} className="sub-menu-item">Hospitality</div>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default InteriorFilterComponent;
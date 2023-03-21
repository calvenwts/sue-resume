import "./Tiles.css";

interface props {
    title: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
    image6: string;
    image7: string;
    image8: string;
}

const TileComponent = ({ title, image1, image2, image3, image4, image5, image6, image7, image8 }: props) => {
    return (
        window.innerWidth > 576 ?
            <div className="tile-component">
                <div className="tile-row">
                    <img src={image1} alt="1" />
                    <img src={image2} alt="2" />
                    <img src={image3} alt="3" />
                </div>
                <div className="tile-row">
                    <img src={image4} alt="4" />
                    <div className="tile-row-title">{title}</div>
                    <img src={image5} alt="5" />
                </div>
                <div className="tile-row">
                    <img src={image6} alt="6" />
                    <img src={image7} alt="7" />
                    <img src={image8} alt="8" />
                </div>
            </div>
            :
            <div className="tile-component">
                <div className="tile-row-title">{title}</div>
                <div className="tile-row">
                    <img src={image1} alt="1" />
                    <img src={image2} alt="2" />
                    <img src={image3} alt="3" />
                </div>
                <div className="tile-row">
                    <img src={image4} alt="4" />
                    <img src={image5} alt="5" />
                </div>
                <div className="tile-row">
                    <img src={image6} alt="6" />
                    <img src={image7} alt="7" />
                    <img src={image8} alt="8" />
                </div>
            </div>

    )
}

export default TileComponent;


import { Link } from "react-router-dom";
import "./Graphic.css";

interface props {
    image: string;
    title: string;
    path: string;
}

const GraphicComponent = ({ image, title, path }: props) => {
    return (
        <Link to={`/graphic/${path.toLowerCase()}`} style={{ textDecoration: 'none', color: 'white' }}>
            <div className="photo-component-container" style={{
                backgroundImage: `url(${image})`
            }}
            >
                <div className="photo-component-text">{title}</div>
            </div>
        </Link>
    )
}

export default GraphicComponent;
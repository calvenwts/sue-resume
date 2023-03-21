import { Link } from "react-router-dom";

interface props {
    image: string;
    title: string;
    type: string;
}

const InteriorComponent = ({ image, title, type }: props) => {
    return (
        <Link to={`/interior/${title.toLowerCase()}`} style={{ textDecoration: 'none', color: 'white' }}>
            <div className="interior-component-container" >
                <img src={image} alt="test" />
                <div className="interior-text-container">
                    <span className="interior-component-text">{title}</span>
                    <span>View Project-</span>
                </div>
                <span>{type}</span>
            </div>
        </Link>
    )
}

export default InteriorComponent;
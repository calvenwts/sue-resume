import { Link } from "react-router-dom";
import "./Photography.css";

interface props {
  image: string;
  route: string;
  title: string;
}

const PortraitComponent = ({ image, route, title }: props) => {
  return (
    <Link
      to={`/photography/${route.toLowerCase()}`}
      style={{ textDecoration: "none", color: "white" }}
    >
      <div
        className="photo-component-container"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="photo-component-text">{title}</div>
      </div>
    </Link>
  );
};

export default PortraitComponent;

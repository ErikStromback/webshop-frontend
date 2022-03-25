import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Rating } from "../";
import { NavLink } from "react-router-dom";
import "./styles.css";

const ProductCard = ({ id, title, price, rating, description, mainImage }) => {
  const shortDescription =
    description.length > 160 ? description.slice(0, 160) + "…" : description;

  return (
    <div className="ProductCard-container">
      <div style={{ width: 280, height: 170, borderRadius: 8, margin: 8 }}>
        <NavLink to={`/details/${id}`}>
          <img src={mainImage} className="ProductCard-thumbnail" />
        </NavLink>
      </div>
      <div className="ProductCard-content">
        <NavLink to={`/details/${id}`} className="ProductsCard-title">
          {title}
        </NavLink>
        <div className="ProductCard-priceRating">
          <p className="ProductsCard-title">{`€ ${price}`}</p>
          <Rating className="ProductsCard-description" rating={rating} />
        </div>
        <p className="ProductsCard-description">{shortDescription}</p>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <button className="ProductsCard-button">
            <AiOutlineHeart />
          </button>
          <button className="ProductsCard-button">
            <AiOutlineUser />
          </button>
          <button className="ProductsCard-button">
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };

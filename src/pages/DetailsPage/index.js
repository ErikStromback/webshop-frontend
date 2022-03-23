import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import { NavLink } from "react-router-dom";

const DetailsPage = () => {
  const routeParams = useParams();
  const [productById, setProductById] = useState([]);

  const fetchProductById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4010/products/${routeParams.id}`
      );
      console.log("response", response);
      setProductById(response.data);
    } catch (error) {
      console.log("ERROR: fetch product by id", error);
    }
  };

  useEffect(() => {
    fetchProductById();
  }, []);

  return (
    <div className="DetailsPage">
      <div className="DetailsPage-path">
        <NavLink to="/">Home .</NavLink>
        <NavLink to="/shop"> Shop . </NavLink>
        <p style={{ color: "#FB2E86" }}>{productById.title}</p>
      </div>
      <div className="DetailsPage-product-card">
        <img className="product-img" src={productById.mainImage} />
        <div className="product-description">
          <h1>{productById.title}</h1>
          <p>
            {productById.rating} ({Math.round(Math.random() * 100)})
          </p>
          <button className="review-button">Add Review</button>
          <p style={{ color: "#151875" }}>€{productById.price}</p>
          <p style={{ color: "#a9acc6" }}>{productById.description}</p>
          <p>{productById.categoryId}</p>
        </div>
      </div>

      <div className="DetailsPage-product-text">TEXT DESCRIPTION GOES HERE</div>
    </div>
  );
};

export default DetailsPage;

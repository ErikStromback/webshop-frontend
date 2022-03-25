import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { Rating } from "../../components";
import { ShoppingCart } from "../../components/ShoppingCart";
import {
  AiOutlineHeart,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Header } from "../../components/Header";

const DetailsPage = () => {
  const routeParams = useParams();
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const onAdd = () => {
    const newCartItems = [...cartItems];
    newCartItems.push(product);
    setCartItems(newCartItems);
  };

  const fetchProduct = async () => {
    try {
      const productResponse = await axios.get(
        `http://localhost:4010/products/${routeParams.id}`
      );
      const categoryResponse = await axios.get(
        `http://localhost:4010/categories/${productResponse.data.categoryId}`
      );
      setProduct(productResponse.data);
      setCategory(categoryResponse.data);
    } catch (error) {
      console.log("ERROR: fetch product by id", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  // console.log(category);

  return (
    <div className="DetailsPage">
      <div className="DetailsPage-path">
        <NavLink to="/">Home </NavLink>
        <NavLink to="/shop" style={{ marginLeft: "4px" }}>
          {" "}
          . Shop{" "}
        </NavLink>
        <p style={{ color: "#FB2E86", marginLeft: "4px" }}>. {product.title}</p>
      </div>
      <div className="DetailsPage-product-card">
        <img className="product-img" src={product.mainImage} />
        <div className="product-description">
          <h1>{product.title}</h1>
          <div className="rating-review">
            <Rating
              className="ProductsCard-description"
              rating={product.rating}
            />
            <span className="fake-reviews">
              ({Math.round(Math.random() * 100)})
            </span>
            <button className="review-button">Add Review</button>
          </div>
          <p className="price">€{product.price}</p>
          <p style={{ color: "#a9acc6" }}>{product.description}</p>
          <div className="row">
            <button className="add-to-cart-button" onClick={onAdd}>
              {
                <FiShoppingCart
                  size={17}
                  style={{ color: "white", marginRight: 8 }}
                />
              }{" "}
              Add to cart
            </button>
            <button className="favourite-button">
              {
                <AiOutlineHeart
                  size={17}
                  style={{ color: "535399", marginRight: 8 }}
                />
              }{" "}
              Favourite
            </button>
          </div>
          <p>Category: {category.title}</p>
          <div className="social-icon-row">
            {" "}
            Share:
            {<AiFillFacebook fontSize={17} style={{ color: "151875" }} />}
            {<AiFillInstagram fontSize={17} style={{ color: "FB2E86" }} />}
            {<AiFillTwitterCircle fontSize={17} style={{ color: "151875" }} />}
          </div>
        </div>
      </div>

      <div className="DetailsPage-product-text">
        <div className="product-description-card">
          <div className="product-description-tabs">
            <span style={{ justifyContent: "flex-start" }}>
              <NavLink to="" style={{ marginRight: 50 }}>
                Description{" "}
              </NavLink>
            </span>
            <span style={{ justifyContent: "flex-start" }}>
              <NavLink to="" style={{ marginRight: 50 }}>
                Additional Info{" "}
              </NavLink>
            </span>
            <span style={{ justifyContent: "flex-start" }}>
              <NavLink to="" style={{ marginRight: 50 }}>
                Reviews{" "}
              </NavLink>
            </span>
          </div>
          <div className="product-description-tabs-copy">
            <h1>Varius tempor</h1>
            <p>
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
              varius ac est bibendum. Scelerisque a, risus ac ante. Velit
              consectetur neque, elit, aliquet. Non varius proin sed urna,
              egestas consequat laoreet diam tincidunt. Magna eget faucibus cras
              justo, tortor sed donec tempus. Imperdiet consequat, quis diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
            <h1>Varius tempor</h1>
            <p>
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
              varius ac est bibendum. Scelerisque a, risus ac ante. Velit
              consectetur neque, elit, aliquet. Non varius proin sed urna,
              egestas consequat laoreet diam tincidunt. Magna eget faucibus cras
              justo, tortor sed donec tempus. Imperdiet consequat, quis diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
          </div>
        </div>
      </div>
      <div>
        <ShoppingCart cartItems={cartItems} />
      </div>
    </div>
  );
};

export default DetailsPage;

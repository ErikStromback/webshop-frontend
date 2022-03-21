import "./styles.css";
import { NavLink } from "react-router-dom";
import search from "../../icons/search.svg";
import heart from "../../icons/heart.svg";
import user from "../../icons/user.svg";
import cart from "../../icons/cart.svg";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar-navigation">
        <div className="NavBar-links">
          <span className="NavBar-logo">
            The<span style={{ color: "white" }}>Shop</span>
          </span>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/blog"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/shop"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Shop
          </NavLink>
        </div>
        <div className="NavBar-searchBar">
          <span>{""}</span>
          <img src={search} className="NavBar-icon" />
        </div>
      </div>
      <div className="NavBar-container-icons">
        <img src={user} className="NavBar-icon" />
        <img src={cart} className="NavBar-icon" />
        <img src={heart} className="NavBar-icon" />
      </div>
    </div>
  );
};

export { NavBar };

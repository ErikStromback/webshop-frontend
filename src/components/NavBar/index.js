import "./styles.css";
import { NavLink } from "react-router-dom";

import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';


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
		  <FiSearch  style={{color: '#9295AA', margin: 8}}/>
        </div>
      </div>
      <div className="NavBar-container-icons">
		<AiOutlineUser  size={17} style={{ color: 'white' }}/>
		<FiShoppingCart size={17} style={{ color: 'white' }}/>
		<AiOutlineHeart size={17} style={{ color: 'white' }}/>
      </div>
    </div>
  );
};

export { NavBar };

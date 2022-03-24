import "./styles.css";
import { NavLink } from "react-router-dom";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <span className="footer-logo" style={{ color: "white" }}>
        The<span style={{ color: "#8568FF" }}>Shop</span>
      </span>{" "}
      <div className="footer-link-col">
        <h1>Categories</h1>
        <NavLink to="" style={{ color: "#8A8FB9", marginTop: 35 }}>
          Laptops and Computers
        </NavLink>
        <NavLink to="" style={{ color: "#8A8FB9", marginTop: 25 }}>
          Cameras and Photography
        </NavLink>
        <NavLink to="" style={{ color: "#8A8FB9", marginTop: 25 }}>
          Smart Phones and Tablets
        </NavLink>
        <NavLink to="" style={{ color: "#8A8FB9", marginTop: 25 }}>
          {" "}
          Video Games and Consoles
        </NavLink>
        <NavLink to="" style={{ color: "#8A8FB9", marginTop: 25 }}>
          Waterproof Headphones
        </NavLink>
      </div>
      <div className="footer-link-col">
        <h1>My Account</h1>
        <NavLink to="" style={{ color: "#8A8FB9", marginTop: 35 }}>
          My Account
        </NavLink>
        <NavLink to="" style={{ color: "#8A8FB9", marginTop: 25 }}>
          Discount
        </NavLink>
        <NavLink to="" style={{ color: "#8A8FB9", marginTop: 25 }}>
          Returns
        </NavLink>
        <NavLink to="" style={{ color: "#8A8FB9", marginTop: 25 }}>
          Order History
        </NavLink>
        <NavLink to="" style={{ color: "#8A8FB9", marginTop: 25 }}>
          Order Tracking
        </NavLink>
      </div>
      <div className="footer-follow-us">
        <h1>Follow us</h1>
        <div className="footer-social-icons">
          {<AiFillFacebook fontSize={25} style={{ color: "white" }} />}
          {<AiFillInstagram fontSize={25} style={{ color: "white" }} />}
          {<AiFillTwitterCircle fontSize={25} style={{ color: "white" }} />}
        </div>
      </div>
    </div>
  );
};

export { Footer };

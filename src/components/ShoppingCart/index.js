import React from "react";
import "./styles.css";

const ShoppingCart = ({ onAdd, cartItems }) => {
  console.log(cartItems);
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 ? (
          <div>Cart is empty</div>
        ) : (
          cartItems.map((item) => <p>{item.title} </p>)
        )}
      </div>
    </aside>
  );
};

export { ShoppingCart };

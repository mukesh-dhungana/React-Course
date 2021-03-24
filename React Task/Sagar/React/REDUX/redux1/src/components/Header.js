import React from "react";

const Header = (props) => {
  //   console.warn("Header", props.data);
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img
          src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG42.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;

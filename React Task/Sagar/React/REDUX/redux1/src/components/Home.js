import React from "react";

const Home = (props) => {
  //   console.warn("home", props);
  return (
    <div>
      <h1>HomeComponent</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://pngimg.com/uploads/iphone_12/iphone_12_PNG19.png"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span>I-phone</span>
          <br />
          <span>Price: Rs. 150000/-</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "i phone 12" })
            }
          >
            Add To Cart
          </button>
          <button
            className="remove-cart-btn"
            onClick={() =>
              props.removeToCartHandler({ price: 1000, name: "i phone 12" })
            }
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

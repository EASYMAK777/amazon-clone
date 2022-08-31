import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      {/* Title */}
      <div className="product_info">
        <p>The lean startup</p>
        {/* Price */}
        <p className="product_price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product_rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://assets.chegg.com/rqm/image/upload/f_auto,q_auto,t_imgWidth288/covers/9780307887894.jpg"
        alt="the-lean-startup-book"
      />
    </div>
  );
}

export default Product;

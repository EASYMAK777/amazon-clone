import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      {/* Title */}
      <div className="product_info">
        <p>{title}</p>
        {/* Price */}
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img
        src="https://assets.chegg.com/rqm/image/upload/f_auto,q_auto,t_imgWidth288/covers/9780307887894.jpg"
        alt="the-lean-startup-book"
      />

      <button>Add to Cart</button>
    </div>
  );
}

export default Product;

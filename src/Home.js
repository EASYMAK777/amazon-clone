import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        {/* <img
          className="home_image"
          src="https://andrewminalto.com/wp-content/uploads/2021/01/3fa6f-online-shopping.jpg"
          alt="background_image"
        /> */}
        {/* HOME ROW 1 */}
        <div className="home_row">
          {/*Product  */}
          <Product />
          {/* Product */}
        </div>
        {/* HOME ROW 2 */}
        <div className="home_row">
          {/*Product */}
          {/* Product */}
          {/* Product */}
        </div>
        {/* HOME ROW 3 */}
        <div className="home_row">{/* Product */}</div>
      </div>
    </div>
  );
}

export default Home;

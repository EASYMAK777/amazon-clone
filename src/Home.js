import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img21/PLCC/udp/PLCC_ACQ_LandingPage_Desktop_NonPrime_BackgroundImage._CB654651579_.jpg"
          // src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/app-submission/guidelines_appicon1._TTH_.jpg"
          alt="background_image"
        />
        {/* HOME ROW 1 */}
        <div className="home_row">
          <Product
            title="The lean startup"
            price={29.99}
            image={
              "https://assets.chegg.com/rqm/image/upload/f_auto,q_auto,t_imgWidth288/covers/9780307887894.jpg"
            }
            rating={3}
          />
          <Product />
        </div>
        {/* HOME ROW 2 */}
        <div className="home_row">
          <Product />

          <Product />

          <Product />
        </div>
        {/* HOME ROW 3 */}
        <div className="home_row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;

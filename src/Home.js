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
            id="456"
            title="The lean startup"
            price={29.99}
            image={
              "https://assets.chegg.com/rqm/image/upload/f_auto,q_auto,t_imgWidth288/covers/9780307887894.jpg"
            }
            rating={3}
          />
          <Product
            id="1234"
            title="Kenwood Kmix Stand mixer"
            price={129.99}
            image={"https://i.ebayimg.com/images/g/Zj0AAOSwIbBgsMYN/s-l500.jpg"}
            rating={5}
          />
        </div>
        {/* HOME ROW 2 */}
        <div className="home_row">
          <Product
            id="7890"
            title="Panasonic LG QNED Television"
            price={1299.99}
            image={
              "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/914OJHznVnL._AC_SX466_.jpg"
            }
            rating={4}
          />

          <Product
            id="1011"
            title="Tesla model 3"
            price={49999.99}
            image={
              "https://www.tesla.com/ownersmanual/images/GUID-BEE67A59-6DD7-460C-9C49-0DD47E707A02-online-en-US.jpg"
            }
            rating={1}
          />

          <Product
            id="1213"
            title="Eldin Ring PS3"
            price={49.99}
            image={
              "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81yuT9n7gkL._AC_UY218_.jpg"
            }
            rating={5}
          />
        </div>
        {/* HOME ROW 3 */}
        <div className="home_row">
          <Product
            id="1415"
            title="High Quality Tape Measure"
            price={59.99}
            image={
              "https://www.qualitylogoproducts.com/tradeshow-promotions/16ft-tape-measure-hq-452856.jpg?size=details"
            }
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

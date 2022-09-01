import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        />
      </Link>
      {/* Header Search bar and Icon */}
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        {/* Hello Guest Sign-In */}
        <div className="header_option">
          <span className="header_optionlineOne">Hello Guest</span>
          <span className="header_optionlineTwo">Sign-in</span>
        </div>

        {/* Returns & Orders*/}
        <div className="header_option">
          <span className="header_optionlineOne">Returns </span>
          <span className="header_optionlineOne"> & Orders </span>
        </div>

        {/* Your Prime */}
        <div className="header_option">
          <span className="header_optionlineOne">Your </span>
          <span className="header_optionlineTwo">Prim3</span>
        </div>

        {/* Shopping Cart Icon */}
        <Link to="/checkout">
          <div className="header_optionCart">
            <ShoppingCartIcon />
            <span className="header_optionLineTwo header_basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;

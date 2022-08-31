import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        {/* Logo */}
      </div>
      <div className="header_nav">
        {/* Sign in */}
        <div className="header_option">
          <span className="header_optionlineOne">Hello Guest</span>
        </div>
        <div className="header_option">
          <span className="header_optionlineTwo">Sign-in</span>
        </div>
        {/* Returns and Order */}
        <div className="header_option">
          <span className="header_optionlineOne">Returns </span>
        </div>
        <div className="header_option">
          <span className="header_optionlineTwo">& Orders</span>
          <div className="header_option">
            {/* Your Prime */}
            <span className="header_optionlineOne">Your </span>
          </div>
          <div className="header_option">
            <span className="header_optionlineTwo">Prim3</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;

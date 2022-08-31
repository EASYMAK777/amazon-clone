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
        <div className="header_option"></div>
        <div className="header_option"></div>
        <div className="header_option"></div>
      </div>
    </div>
  );
}
export default Header;

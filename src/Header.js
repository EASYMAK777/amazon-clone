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
    </div>
  );
}
export default Header;

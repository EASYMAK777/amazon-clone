import React from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/checkout">
          {/* Header and Checkout Component */}
          <Header />
        </Link>
        <Link to="/">
          {/* Header and Home Component */}
          <Home />
        </Link>
      </div>
    </Router>
  );
}
export default App;

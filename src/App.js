import React from "react";
import Checkout from "./Checkout";
import Home from "./Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/login" element={<Login />}>
              <h1>Login Page</h1>
            </Route>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;

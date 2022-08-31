import React from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Header */}
          <Header />
          {/* Home */}
          <Home />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

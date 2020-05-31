import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

library.add(fab);

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path='/' component={Home} />
      </div>
    </Router>
  );
};

export default App;

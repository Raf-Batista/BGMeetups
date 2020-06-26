import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Account from "./components/Account";
import Groups from "./components/Groups";
import Market from "./components/Market";

library.add(fab);

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/groups" component={Groups} />
        <Route exact path="/market" component={Market} />
      </div>
    </Router>
  );
};

export default App;

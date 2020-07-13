import React, { useEffect } from "react";
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
import Login from "./components/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import fetchCurrentUser from './async_actions/fetchCurrentUser';

library.add(fab);

const App = () => {

  const currentUser = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if(JSON.stringify(currentUser) === '{}') dispatch(fetchCurrentUser()); 
  });

  return (
    <Router>
      <div>
        <Navbar />
        <ToastContainer />
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/groups" component={Groups} />
        <Route exact path="/market" component={Market} />
      </div>
    </Router>
  );
};

export default App;

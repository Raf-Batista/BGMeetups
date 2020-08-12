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
import MarketContainer from "./containers/MarketContainer";
import MarketEditContainer from "./containers/MarketEditContainer";
import Login from "./components/Login";
import Heading from "./components/Heading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import fetchCurrentUser from "./async_actions/fetchCurrentUser";
import fetchUsers from "./async_actions/fetchUsers";
import MessagesContainer from "./containers/MessagesContainer";
import { ActionCableConsumer } from 'react-actioncable-provider';

library.add(fab);

const App = (props) => {
  const currentUser = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  
  const handleReceived = (response) => {
    const {message} = response
    toast.info(message, {position: toast.POSITION.TOP_CENTER});
  }
  
  useEffect(() => {
    if (JSON.stringify(currentUser) === "{}") dispatch(fetchCurrentUser());
    if (JSON.stringify(users) === "[]") dispatch(fetchUsers());

  }, []); // empty array passed as second argument to prevent loop. https://stackoverflow.com/questions/53243203/react-hook-useeffect-runs-continuously-forever-infinite-loop

  return (
    <div>
      <Router>
        <Heading />
        <Navbar />
        <ToastContainer />
        <ActionCableConsumer channel="WebNotificationsChannel" onReceived={handleReceived}> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route 
          exact 
          path="/account" 
          render={(routeProps) => <Account {...routeProps}/>} />
          <Route
            exact
            path="/groups"
            render={(routeProps) => <Groups {...routeProps} />}
          />
          <Route exact path="/market" component={MarketContainer} />
          <Route exact path="/my-market" component={MarketEditContainer} />
          <Route 
          exact 
          path="/messages" 
          render={(routeProps) => 
            <MessagesContainer {...routeProps}  />
          } />
        </Switch>
        </ActionCableConsumer> 
      </Router>     
    </div>
  );
};

export default App;

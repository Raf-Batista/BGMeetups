import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Account from "./components/Account";
import Groups from "./components/Groups";
import Group from "./components/Group";
import ManageGroupsContainer from "./containers/ManageGroupsContainer";
import GroupContainer from "./containers/GroupContainer";
import MarketContainer from "./containers/MarketContainer";
import MarketEditContainer from "./containers/MarketEditContainer";
import GroupEditContainer from "./containers/GroupEditContainer";
import Login from "./components/Login";
import Heading from "./components/Heading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import * as actions from './actions/message';
import fetchCurrentUser from "./async_actions/fetchCurrentUser";
import fetchUsers from "./async_actions/fetchUsers";
import fetchGroups from "./async_actions/fetchGroups";
import MessagesContainer from "./containers/MessagesContainer";
import { ActionCableConsumer } from 'react-actioncable-provider';
import PacmanLoader from "react-spinners/PacmanLoader";


library.add(fab);

const App = (props) => {
  const currentUser = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);
  const groups = useSelector((state) => state.groups);
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.loading.FETCH_LOGIN);

  const handleReceived = (response) => {
    const { notification, receivedMessage } = response;
    dispatch(actions.receivedMessageSuccess(receivedMessage));
    toast.info(notification, { position: toast.POSITION.TOP_CENTER });
  }

  useEffect(() => {
    if (JSON.stringify(currentUser) === "{}") dispatch(fetchCurrentUser());
    if (JSON.stringify(users) === "[]") dispatch(fetchUsers());
    if (JSON.stringify(groups) === "[]") dispatch(fetchGroups());

  }, []); // empty array passed as second argument to prevent loop. https://stackoverflow.com/questions/53243203/react-hook-useeffect-runs-continuously-forever-infinite-loop

  return (
    <div>
      <Router>
        <Heading />
        <Navbar />
        <ToastContainer />
        <ActionCableConsumer channel="WebNotificationsChannel" onReceived={handleReceived}>
          {
            isFetching ? <div className="spinner">
              <PacmanLoader color={"#7d3cff"} />
            </div> :
              <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route
                  exact
                  path="/account"
                  render={(routeProps) => <Account {...routeProps} />} />
                <Route
                  exact
                  path="/groups"
                  render={(routeProps) => <GroupContainer {...routeProps} />}
                />
                <Route exact path="/groups/:id/edit" component={ManageGroupsContainer} />

                <Route exact path="/market" component={MarketContainer} />
                <Route exact path="/my-market" component={MarketEditContainer} />
                <Route exact path="/my-groups" component={GroupEditContainer} />
                <Route exact path="/groups/:id" component={Group} />
                <Route
                  exact
                  path="/messages"
                  render={(routeProps) =>
                    <MessagesContainer {...routeProps} />
                  } />
              </Switch>
          }

        </ActionCableConsumer>
      </Router>
    </div>
  );
};

export default App;

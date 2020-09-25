import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Home from "./components/Home/Home";
import About from "./components/About";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup";
import AccountContainer from "./components/Account/AccountContainer";
import Group from './components/Groups/Group';
import GroupsContainer from "./components/Groups/GroupsContainer";
import GroupsEditContainer from "./components/GroupsCreate/GroupsEditContainer";
import ManageGroupsContainer from "./components/Groups/ManageGroupsContainer";
import InvitationsContainer from "./components/Invitations/";
import { MarketContainer, MarketEditContainer } from "./components/Market";
import Login from "./components/Login/Login";
import Heading from "./components/Heading/Heading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import * as messageActions from './actions/message';
import * as invitationActions from './actions/invitation';
import fetchCurrentUser from "./async/fetchCurrentUser";
import fetchUsers from "./async/fetchUsers";
import fetchGroups from "./async/fetchGroups";
import fetchInvitations from "./async/fetchInvitations";
import MessagesContainer from "./components/Messages";
import { ActionCableConsumer } from 'react-actioncable-provider';
import CircleLoader from "react-spinners/CircleLoader";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/ErrorPage/ErrorPage";

library.add(fab);

const App = (props) => {
  const currentUser = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);
  const groups = useSelector((state) => state.groups);
  const invitations = useSelector((state) => state.invitations);
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.loading.FETCH_LOGIN);

  const handleReceived = (response) => {
    const { notification, receivedMessage, receivedInvitation } = response;
    if (receivedMessage) dispatch(messageActions.receivedMessageSuccess(receivedMessage));
    if (receivedInvitation) dispatch(invitationActions.receivedInvitationSuccess(receivedInvitation));
    toast.info(notification, { position: toast.POSITION.TOP_CENTER });
  }

  useEffect(() => {
    if (JSON.stringify(currentUser) === "{}") dispatch(fetchCurrentUser());
    if (JSON.stringify(users) === "[]") dispatch(fetchUsers());
    if (JSON.stringify(groups) === "[]") dispatch(fetchGroups());
    if (JSON.stringify(invitations) === "[]") dispatch(fetchInvitations());

  }, []); // empty array passed as second argument to prevent loop. https://stackoverflow.com/questions/53243203/react-hook-useeffect-runs-continuously-forever-infinite-loop

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Heading />
          <Navbar />
          <ToastContainer />
          <ActionCableConsumer channel="WebNotificationsChannel" onReceived={handleReceived}>
            {
              isFetching ?
                <div className="spinner">
                  <CircleLoader color={"#7d3cff"} />
                </div> :
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/login" component={Login} />
                  <Route
                    exact
                    path="/account"
                    render={(routeProps) => <AccountContainer {...routeProps} />} />
                  <Route
                    exact
                    path="/groups"
                    render={(routeProps) => <GroupsContainer {...routeProps} />}
                  />
                  <Route exact path="/groups/:id/edit" component={ManageGroupsContainer} />
                  <Route exact path="/market" component={MarketContainer} />
                  <Route exact path="/my-market" component={MarketEditContainer} />
                  <Route exact path="/:id/groups" component={GroupsEditContainer} />
                  <Route exact path="/invites" component={InvitationsContainer} />
                  <Route exact path="/groups/:id" component={Group} />
                  <Route
                    exact
                    path="/messages"
                    render={(routeProps) =>
                      <MessagesContainer {...routeProps} />
                    } />
                      <Route path="/contact" />

                  <Route component={ErrorPage} />
                </Switch>
            }
          </ActionCableConsumer>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Messages from "../Messages";
import MessageForm from "../MessageForm.js";
//import PacmanLoader from "react-spinners/PacmanLoader";

const MessagesContainer = (props) => {
  const { history } = props
  const user = useSelector((state) => state.user);
  //const isFetching = useSelector((state) => state.loading.FETCH_EDIT);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (JSON.stringify(user) === "{}") props.history.push("/login");
  });

  const handleClick = () => {
    setActive(!active);
  };

  return (
     <div className="container text-center mt-5">
       <h1>{props.message}</h1> 
      {/* {isFetching ? (
        <div className="spinner">
          <PacmanLoader color={"#7d3cff"} />
        </div>
      ) : null} */}
      <div className="heading">
        <h2 className="d-block my-3">Messages</h2>
        <span>View messages other users has sent you and create new messages</span>
      </div>

      <ul className="nav justify-content-center mt-4 div-background py-2">
        <li className="nav-item">
          <div
            className={`nav-link pointer ${active ? "active" : ""}`}
            onClick={handleClick}
          >
            Messages
          </div>
        </li>
        <li className="nav-item">
          <span
            className={`nav-link pointer ${!active ? "active" : ""}`}
            onClick={handleClick}
          >
            Compose
          </span>
        </li>
      </ul>

      {active ? (
        <Messages user={user} history={history} />
      ) : (
        <MessageForm user={user} history={history}/>
      )}
    </div>   
  );
};

export default MessagesContainer;

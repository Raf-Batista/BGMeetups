import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import GroupForm from "../GroupForm/GroupForm";
import { useSelector } from "react-redux";
import GroupsView from "../../Groups/GroupsView";

const UserGroupsContainer = (props) => {
  const [active, setActive] = useState(true);
  const { history } = props;
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="container text-center mt-5">
      <div className="heading">
        <h2 className="d-block my-3">My Groups</h2>
        <span>
          Create and manage your groups. You can invite other gamers to be a
          member and manage members as well.
        </span>
      </div>
      <ul className="nav justify-content-center mt-4 div-background py-2">
        <li className="nav-item">
          <div
            className={`nav-link pointer ${active ? "active" : ""}`}
            onClick={handleClick}
          >
            My Groups
          </div>
        </li>
        <li className="nav-item">
          <span
            className={`nav-link pointer ${!active ? "active" : ""}`}
            onClick={handleClick}
          >
            Create a Group
          </span>
        </li>
      </ul>
      {active ? <GroupsView groups={user.groups} /> : <GroupForm />}
    </div>
  );
};

export default UserGroupsContainer;

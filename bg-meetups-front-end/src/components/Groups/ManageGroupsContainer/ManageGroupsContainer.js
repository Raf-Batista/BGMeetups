import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import GroupEditForm from "../../GroupsEdit/GroupEditForm";
import ManageGroupMembers from "../ManageGroupMembers";

const ManageGroupsContainer = (props) => {
    const { history }  = props;
    const user = useSelector((state) => state.user);
    const [active, setActive] = useState(true);
    const id = parseInt(props.match.params.id)
    const groups = user.groups || [];
    const group = groups.find((group) => group.id === id) || {};
      
    useEffect(() => {
     // if (JSON.stringify(user) === "{}") props.history.push("/login");
    });
  
    const handleClick = () => {
      setActive(!active);
    };
  
    return (
      <div className="container text-center mt-5">
        <div className="heading">
          <h2 className="d-block my-3">Group Management</h2>
          <span>Update your group info and manage members</span>
        </div>
  
        <ul className="nav justify-content-center my-4">
          <li className="nav-item">
            <div
              className={`nav-link pointer ${active ? "active" : ""}`}
              onClick={handleClick}
            >
              Manage Members
            </div>
          </li>
          <li className="nav-item">
            <span
              className={`nav-link pointer ${!active ? "active" : ""}`}
              onClick={handleClick}
            >
              Edit Group Info
            </span>
          </li>
        </ul>
  
        {active ? (
         <ManageGroupMembers members={group.memberships} history={history} userId={user.id} groupId={group.id}/>
        ) : (
         <GroupEditForm group={group} history={history}/>
        )}
      </div>
    );
}

export default ManageGroupsContainer

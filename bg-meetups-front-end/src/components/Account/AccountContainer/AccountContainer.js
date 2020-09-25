import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import AccountView from '../AccountView';
import Private from "../Private";
import Public from "../Public";

const AccountContainer = (props) => {
  const user = useSelector((state) => state.user);
  const [active, setActive] = useState(true);
  const { history } = props;
    
  useEffect(() => {
    if (JSON.stringify(user) === "{}") props.history.push("/login");
  });

  const handleClick = () => {
    setActive(!active);
  };

  return (
   <AccountView history={history} user={user} handleClick={handleClick} active={active} setActive={setActive}/>
  );
};

export default AccountContainer;

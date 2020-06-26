import React from "react";
import Login from "./Login";
import { useSelector, useDispatch } from "react-redux";

const Account = (props) => {
  const loggedIn = useSelector((state) => state.loading);

  return (
    <div>
      {/* If not logged in, "loading" in the store will be an empty object */}
      {JSON.stringify(loggedIn) === "{}" ? (
        props.history.push("/login")
      ) : (
        <h1>Account</h1>
      )}
    </div>
  );
};

export default Account;

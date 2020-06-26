import React from "react";
import Login from "./Login";
import { useSelector, useDispatch } from "react-redux";

const Account = () => {
  const loggedIn = useSelector((state) => state.loading);

  return (
    <div>
      {/* If not logged in, "loading" in the store will be an empty object */}
      {JSON.stringify(loggedIn) === "{}" ? <Login /> : <h1>Account</h1>}
    </div>
  );
};

export default Account;

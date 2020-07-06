import React from "react";
import Login from "./Login";
import { useSelector, useDispatch } from "react-redux";

const Account = (props) => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      {/* If not logged in, "user" in the store will be an empty object */}
      {JSON.stringify(user) === "{}" ? (
        props.history.push("/login")
      ) : (
        <div>
          <h1>Account</h1>

        </div>
      )}
    </div>
  );
};

export default Account;

import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import * as types from "../constants/user";
import * as actions from "../actions/user";
import PacmanLoader from "react-spinners/PacmanLoader";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const isFetching = useSelector((state) => state.loading.FETCH_LOGIN);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    // send e.target.innerText to server for OAuth
    //setShowLogin(!showLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //createUser();
    dispatch(actions.fetchLoginRequest());
  };

  const createUser = async () => {
    const fetchResponse = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = fetchResponse.json();
    console.log(data);
  };
  return (
    <div className="container text-center mt-4 signin">
      {isFetching ? (
        <div className="spinner">
          <PacmanLoader color={"#7d3cff"} />
        </div>
      ) : null}
      <div className={isFetching ? "loading" : ""}>
        <h2 data-test="heading">Login</h2>

        <div className="mt-4">
          <button
            className=" btn text-center"
            name="facebook"
            data-test="button-oauth"
          >
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              size="lg"
              className="mr-2"
            />
            <span className="mr-2">Facebook</span>
          </button>
        </div>
        <div className="my-2">
          <button className="btn text-center" data-test="button-oauth">
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              size="lg"
              className="mr-2"
            />
            <span className="mr-4">Twitter</span>
          </button>
        </div>
        <div className="mb-3">
          <button className=" btn text-center" data-test="button-oauth">
            <FontAwesomeIcon
              icon={["fab", "google"]}
              size="lg"
              className="mr-2"
            />
            <span className="mr-4">Google</span>
          </button>
        </div>
        <small>Login account using your email</small>
        <div className="d-flex justify-content-center mt-2">
          <form onSubmit={handleSubmit} data-test="form-signup">
            <div className="form-group">
              <input
                className="form-control  mt-2"
                name="email"
                type="email"
                placeholder="email"
                onChange={handleChange}
                value={user.email}
              />
              <input
                className="form-control  mt-2"
                name="password"
                type="password"
                placeholder="password"
                onChange={handleChange}
                value={user.password}
              />
              <button className="btn mt-2" type="submit">
                Create Account
              </button>

              <small className="d-block mt-1">
                Don't have an account?{" "}
                <a href="/signup" data-test="link" className="d-block">
                  Create an account
                </a>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showLogin, setShowLogin] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    // send e.target.innerText to server for OAuth
    setShowLogin(!showLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser();
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

  const usernameInputField = (
    <input
      className="form-control"
      name="username"
      type="text"
      placeholder="username"
      onChange={handleChange}
      value={user.username}
    />
  );

  const createButton = (
    <button className="btn mt-2" type="submit">
      Create Account
    </button>
  );
  const loginButton = (
    <button className="btn mt-2" type="submit">
      Login
    </button>
  );

  const loginText = (
    <small>
      Already have an account?{" "}
      <a href="#" onClick={handleClick} data-test="link">
        Login
      </a>
    </small>
  );
  const signupText = (
    <small>
      Don't have an account?{" "}
      <a href="#" onClick={handleClick} data-test="link">
        Create
      </a>
    </small>
  );

  return (
    <div className="container text-center mt-4 signin">
      {showLogin ? (
        <h2 data-test="heading">Login Below</h2>
      ) : (
        <h2 data-test="heading">Signup Below</h2>
      )}

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
        <button className="btn  text-center" data-test="button-oauth">
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
      {showLogin ? null : <small>Create an account using your email</small>}
      <div className="d-flex justify-content-center mt-2">
        <form onSubmit={handleSubmit} data-test="form-signup">
          <div className="form-group">
            {showLogin ? null : usernameInputField}

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
            {showLogin ? loginButton : createButton}

            {showLogin ? signupText : loginText}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

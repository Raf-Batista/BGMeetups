import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import fetchSignup from "../../async/fetchSignup";
import { NavLink } from 'react-router-dom';
import useForm from '../../hooks/useForm';

const Signup = (props) => {

  const initialUserState = { username: "", email: "", password: "" };
  const loggedIn = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { history } = props;

  useEffect(() => {
    if(JSON.stringify(loggedIn) !== '{}') history.push('/');
  });

  const handleClick = (e) => {
    e.preventDefault();
    // send e.target.innerText to server for OAuth
  };

  const submit = () => {
    dispatch(fetchSignup(user));
    reset();
  };

  const { values, handleChange, handleSubmit, reset } = useForm(initialUserState, submit);
  const user = values;

  return (
    <div className="container text-center mt-4 signin">
        <h2 data-test="heading">Signup</h2>

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
        <small>Create an account using your email</small>
        <div className="d-flex justify-content-center mt-2">
          <form onSubmit={handleSubmit} data-test="form-signup">
            <div className="form-group">
              <input
                className="form-control"
                name="username"
                type="text"
                placeholder="username"
                onChange={handleChange}
                value={user.username}
                required
              />

              <input
                className="form-control  mt-2"
                name="email"
                type="email"
                placeholder="email"
                onChange={handleChange}
                value={user.email}
                required
              />
              <input
                className="form-control  mt-2"
                name="password"
                type="password"
                placeholder="password"
                onChange={handleChange}
                value={user.password}
                required
              />
              <button className="btn mt-2" type="submit">
                Create Account
              </button>

              <small className="d-block mt-1">
                Already have an account?{" "}
                <NavLink to="/login" data-test="link" className="d-block">
                  Login
                </NavLink>
              </small>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Signup;

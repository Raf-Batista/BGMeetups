import React, { useState } from "react";
import { useDispatch } from "react-redux";
import fetchEditUser from "../../async/fetchEditUser.js";
import { NavLink } from "react-router-dom";

const Private = (props) => {
  const { history, user } = props;
  const [showEditForm, setShowEditForm] = useState(false);
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
    id: user.id,
  });
  const dispatch = useDispatch();

  const handleClick = () => {
    setShowEditForm(!showEditForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchEditUser(userForm));
    setUserForm({ ...userForm, email: "", password: "" });
    setShowEditForm(!showEditForm);
  };

  const handleChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const form = (
    <form className="mt-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="d-block mt-2">Email Address</label>
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder={user.email}
          value={userForm.email}
        />
        <label className="d-block mt-3">Password</label>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder={"*******"}
          value={userForm.password}
        />
        <div className="mt-2 mb-5">
          <button
            className="d-inline mx-2 small-btn px-3 save-btn"
            type="submit"
          >
            Save
          </button>
          <button
            className="d-inline small-btn"
            onClick={handleClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );

  const privateInfo = (
    <div>
      <div className="mt-4">Email Address</div>
      <div className="mt-3">{user.email}</div>
      <div className="mt-3">Password</div>
      <div className="mt-3">**********</div>
      <button className="pointer small-btn px-3 mt-1 mb-5" onClick={handleClick}>
        Edit
      </button>
    </div>
  );

  return (
    <div className="div-background account">
      <span className="d-block p-3">
        This is your account information. Only visible to you.
      </span>
      <span className="d-block">
        Note: Changes to your email and password will change the information you
        use to login
      </span>
      {showEditForm ? form : privateInfo}
    </div>
  );
};

export default Private;

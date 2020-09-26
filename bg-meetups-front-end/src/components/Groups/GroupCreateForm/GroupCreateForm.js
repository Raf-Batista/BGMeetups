import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import createGroup from "../../../async/createGroup";


const GroupCreateForm = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [group, setGroup] = useState({
    name: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setGroup({
      ...group,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createGroup(group, user.id));
    setGroup({ name: "", purpose: "" });
  };

  const handleClick = (e) => {
    setGroup({ name: "", purpose: "" });
  };

  return (
    <form className="div-background" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="d-block my-2">Name</label>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          value={group.name}
          required
        />
        <label className="d-block my-2">Purpose</label>
        <input
          name="purpose"
          type="text"
          onChange={handleChange}
          value={group.purpose}
          required
        />

        <div className="mt-2">
          <button
            className="d-inline mx-2 mt-2 small-btn save-btn"
            type="submit"
          >
            Create
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
};

export default GroupCreateForm;

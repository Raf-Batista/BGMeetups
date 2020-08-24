import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import createGroup from "../async_actions/createGroup";


const GroupForm = (props) => {
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
    <form className="mt-4 mx-lg-auto ml-sm-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="d-block my-2">Name</label>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          value={group.name}
        />
        <label className="d-block my-2">Purpose</label>
        <input
          name="purpose"
          type="text"
          onChange={handleChange}
          value={group.purpose}
        />

        <div>
          <button
            className="d-inline mx-2 mt-2 border-0 bg-transparent"
            type="submit"
          >
            Create
          </button>
          <span
            className="d-inline border-0 bg-transparent pointer"
            onClick={handleClick}
          >
            Cancel
          </span>
        </div>
      </div>
    </form>
  );
};

export default GroupForm;

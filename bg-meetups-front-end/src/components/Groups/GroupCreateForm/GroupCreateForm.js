import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import createGroup from "../../../async/createGroup";
import useForm from '../../../hooks/useForm';


const GroupCreateForm = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  
  const groupValues = {
    name: "",
    purpose: "",
  };

  const submit = () => {
    dispatch(createGroup(values, user.id));
    reset();
  };

  const handleClick = (e) => {
    reset();
  };

  const { values, handleSubmit, handleChange, reset} = useForm(groupValues, submit);

  return (
    <form className="div-background" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="d-block my-2">Name</label>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          value={values.name}
          required
        />
        <label className="d-block my-2">Purpose</label>
        <input
          name="purpose"
          type="text"
          onChange={handleChange}
          value={values.purpose}
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

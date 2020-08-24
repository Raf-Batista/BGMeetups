import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import editGroup from "../async_actions/editGroup";

const GroupEditForm = (props) => {
    const { group, history } = props;
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    const [groupForm, setGroupForm] = useState({
        name: "",
        purpose: ""
    });

    const handleChange = (e) => {
        setGroupForm({
            ...groupForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = {group: groupForm, user_id: user.id, group_id: group.id}
        dispatch(editGroup(params));
        history.push('/my-groups');
    };


    return (
        <form className="mt-4 mx-lg-auto ml-sm-4 mt-5" onSubmit={handleSubmit}>
            <div className="form-group text-center">
                <label className="d-block my-2">Name</label>
                <input
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={groupForm.name}
                    placeholder={group.name}
                />
                <label className="d-block my-2">Purpose</label>
                <input
                    name="purpose"
                    type="text"
                    onChange={handleChange}
                    value={groupForm.purpose}
                    placeholder={group.purpose}
                />

                <div>
                    <button
                        className="d-inline mx-2 mt-2 border-0 bg-transparent"
                        type="submit"
                    >
                        Update
            </button>
                </div>
            </div>
        </form>
    );
}

export default GroupEditForm

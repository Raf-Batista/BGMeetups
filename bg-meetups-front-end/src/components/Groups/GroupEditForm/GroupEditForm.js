import React    from 'react';
import { useSelector, useDispatch } from 'react-redux';
import editGroup from "../../../async/editGroup";
import useForm from '../../../hooks/useForm';

const GroupEditForm = (props) => {
    const { group, history } = props;
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
   
    const groupEditValues = {
        name: "",
        purpose: ""
    };

    const submit = () => {
        const params = { group: values, user_id: user.id, group_id: group.id }
        dispatch(editGroup(params));
        reset();
        history.push('/my-groups');
    };

    const { values, handleChange, handleSubmit, reset } = useForm(groupEditValues, submit);

    return (
        <form className="div-background" onSubmit={handleSubmit}>
            <div className="form-group text-center">
                <label className="d-block my-2">Name</label>
                <input
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={values.name}
                    placeholder={group.name}
                />
                <label className="d-block my-2">Purpose</label>
                <input
                    name="purpose"
                    type="text"
                    onChange={handleChange}
                    value={values.purpose}
                    placeholder={group.purpose}
                />

                <div>
                    <button
                        className="d-inline mx-2 mt-3 small-btn save-btn px-2"
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

import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import useForm from "../../../hooks/useForm";

const MeetupForm = () => {
    const dispatch = useDispatch();
    const initialDateState = {date: Date.now()};

    const submit = () => {
        //dispatch(values)
        console.log(date)
    }

    const {handleSubmit, handleChange, values} = useForm(initialDateState, submit);
    const date = values;

    return (
        <>
            <form onSubmit={handleSubmit} className="meetup-form">
                <input type="datetime-local" onChange={handleChange} value={date}/>
                <button type="submit" className="ml-2 btn meetup-btn">Create</button>
            </form>
        </>
    )
}

export default MeetupForm;
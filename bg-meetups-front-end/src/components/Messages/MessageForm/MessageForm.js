import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import createMessage from '../../../async/createMessage';
import useForm from '../../../hooks/useForm';

const MessageForm = (props) => {
    const dispatch = useDispatch();

    const { user } = props
    const messageValues = { recipient: '', subject: '', content: '' };
    
    const submit = () => {
        dispatch(createMessage(values, user.id));
    }

    const { values, handleSubmit, handleChange } = useForm(messageValues, submit);

    return (
        <div>
            <form className="mt-4 mx-lg-auto ml-sm-4 div-background mb-5" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="d-block my-2">Recipient</label>
                    <input
                        name="recipient"
                        onChange={handleChange}
                        type="text"
                        value={values.recipient}
                        required
                    />
                    <label className="d-block my-2">Subject</label>
                    <input
                        name="subject"
                        onChange={handleChange}
                        type="text"
                        value={values.subject}
                        required
                    />
                    <label className="d-block my-2">Content</label>
                    <textarea
                        name="content"
                        onChange={handleChange}
                        type="text-area"
                        value={values.content}
                        row='3'
                        className='description'
                        required
                    />
                    <div>
                        <button
                            className="d-inline mx-2 mt-2 small-btn save-btn px-2"
                            type="submit"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MessageForm

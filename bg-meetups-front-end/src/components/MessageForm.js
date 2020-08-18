import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import createMessage from '../async_actions/createMessage';

const MessageForm = (props) => {
    const dispatch = useDispatch();

    const {user} = props
    const [message, setMessage] = useState({recipient: '', subject: '', content: ''});
    const handleChange = (e) => {
        setMessage({...message, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createMessage(message, user.id));
        setMessage({
            recipient: '', 
            subject: '', 
            content: ''
        });
    }
    return (
        <div>
          <form className="mt-4 mx-lg-auto ml-sm-4" onSubmit={handleSubmit}>
            <div className="form-group">
            <label className="d-block my-2">Recipient</label>
            <input
            name="recipient"
            onChange={handleChange}
            type="text"
            value={message.recipient}
            />
             <label className="d-block my-2">Subject</label>
            <input
            name="subject"
            onChange={handleChange}
            type="text"
            value={message.subject}
            />
            <label className="d-block my-2">Content</label>
            <textarea
            name="content"
            onChange={handleChange}
            type="text-area"
            value={message.content}
            row='3'
            className='description'
            />
            <div>
            <button
                className="d-inline mx-2 mt-2 border-0 bg-transparent"
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

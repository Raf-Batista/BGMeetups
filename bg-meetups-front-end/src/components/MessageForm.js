import React, { useState } from 'react';
import createMessage from '../async_actions/createMessage';

const MessageForm = (props) => {

    const {history, user} = props
    const [message, setMessage] = useState({recipient: '', subject: '', content: ''});
    const handleChange = (e) => {
        setMessage({...message, [e.target.name]: e.target.value})
    }
    const handleClick = () => {
        props.history.push('/messages')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        createMessage(message, user.id)
        setMessage({
            recipient: '', 
            subject: '', 
            content: ''
        })
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
            <input
            name="content"
            onChange={handleChange}
            type="text-area"
            value={message.content}
            />
            <div>
            <button
                className="d-inline mx-2 mt-2 border-0 bg-transparent"
                type="submit"
            >
            Send
            </button>
            <button
                className="d-inline border-0 bg-transparent"
                onClick={handleClick}
            >
            Cancel
          </button>
        </div>
      </div>
    </form>
        </div>
    )
}

export default MessageForm

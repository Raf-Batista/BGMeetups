import React, { useState } from 'react'

const Message = (props) => {
    const { message } = props;
    const [ show, setShow ] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='text-center div-background'>
            {
                !show ? <h6 className='pointer mb-3 pt-3' onClick={handleClick}>Subject: {message.subject}</h6> : null
            }
            {
                show ?
                    <div className='message-body mb-3 py-2'>
                        <div>From: {message.from}</div>
                        <div>Subject: {message.subject}</div>
                        <div className='message-content mt-1'>{message.content}</div>
                        <form className='mt-3 d-inline' onSubmit={handleSubmit}>
                            <button className='small-btn px-2 message-delete-btn mt-2'>Delete</button>
                        </form>
                        <button className=' ml-2 small-btn px-2 d-inline mt-2' onClick={handleClick}>Close</button>
                    </div> : null
            }
        </div>
    )
}

export default Message

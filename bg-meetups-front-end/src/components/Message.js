import React, { useState } from 'react'

const Message = (props) => {
    const {message} = props;
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('AAARGH')
    }

    return (
        <div className='mb-4 text-left'>
           {
               !show ? <h6 className='pointer message-subjects mb-3' onClick={handleClick}>Subject: {message.subject}</h6> : null
           } 
            {
             show ? 
                <div className='message-body'>
                   <div>From: {message.from}</div>
                   <div>Subject: {message.subject}</div>
                   <div className='message-content mt-1'>{message.content}</div> 
                   <form  className='mt-3 d-inline' onSubmit={handleSubmit}>
                     <button className='btn message-delete-btn'>Delete</button>
                    </form>
                    <button className='btn d-inline' onClick={handleClick}>Close</button>
                </div> : null
            }
        </div>
    )
}

export default Message

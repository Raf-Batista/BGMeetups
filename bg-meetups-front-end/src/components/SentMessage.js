import React from 'react'

const SentMessage = (props) => {
    const {sentMessage} = props
    return (
        <div className='message-subjects'>
            <span>{sentMessage.subject}</span>
        </div>
    )
}

export default SentMessage

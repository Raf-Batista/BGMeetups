import React from 'react'

const ReceivedMessage = (props) => {
    const {receivedMessage} = props;
    return (
        <div className='message-subjects'>
            <h6>{receivedMessage.subject}</h6>
        </div>
    )
}

export default ReceivedMessage

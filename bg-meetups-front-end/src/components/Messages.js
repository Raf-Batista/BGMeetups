import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Message from './Message';
import SentMessage from './SentMessage';  

const Messages = () => {
    const [active, setActive] = useState(true);
    /* The '|| []' will prevent an error when refreshing the page. sentMessages and receivedMessages will be undefined on refresh without it */
    const sentMessages = useSelector(state => state.user.sent_messages) || [];
    const receivedMessages = useSelector(state => state.user.received_messages) || [];

    const handleClick = () => {
        setActive(!active);
      };

    return (
        <div className='container messages'>
          <div className='row'>
            
            <div className='col-6 text-justify'>
                    <div
                      className={`pointer ${active ? "message-selection" : ""}`}
                      onClick={handleClick}
                    >
                    Recieved
                    </div>
                  <div
                    className={`pointer mt-2 ${!active ? "message-selection" : ""}`}
                    onClick={handleClick}
                  >
                    Sent
                  </div>
            </div>

            <div className='col-6 mt-2'>
              {
                active ? 
               
                receivedMessages.map((receivedMessage) => <Message key={receivedMessage.id} message=  {receivedMessage} />) :
                
                sentMessages.map((sentMessage) => <Message message={sentMessage} />)
              }
            </div>
          </div> 
        </div>
    )
}

export default Messages

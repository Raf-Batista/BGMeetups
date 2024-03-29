import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MessageView from '../MessageView';
import './MessagesView.css';

const MessagesView = () => {
  const [active, setActive] = useState(true);
  /* The '|| []' will prevent an error when refreshing the page. sentMessages and receivedMessages will be undefined on refresh without it */
  const sentMessages = useSelector(state => state.user.sent_messages) || [];
  const receivedMessages = useSelector(state => state.user.received_messages) || [];

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className='container messages'>
      <div className='text-justify-right div-background py-2'>
        <span
          className={`pointer ${active ? "message-selection" : ""}`}
          onClick={handleClick}
        >
          Recieved
        </span>
        <span
          className={`pointer mt-2 ml-4 ${!active ? "message-selection" : ""}`}
          onClick={handleClick}
        >
          Sent
        </span>
      </div>

      <div>
        {
          active ?

            receivedMessages.map((receivedMessage) => <MessageView key={receivedMessage.id} message={receivedMessage} />) :

            sentMessages.map((sentMessage) => <MessageView key={sentMessage.id} message={sentMessage} />)
        }
      </div>
    </div>
  )
}

export default MessagesView;

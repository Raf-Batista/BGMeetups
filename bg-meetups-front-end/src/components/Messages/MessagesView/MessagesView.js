import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Message from '../Message';
import SentMessage from '../SentMessage';

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

            receivedMessages.map((receivedMessage) => <Message key={receivedMessage.id} message={receivedMessage} />) :

            sentMessages.map((sentMessage) => <Message key={sentMessage.id} message={sentMessage} />)
        }
      </div>
    </div>
  )
}

export default MessagesView;

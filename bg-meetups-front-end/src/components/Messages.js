import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Messages = () => {
    const [active, setActive] = useState(true);

    const handleClick = () => {
        setActive(!active);
      };

    return (
        <div className='container messages'>
          <div className='row'>
            
            <div className='col-6'>
                    <div
                      className={`nav-link pointer ${active ? "active" : ""}`}
                      onClick={handleClick}
                    >
                    Recieved
                    </div>
                  <span
                    className={`nav-link pointer ${!active ? "active" : ""}`}
                    onClick={handleClick}
                  >
                    Sent
                  </span>
            </div>

            <div className='col-6 mt-2'>
              <div className='message-subjects'>THIS IS A TEST SUBJECT THIS IS A TEST SUBJECT</div>
              <div className='message-subjects'>THIS IS A TEST</div>
              <div className='message-subjects'>THIS IS A</div>
              <div className='message-subjects'>THIS IS</div>
              <div className='message-subjects'>THIS</div>
              <div className='message-subjects'>THIS IS A TEST SUBJECT THIS IS A TEST SUBJECT</div>
              <div className='message-subjects'>THIS IS A TEST</div>
              <div className='message-subjects'>THIS IS A</div>
              <div className='message-subjects'>THIS IS</div>
              <div className='message-subjects'>THIS</div>
            </div>
          </div> 
        </div>
    )
}

export default Messages

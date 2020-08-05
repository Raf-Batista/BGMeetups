import React from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GroupContainer = () => {
  return <div>

   <div className='d-inline'> 
          <form className=' d-inline'>
              <span className='input-group-addon'>
                  <FontAwesomeIcon
                  icon={faSearch}
                  size="lg"
                  className='search-icon'
                  />
              </span>
              <input type='text' placeholder="Search for groups"/>
          </form>
      </div>
  </div>;
};

export default GroupContainer;

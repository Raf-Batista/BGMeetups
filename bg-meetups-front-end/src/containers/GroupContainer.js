import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Groups from "../components/Groups";

const GroupContainer = () => {    
  const [query, setQuery] = useState('');
  const lowercasedQuery = query.toLowerCase();
  const groups = useSelector(state => state.groups);
  const handleChange = (e) => {
      setQuery(e.target.value);
  }
  const filteredGroups = groups.filter((group) => { 
    if (group.name.toLowerCase().includes(lowercasedQuery)) {
      return group;
    }
  });

  return (
    <div className='container mt-5 text-center'>
        <div className='d-inline'> 
            <form className=' d-inline'>
                <input type='text' name='query' placeholder="Search for groups by name." onChange={handleChange} className='pl-2'/>
                {/* <span className='input-group-addon'>
                    <FontAwesomeIcon
                    icon={faSearch}
                    size="lg"
                    className=''
                    />
                </span> */}
            </form>
        </div>
        <Groups groups={filteredGroups} />
    </div>
  );
};

export default GroupContainer;

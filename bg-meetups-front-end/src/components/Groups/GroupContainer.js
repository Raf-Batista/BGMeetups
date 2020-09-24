import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Groups from "./Groups";

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
      <div className="heading">
        <h2 className="d-block my-3">Groups</h2>
        <span>Search through a list of all board game groups</span>
      </div>
      <div className='d-inline'>
        <form className=' d-inline'>
          <input type='text' name='query' placeholder="Search" onChange={handleChange} className='pl-2 my-2' />
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

import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GroupSearchForm from '../GroupsSearchForm';
import GroupView from "../GroupsView";

const GroupsContainer = () => {
  const [query, setQuery] = useState('');
  const lowercasedQuery = query.toLowerCase();
  let groups = useSelector(state => state.groups);
  groups = !!groups ? groups : [] // If groups is not truthy (nil) due to refresh, set groups to an empty array to prevent an error

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredGroups = groups.filter((group) => {
    if (group.name.toLowerCase().includes(lowercasedQuery)) {
      return group;
    }
  });

  return (
    <>
      <GroupSearchForm handleChange={handleChange} />
      <div className='container text-center'>
        {
          groups.map((group) => <div key={group.id} className="div-background pb-2"><GroupView data-test="link-navbar" className='d-block mt-3' group={group}>{group.name}</GroupView></div>)
        }
      </div>
    </>
  );
};

export default GroupsContainer;

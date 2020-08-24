import React from "react";
import Group from "../components/Group";
import { NavLink } from 'react-router-dom';

const Groups = (props) => {
  let {groups} = props;
  groups = !!groups ? groups : []
  return (
    <div className='container text-center '>
      {
      groups.map((group) => <div key={group.id}><NavLink exact to={`/groups/${group.id}`} data-test="link-navbar" className='d-block mt-3'>{group.name} </NavLink></div>)
      }
    </div>
 
  );
};

export default Groups;

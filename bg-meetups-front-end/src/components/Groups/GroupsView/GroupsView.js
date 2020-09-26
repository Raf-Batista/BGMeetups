import React from "react";
import Group from "../Group";
import { Link } from 'react-router-dom';

const Groups = (props) => {
  let { groups, handleChange } = props;
  
  return (
    <div className='container mt-5 text-center'>
    <div className="heading">
      <h2 className="d-block my-3">Groups</h2>
      <span>Search through a list of all board game groups</span>
    </div>
    <div className='d-inline'>
      <form className=' d-inline'>
        <input type='text' name='query' placeholder="Search" onChange={handleChange} className='pl-2 my-2' />
      </form>
    </div>

    <div className='container text-center'>
      {
        groups.map((group) => <div key={group.id} className="div-background pb-2"><Group data-test="link-navbar" className='d-block mt-3' group={group}>{group.name}</Group></div>)
      }
    </div>
  </div>
  );
};

export default Groups;

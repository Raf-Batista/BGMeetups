import React from "react";
import GroupView from "../GroupView";
import { Link } from 'react-router-dom';

const Groups = (props) => {
  let { groups, handleChange } = props;
  
  return (
    <div className='container text-center'>
      {
        groups.map((group) => <div key={group.id} className="div-background pb-2"><GroupView data-test="link-navbar" className='d-block mt-3' group={group}>{group.name}</GroupView></div>)
      }
    </div>
  );
};

export default Groups;

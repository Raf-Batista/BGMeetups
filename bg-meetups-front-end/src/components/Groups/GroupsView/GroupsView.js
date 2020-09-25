import React from "react";
import Group from "../Group";
import { Link } from 'react-router-dom';

const Groups = (props) => {
  let { groups } = props;
  groups = !!groups ? groups : [] // If groups is not present due to refresh, set groups to an empty array to prevent an error

  return (
    <div className='container text-center'>
      {
        groups.map((group) => <div key={group.id} className="div-background pb-2"><Group data-test="link-navbar" className='d-block mt-3' group={group}>{group.name}</Group></div>)
      }
    </div>

  );
};

export default Groups;

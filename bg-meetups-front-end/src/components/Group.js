import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Group = (props) => {
    const groupId = parseInt(props.match.params.id);
    const groups = useSelector(state => state.groups) || [];
    console.log(groups)
    const group = groups.find((group) => group.id === groupId) || {};
    const user = useSelector(state => state.user);
    const manageLink = <NavLink to={{pathname: `/groups/${group.id}/edit`}}>Manage</NavLink>

    return (
        <div className='container mt-5 text-center'>
            <div>
                Name: {group.name}
            </div>
            <div>
                Purpose: {group.purpose}
            </div>
            <div>
                Members: {group.memberships ? group.memberships.length : 0}
            </div>
            {
                group.owner === user.username ? manageLink : null
            }
        </div>
    )
}

export default Group

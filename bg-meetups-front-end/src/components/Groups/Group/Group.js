import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Group = (props) => {
    const {group} = props;
    const manageLink = <Link to={{pathname: `/groups/${group.id}/edit`}}>Manage</Link>
    const user = useSelector(state => state.user);

    return (
        <div className='container pt-2 text-center'>
            <h3>
                {group.name}
            </h3>
            <h4>
                {group.purpose}
            </h4>
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

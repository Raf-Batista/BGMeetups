import React, { useState } from 'react';
import Member from '../components/Member';
import InvitationForm from '../components/InvitationForm';

const ManageMembers = (props) => {
    let { members, history, userId, groupId } = props;
    members = !!members ? members : []
    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setShowForm(!showForm)
    };

    return (
        <div className='container'>
            <span className='pointer my-4' onClick={handleClick}>Invite to Group</span>
            {showForm ? <InvitationForm history={history} userId={userId} groupId={groupId}/> : members.map(member => <Member member={member} />)}
        </div>
    ) 
}

export default ManageMembers

import React, { useState } from 'react';
import Member from '../GroupMember';
import InvitationForm from '../GroupInvitationForm';

const ManageGroupMembers = (props) => {
    let { members, history, userId, groupId } = props;
    members = !!members ? members : []
    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setShowForm(!showForm)
    };

    return (
        <div className='container'>
            <h4>Members</h4>
            {showForm ?
                <div>
                    <InvitationForm cancel={handleClick} history={history} userId={userId} groupId={groupId} />
                </div> :
                <div>
                    <h6 className='pointer invite-link' onClick={handleClick}>Invite</h6>
                    {members.map(member => <Member member={member} />)}
                </div>
            }
        </div>
    )
}

export default ManageGroupMembers

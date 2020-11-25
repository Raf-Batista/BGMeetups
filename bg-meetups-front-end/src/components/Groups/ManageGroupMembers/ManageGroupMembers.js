import React, { useState } from 'react';
import Member from '../GroupMember';
import InvitationForm from '../GroupInvitationForm';

const ManageGroupMembers = (props) => {
    let { members, history, userId, groupId, meetups } = props;
    members = !!members ? members : []
    meetups = !!meetups ? meetups : []
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
            <h4 className="my-2">Meetups</h4>
            <h6 className='pointer invite-link' onClick={handleClick}>Create Meetup</h6>
            {meetups.map(meetup => meetup.meetup_time)}
        </div>
    )
}

export default ManageGroupMembers

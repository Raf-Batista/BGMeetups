import React, { useState } from 'react';
import Member from '../GroupMember';
import InvitationForm from '../GroupInvitationForm';
import './ManageGroupMembers.css';
import MeetupForm from '../../Meetups/MeetupForm';

const ManageGroupMembers = (props) => {
    let { members, history, userId, groupId, meetups } = props;
    members = !!members ? members : [];
    meetups = !!meetups ? meetups : [];
    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setShowForm(!showForm)
    };

    return (
        <div className='container'>
            <h4>Members</h4>

            {showForm ?
                <>
                    <InvitationForm cancel={handleClick} history={history} userId={userId} groupId={groupId} />
                </> :

                <>
                    <h6 className='pointer invite-link' onClick={handleClick}>Invite</h6>
                    {members.map(member => <Member member={member} />)}
                </>
            }

            <h4 className="my-2">Meetups</h4>            
            <MeetupForm />
            {meetups.map(meetup => meetup.meetup_time)}
        </div>
    )
}

export default ManageGroupMembers;

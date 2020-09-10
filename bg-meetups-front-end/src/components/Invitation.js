import React from 'react';
import acceptInvite from '../async_actions/acceptInvite';
import { useDispatch } from 'react-redux';

const Invitation = (props) => {
    const { invitation, history } = props;
    const { id, from, group_name, invitation_link } = invitation;
    const inviteLink = `${process.env.REACT_APP_URL}/enc/${id}/${invitation_link}`;
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(acceptInvite(id, inviteLink));
        history.push('/invites')
    }

    return (
        <div className='container div-background py-2'>
            <span className='d-block'>{from} has invited you to join the group {group_name}</span>
            <span className='d-block mt-2'>Click the link below or copy and paste the link into the address bar</span>
            <span className='d-block pointer mt-2 invite-link' onClick={handleClick}>{inviteLink}</span>
        </div>
    )
}

export default Invitation

import React from 'react';
import Invitations from '../components/Invitations';
import { useSelector } from 'react-redux';

const InvitationsContainer = () => {
    const invitations = useSelector(state => state.invitations)
    return (
        <div>
            <Invitations invitations={invitations}/>
        </div>
    )
}

export default InvitationsContainer

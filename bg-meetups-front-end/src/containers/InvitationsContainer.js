import React from 'react';
import Invitations from '../components/Invitations';
import { useSelector } from 'react-redux';

const InvitationsContainer = (props) => {
    const { history } = props;
    const invitations = useSelector(state => state.invitations)
    return (
        <div>
            <Invitations invitations={invitations} history={history}/>
        </div>
    )
}

export default InvitationsContainer

import React from 'react';
import Invitation from './Invitation';

const Invitations = (props) => {
    const { invitations } = props
    return (
        <div>
            {invitations.map((invitation) => <Invitation invitation={invitation} />)}
        </div>
    )
}

export default Invitations

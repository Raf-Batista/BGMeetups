import React from 'react';
import Invitation from './Invitation';

const Invitations = (props) => {
    const { invitations, history } = props
    return (
        <div>
            {invitations.map((invitation) => <Invitation invitation={invitation} history={history}/>)}
        </div>
    )
}

export default Invitations

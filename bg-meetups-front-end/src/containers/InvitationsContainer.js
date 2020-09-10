import React from 'react';
import Invitations from '../components/Invitations';
import { useSelector } from 'react-redux';

const InvitationsContainer = (props) => {
    const { history } = props;
    const invitations = useSelector(state => state.invitations)
    return (
        <div>
            <div className="heading text-center mt-5 mb-3">
                <h2 className="d-block my-3">Invitations</h2>
                <span>Any invitations you have received will show up here</span>
            </div>
            <Invitations invitations={invitations} history={history} />
        </div>
    )
}

export default InvitationsContainer

import * as types from '../constants/invitation';

export const sentInvitationRequest = () => ({
    type: types.SENT_INVITATION_REQUEST, 
})

export const receivedInvitationSuccess = (invitation) => ({
    type: types.RECEIVED_INVITATION_SUCCESS, 
    payload: invitation
});

export const sentInvitationFailure = (error) => ({
    type: types.SENT_INVITATION_REQUEST, 
    payload: error
});

export const fetchInvitationsRequest = () => ({
    type: types.FETCH_INVITATIONS_REQUEST
});

export const fetchInvitationsSuccess = (invitations) => ({
    type: types.FETCH_INVITATIONS_SUCCESS,
    payload: invitations
});

export const fetchInvitationsFailure = (error) => ({
    type: types.FETCH_INVITATIONS_FAILURE, 
    payload: error
});

export const acceptInvitationRequest = () => ({
    type: types.ACCEPT_INVITATION_REQUEST
})

export const acceptInvitationSuccess = (invitation) => ({
    type: types.ACCEPT_INVITATION_SUCCESS,
    payload: invitation
})

export const acceptInvitationFailure = (error) => ({
    type: types.ACCEPT_INVITATION_FAILURE, 
    payload: error
})
const invitationsReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_INVITATIONS_SUCCESS": 
            return action.payload
        case "RECEIVED_INVITATION_SUCCESS": 
            return [...state, action.payload] 
        case "ACCEPT_INVITATION_SUCCESS": 
            return state.filter((invitation) => invitation.id !== action.payload.invitation);
        default: 
            return state
    }
}

export default invitationsReducer
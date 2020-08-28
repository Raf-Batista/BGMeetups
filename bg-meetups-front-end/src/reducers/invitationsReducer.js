const invitationsReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_INVITATIONS_SUCCESS": 
            return action.payload
        case "RECEIVED_INVITATION_SUCCESS": 
            return [...state, action.payload] 
        default: 
            return state
    }
}

export default invitationsReducer
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_SIGNUP_SUCCESS": 
      return action.payload;
    case "FETCH_LOGIN_SUCCESS":
      return action.payload;
      case "FETCH_EDIT_SUCCESS":
      return action.payload;
    case "FETCH_LOGOUT_SUCCESS":
      return {};
    case "SENT_MESSAGE_SUCCESS":
      const updatedSentMessages = [...state.sent_messages, action.payload];
      return {...state, sent_messages: updatedSentMessages};
    case "RECEIVED_MESSAGE_SUCCESS":
      const updatedReceivedMessages = [...state.received_messages, action.payload];
      return {...state, received_messages: updatedReceivedMessages};
    case "CREATE_GROUP_SUCCESS": 
      const updatedCreatedGroup = [...state.groups, action.payload];
      return {...state, groups: updatedCreatedGroup};  
    case "EDIT_GROUP_SUCCESS": 
      const updatedGroups = state.groups.map(group => 
        group.id === action.payload.id ? 
        action.payload : 
        group
      ) 
      return {...state, groups: updatedGroups};
    case "ACCEPT_INVITATION_SUCCESS": 
       const addedGroups = [...state.groups, action.payload.group]
        return {...state, groups: addedGroups}
    default:
      return state;
  }
};

export default userReducer;

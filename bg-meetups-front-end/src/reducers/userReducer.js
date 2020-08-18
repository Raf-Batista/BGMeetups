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
    default:
      return state;
  }
};

export default userReducer;

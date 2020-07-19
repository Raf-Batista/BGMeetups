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
    default:
      return state;
  }
};

export default userReducer;

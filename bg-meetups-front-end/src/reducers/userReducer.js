const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_LOGIN_REQUEST":
      return { isFetching: true };
      break;
    case "FETCH_LOGIN_SUCCESS":
      return { user: action.payload, isFetching: false };
      break;
    case "LOGOUT":
      return {};
      break;
    default:
      return state;
  }
};

export default userReducer;

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_LOGIN_REQUEST":
      return { isFetching: true };
    case "FETCH_LOGIN_SUCCESS":
      return { user: action.payload, isFetching: false };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};

export default userReducer;

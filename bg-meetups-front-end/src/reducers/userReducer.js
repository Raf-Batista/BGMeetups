import fetchLogin from "../async_actions/fetchLogin";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_LOGIN_SUCCESS":
      return action.payload;
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};

export default userReducer;

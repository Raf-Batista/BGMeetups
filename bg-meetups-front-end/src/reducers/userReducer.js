const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
      break;
    case "LOGOUT":
      return {};
      break;
    default:
      return state;
  }
};

export default userReducer;

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_USER":
      return action.payload;
      break;
    case "REMOVE_USER":
      return {};
      break;
    default:
      return state;
  }
};

export default userReducer;

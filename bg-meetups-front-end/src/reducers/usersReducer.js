const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD CASE HERE":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default usersReducer;

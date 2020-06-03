const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD CASE HERE":
      return [...state, action.book];

    default:
      return state;
  }
};

export default usersReducer;

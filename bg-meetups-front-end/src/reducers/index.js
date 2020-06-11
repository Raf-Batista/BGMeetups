import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import loggedInReducer from "./loggedInReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  loggedIn: loggedInReducer
});

export default rootReducer;

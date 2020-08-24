import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import userReducer from "./userReducer";
import groupsReducer from "./groupsReducer";
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  groups: groupsReducer,
  loading: loadingReducer,
  error: errorReducer
});

export default rootReducer;

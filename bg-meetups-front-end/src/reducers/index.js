import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import userReducer from "./userReducer";
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  loading: loadingReducer,
  error: errorReducer
});

export default rootReducer;

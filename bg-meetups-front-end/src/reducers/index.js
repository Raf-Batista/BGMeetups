import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import userReducer from "./userReducer";
import groupsReducer from "./groupsReducer";
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import invitationsReducer from './invitationsReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  groups: groupsReducer,
  loading: loadingReducer,
  error: errorReducer,
  invitations: invitationsReducer
});

export default rootReducer;

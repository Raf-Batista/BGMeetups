import * as types from "../constants/users";
import { SUCCESS } from "../constants/requestType";

export const fetchLoginSuccess = (user) => ({
  type: `${types.FETCH_LOGIN}${SUCCESS}`,
  payload: user,
});

export const fetchLoginFailure = (error) => ({
  type: types.FETCH_LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: types.LOGOUT,
});

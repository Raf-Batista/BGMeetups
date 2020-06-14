import * as types from "../constants/user";

export const logout = () => ({
  type: types.LOGOUT,
});

export const fetchLoginRequest = (user) => ({
  type: types.FETCH_LOGIN_REQUEST,
  payload: user,
});

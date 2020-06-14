import * as types from "../constants/user";

export const logout = () => ({
  type: types.LOGOUT,
});

export const fetchLoginRequest = (params) => ({
  type: types.FETCH_LOGIN_REQUEST,
  payload: params,
});

export const fetchLoginSuccess = (user) => ({
  type: types.FETCH_LOGIN_SUCCESS,
  payload: user,
});

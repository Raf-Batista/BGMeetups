import * as types from "../constants/user";

export const fetchLoginRequest = () => ({
  type: types.FETCH_LOGIN_REQUEST,
});

export const fetchLoginSuccess = (user) => ({
  type: types.FETCH_LOGIN_SUCCESS,
  payload: user,
});

export const fetchLoginFailure = (error) => ({
  type: types.FETCH_LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: types.LOGOUT,
});

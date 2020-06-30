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

export const fetchSignupequest = () => ({
  type: types.FETCH_SIGNUP_REQUEST,
});

export const fetchSignupuccess = (user) => ({
  type: types.FETCH_SIGNUP_SUCCESS
  payload: user,
});

export const fetchSignupailure = (error) => ({
  type: types.FETCH_SIGNUP_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: types.LOGOUT,
});

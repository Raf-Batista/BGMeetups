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

export const fetchSignupRequest = () => ({
  type: types.FETCH_SIGNUP_REQUEST,
});

export const fetchSignupSuccess = (user) => ({
  type: types.FETCH_SIGNUP_SUCCESS,
  payload: user,
});

export const fetchSignupFailure = (error) => ({
  type: types.FETCH_SIGNUP_FAILURE,
  payload: error,
});

export const fetchLogoutRequest = () => ({
  type: types.FETCH_LOGOUT_REQUEST,
});

export const fetchLogoutSuccess = () => ({
  type: types.FETCH_LOGOUT_SUCCESS,
});

export const fetchLogoutFailure = (error) => ({
  type: types.FETCH_LOGOUT_FAILURE,
  payload: error,
});

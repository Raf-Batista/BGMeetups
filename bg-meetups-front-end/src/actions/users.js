import * as types from "../constants/users";

export const fetchUsersRequest = () => ({
  type: types.FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (user) => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: user,
});

export const fetchUsersFailure = (error) => ({
  type: types.FETCH_USERS_FAILURE,
  payload: error,
});
import * as types from "../constants/user";

export const logout = () => ({
  type: types.REMOVE_USER,
});

export const fetchUserRequest = (user) => ({
  type: types.FETCH_USER_REQUEST,
  payload: user,
});

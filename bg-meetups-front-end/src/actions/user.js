import * as types from "../constants/user";

export const fetchUserRequest = (user) => ({
  type: types.FETCH_USER_REQUEST,
  payload: user,
});

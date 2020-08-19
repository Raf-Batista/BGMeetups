import * as types from "../constants/group";

export const createGroupRequest = () => ({
  type: types.CREATE_GROUP_REQUEST,
});

export const createGroupSuccess = (group) => ({
  type: types.CREATE_GROUP_SUCCESS,
  payload: group,
});

export const createGroupFailure = (error) => ({
  type: types.CREATE_GROUP_FAILURE,
  payload: error,
});

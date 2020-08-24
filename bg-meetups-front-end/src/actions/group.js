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

export const editGroupRequest = () => ({
  type: types.EDIT_GROUP_REQUEST,
});

export const editGroupSuccess = (group) => ({
  type: types.EDIT_GROUP_SUCCESS,
  payload: group,
});

export const editGroupFailure = (error) => ({
  type: types.EDIT_GROUP_FAILURE,
  payload: error,
});



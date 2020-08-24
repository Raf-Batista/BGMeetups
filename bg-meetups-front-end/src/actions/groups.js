import * as types from '../constants/groups'; 

export const fetchGroupsRequest = () => ({
  type: types.FETCH_GROUPS_REQUEST
});

export const fetchGroupsSuccess = (group) => ({
  type: types.FETCH_GROUPS_SUCCESS,
  payload: group
});

export const fetchGroupsFailure = (error) => ({
  type: types.FETCH_GROUPS_FAILURE,
  payload: error
});
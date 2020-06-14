import { FETCH_USER_REQUEST } from '../constants/user';

export const fetchUserRequest = (user) => ({
    type: FETCH_USER_REQUEST,
    payload: user
});
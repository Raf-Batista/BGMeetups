import { FETCH_USERS_REQUEST } from '../constants/users';

export const fetchUsersRequest = (user) => ({
    type: FETCH_USERS_REQUEST,
    payload: user
})
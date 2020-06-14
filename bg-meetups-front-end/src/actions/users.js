import { ADD_USERS } from '../constants/users';

export const add_users = (user) => ({
    type: ADD_USERS,
    payload: user
})
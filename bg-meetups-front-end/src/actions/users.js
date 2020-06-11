import ADD_USER from '../constants/users';

export const add_user = (user) => ({
    type: ADD_USER,
    payload: user
})
import LOGIN from '../constants/loggedIn';

export const login = (user) => ({
    type: LOGIN,
    payload: user
})
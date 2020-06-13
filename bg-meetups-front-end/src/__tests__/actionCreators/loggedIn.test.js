import * as actions from '../../actions/loggedIn';
import * as types from '../../constants/loggedIn';

describe('actions', () => {
    it('should create an action to log a user in', () => {
        const user = {username: 'test', email: 'test@email.com'}; 
        const expectedAction = {
            type: types.LOGIN,
            payload: user
        };
        expect(actions.login(user)).toEqual(expectedAction);
    });
});
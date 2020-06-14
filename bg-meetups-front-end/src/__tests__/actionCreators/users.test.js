import * as actions from '../../actions/users';
import * as types from '../../constants/users';

describe('actions', () => {
    it('should create an action to fetch users', () => {
        const users = [{username: 'test1'}, {username: 'test2'}];
        const expectedAction = {
            type: types.ADD_USERS,
            payload: users
        };
        expect(actions.add_users(users)).toEqual(expectedAction);
    });
});
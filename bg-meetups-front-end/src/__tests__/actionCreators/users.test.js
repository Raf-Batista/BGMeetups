import * as actions from '../../actions/users';
import * as types from '../../constants/users';

describe('actions', () => {
    it('should create an action to fetch users', () => {
        const users = [{username: 'test1'}, {username: 'test2'}];
        const expectedAction = {
            type: types.FETCH_USERS_REQUEST,
            payload: users
        };
        expect(actions.fetchUsersRequest(users)).toEqual(expectedAction);
    });
});
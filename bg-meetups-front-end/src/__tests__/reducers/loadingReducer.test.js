import loadingReducer from '../../reducers/loadingReducer';

describe('loading reducer', () => {
    it('returns true when action includes REQUEST', () => {
        const expectedResult = {'FETCH_LOGIN': true}
        
        expect(loadingReducer({}, {type: 'FETCH_LOGIN_REQUEST'})).toEqual(expectedResult)
    });
});

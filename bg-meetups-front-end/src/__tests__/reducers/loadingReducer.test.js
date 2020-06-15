import loadingReducer from '../../reducers/loadingReducer';

describe('loading reducer', () => {
    it('returns true when action includes REQUEST', () => {
        const expectedResult = {'FETCH_TEST': true}
        
        expect(loadingReducer({}, {type: 'FETCH_TEST_REQUEST'})).toEqual(expectedResult)
    });
});

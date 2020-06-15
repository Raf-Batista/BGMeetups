import loadingReducer from '../../reducers/loadingReducer';

describe('loading reducer', () => {
    it('returns true when action includes REQUEST', () => {
        const expectedResult = {'FETCH_TEST': true}
        expect(loadingReducer({}, {type: 'FETCH_TEST_REQUEST'})).toEqual(expectedResult)
    });

    it('returns false when action does not include REQUEST', () => {
        const expectedResult = {'FETCH_TEST': false}
        expect(loadingReducer({}, {type: 'FETCH_TEST_SUCCESS'})).toEqual(expectedResult)
        expect(loadingReducer({}, {type: 'FETCH_TEST_FAILURE'})).toEqual(expectedResult)
    });
});

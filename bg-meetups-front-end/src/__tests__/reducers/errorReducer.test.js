import errorReducer from '../../reducers/errorReducer';

describe('error reducer', () => {
    it('returns an error', () => {
        const expectedResult = {'FETCH_TEST': 'error'}
        expect(errorReducer({}, {type: 'FETCH_TEST_FAILURE', payload: 'error'})).toEqual(expectedResult)
    })

    it('returns an empty string when making a request', () => {
        const expectedResult = {'FETCH_TEST': ''}
        expect(errorReducer({}, {type: 'FETCH_TEST_REQUEST'})).toEqual(expectedResult)
    })
});
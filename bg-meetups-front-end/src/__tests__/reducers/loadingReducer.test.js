import loadingReducer from '../../reducers/loadingReducer';

describe('loading reducer', () => {
    it('returns true when action includes REQUEST', () => {
        const test = loadingReducer({}, {type: 'FETCH_LOGIN_REQUEST'}); 

        console.log(test)
    });
});

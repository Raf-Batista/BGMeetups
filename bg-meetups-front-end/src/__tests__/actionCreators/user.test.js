import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../../actions/user";
import * as types from "../../constants/user";
import fetchLogin from "../../async_actions/fetchLogin";
import fetchSignup from "../../async_actions/fetchSignup";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetch.resetMocks();
  });

  it("creates a request and success action when signing up", () => {
    const params = { username: 'test', email: "test@email.com", password: "test123" };
    const user = { username: "test", email: "test@email.com" };
    const expectedAction = [
      { type: types.FETCH_SIGNUP_REQUEST },
      { type: types.FETCH_SIGNUP_SUCCESS, payload: user },
    ];
    const store = mockStore();

    fetch.mockResponseOnce(JSON.stringify(user));

    return store.dispatch(fetchSignup(params)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedAction);
    });
  });

  it("creates a request and success action when logging in", () => {
    const params = { email: "test@email.com", password: "test123" };
    const user = { username: "test", email: "test@email.com" };
    const expectedAction = [
      { type: types.FETCH_LOGIN_REQUEST },
      { type: types.FETCH_LOGIN_SUCCESS, payload: user },
    ];
    const store = mockStore();

    fetch.mockResponseOnce(JSON.stringify(user));

    return store.dispatch(fetchLogin(params)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedAction);
    });
  });
});

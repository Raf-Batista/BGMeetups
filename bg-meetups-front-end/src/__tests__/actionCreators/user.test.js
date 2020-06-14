import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../../actions/user";
import * as types from "../../constants/user";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetch.resetMocks();
  });

  it("creates a request and success action", () => {
    const params = { email: "test@email.com", password: "test123" };

    const expectedActions = [
      {
        type: types.FETCH_LOGIN_REQUEST,
        payload: { email: "test@email.com", password: "test123" },
      },
      {
        type: types.FETCH_LOGIN_SUCCESS,
        payload: { username: "test", email: "test@email.com" },
      },
    ];
    const store = mockStore({ user: {} });

    fetch.mockResponseOnce(JSON.stringify({ data: "12345" }));
    fetch("https://google.com").then((res) =>
      res.json().then((res) => console.log(res))
    );
  });
});

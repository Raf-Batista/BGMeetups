import * as actions from "../../actions/user";
import * as types from "../../constants/user";

describe("actions", () => {
  it("should create an action to log a user in", () => {
    const user = { username: "test", email: "test@email.com" };
    const expectedAction = {
      type: types.FETCH_LOGIN_REQUEST,
      payload: user,
    };
    expect(actions.fetchLoginRequest(user)).toEqual(expectedAction);
  });
  it("should create an action to log a user out", () => {
    const expectedAction = {
      type: types.LOGOUT,
    };
    expect(actions.logout()).toEqual(expectedAction);
  });
});

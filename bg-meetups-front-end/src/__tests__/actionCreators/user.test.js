import * as actions from "../../actions/user";
import * as types from "../../constants/user";

describe("actions", () => {
  it("should create an action to log a user in", () => {
    const user = { username: "test", email: "test@email.com" };
    const expectedAction = {
      type: types.FETCH_USER_REQUEST,
      payload: user,
    };
    expect(actions.fetchUserRequest(user)).toEqual(expectedAction);
  });
  it("should create an action to log a user out", () => {
    const expectedAction = {
      type: types.REMOVE_USER,
    };
    expect(actions.logout()).toEqual(expectedAction);
  });
});

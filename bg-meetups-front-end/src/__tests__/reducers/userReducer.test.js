import userReducer from "../../reducers/userReducer";
import * as types from "../../constants/user";

describe("user reducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual({});
  });

  it("should add a user to the state when fetch signup request is successful", () => {
    const user = { username: "test", email: "test@email.com" };
    const expectedResult = user;
    expect(
      userReducer({}, { type: types.FETCH_SIGNUP_SUCCESS, payload: user })
    ).toEqual(expectedResult);
  });

  it("should add a user to the state when fetch login request is successful", () => {
    const user = { username: "test", email: "test@email.com" };
    const expectedResult = user;
    expect(
      userReducer({}, { type: types.FETCH_LOGIN_SUCCESS, payload: user })
    ).toEqual(expectedResult);
  });

  it("should remove a user from the state", () => {
    const user = { username: "test", email: "test@email.com" };
    expect(userReducer({ user }, { type: types.FETCH_LOGOUT_SUCCESS })).toEqual({});
  });
});

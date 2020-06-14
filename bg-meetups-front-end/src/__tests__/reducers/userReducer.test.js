import userReducer from "../../reducers/userReducer";
import * as types from "../../constants/user";

describe("user reducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual({});
  });
  it("should add a user to the state", () => {
    const user = { username: "test", email: "test@email.com" };
    expect(userReducer({}, { type: types.ADD_USER, payload: user })).toEqual(
      user
    );
  });
  it("should remove a user from the state", () => {
    const user = { username: "test", email: "test@email.com" };
    expect(userReducer({ user }, { type: types.REMOVE_USER })).toEqual({});
  });
});

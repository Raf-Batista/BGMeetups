import usersReducer from "../../reducers/usersReducer";
import * as types from "../../constants/users";

describe("users reducer", () => {
  it("should return initial state", () => {
    expect(usersReducer(undefined, {})).toEqual([]);
  });
  it("should add a user to the state", () => {
    const users = [{ username: "1" }, { username: "2" }];
    const user = { username: "3" };
    expect(
      usersReducer(users, { type: types.ADD_USER, payload: user })
    ).toEqual(users.concat(user));
  });
});

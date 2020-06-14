import usersReducer from "../../reducers/usersReducer";
import * as types from "../../constants/users";

describe("users reducer", () => {
  it("should return initial state", () => {
    expect(usersReducer(undefined, {})).toEqual([]);
  });
  it("should add users to the state", () => {
    const users = [{ username: "1" }, { username: "2" }];
    expect(usersReducer([], { type: types.ADD_USERS, payload: users })).toEqual(
      users
    );
  });
});

import usersReducer from "../../reducers/usersReducer";
import * as types from "../../constants/users";

describe("users reducer", () => {
  it("should return initial state", () => {
    expect(usersReducer(undefined, {})).toEqual([]);
  });
});

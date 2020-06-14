import userReducer from "../../reducers/userReducer";
import * as types from "../../constants/user";

describe("user reducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual({});
  });
});

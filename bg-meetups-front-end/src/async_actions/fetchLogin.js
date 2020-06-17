import * as actions from "../actions/user";
import { SUCCESS } from "../constants/requestType";
const URL = "example.com";

const fetchLogin = (params) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(params),
      });
      const result = await response.json();
      dispatch(actions.fetchLoginSuccess(result));
    } catch (error) {
      console.log(error);
      // dispatch(actions.fetchLoginFailure(error));
    }
  };
};

export default fetchLogin;

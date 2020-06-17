import * as actions from "../actions/user";
const URL = "example.com";

const fetchLogin = (params) => {
  return async (dispatch) => {
    try {
      dispatch(actions.fetchLoginRequest());
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
      dispatch(actions.fetchLoginFailure(error));
    }
  };
};

export default fetchLogin;

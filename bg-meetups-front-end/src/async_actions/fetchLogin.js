import * as types from "../constants/user";

const fetchLogin = (params) => {
  return async (dispatch) => {
    try {
      dispatch(types.FETCH_LOGIN_REQUEST);
      const response = await fetch(URL, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(params),
      });
      const result = await response.json();
      dispatch(types.FETCH_LOGIN_SUCCESS);
    } catch (error) {
      console.log(error);
      dispatch(types.FETCH_LOGIN_FAILURE);
    }
  };
};

export default fetchLogin;

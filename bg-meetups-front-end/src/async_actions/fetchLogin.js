import * as actions from "../actions/user";
const URL = `${process.env.REACT_APP_URL}/sessions`;

const fetchLogin = (params) => {
  return async (dispatch) => {
    
    dispatch(actions.fetchLoginRequest());
    
    try {
      const response = await fetch(URL, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(params),
      });
      
      const result = await response.json();
      
      if(!result.error) return dispatch(actions.fetchLoginSuccess(result));
      
      dispatch(actions.fetchLoginFailure(result.error));
    
    } catch (error) {
      console.log(error);
    }
  };
};

export default fetchLogin;

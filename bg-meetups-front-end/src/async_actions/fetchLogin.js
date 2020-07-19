import * as actions from "../actions/user";
import { toast } from 'react-toastify';

const URL = `${process.env.REACT_APP_URL}/sessions`;

const displayErrors = (errorsArray) => {
  errorsArray.forEach(error => {
      toast.error(error, {
          position: toast.POSITION.TOP_CENTER
      });
  });
};

const fetchLogin = (params) => {
  return async (dispatch) => {
    
    dispatch(actions.fetchLoginRequest());

    try {
      const response = await fetch(URL, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        method: "POST",
        body: JSON.stringify(params),
      });
      
      const result = await response.json();
      
      if(!result.error) {
        toast.success("Welcome Back!", {position: toast.POSITION.TOP_CENTER});
        return dispatch(actions.fetchLoginSuccess(result));
      }

      displayErrors(result.error);
      dispatch(actions.fetchLoginFailure(result.error));
    
    } catch (error) {
      console.log(error);
    }
  };
};

export default fetchLogin;

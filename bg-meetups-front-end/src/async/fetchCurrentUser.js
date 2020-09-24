import * as actions from "../actions/user";
const URL = `${process.env.REACT_APP_URL}/current_user`;

const fetchCurrentUser = () => {
  return async (dispatch) => {
      dispatch(actions.fetchLoginRequest());
        try {
          const response = await fetch(URL,{
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
          });
            
          const result = await response.json();
            
          if(!result.error) return dispatch(actions.fetchLoginSuccess(result));

          dispatch(actions.fetchLoginFailure(result.error));        
        } catch (error) {
            console.log(error);
        }
    }
}

  export default fetchCurrentUser;
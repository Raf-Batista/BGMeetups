import * as actions from "../actions/message";
import { toast } from "react-toastify";


const createMessage = (params, userId) => {
  return async (dispatch) => {
    const URL = `${process.env.REACT_APP_URL}/users/${userId}/messages`;
    dispatch(actions.sentMessageRequest());
    try {
      const response = await fetch(URL,{
        credentials: "include",
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }, 
        body: JSON.stringify(params)
      });
        
      const result = await response.json();
        
      if(!result.error) {
        toast.success("Message Sent", {position: toast.POSITION.TOP_CENTER});
        return dispatch(actions.sentMessageSuccess(result));
      }

      dispatch(actions.sentMessageFailure(result.error))
      toast.error(result.error, {position: toast.POSITION.TOP_CENTER});
    } catch (error) {
        console.log(error);
    }
  }
 
    
}

  export default createMessage;
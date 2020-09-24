import * as actions from "../actions/invitation";
import { toast } from "react-toastify";


const createInvitation = (params) => {
  return async (dispatch) => {
    const URL = `${process.env.REACT_APP_URL}/invitations`;
    dispatch(actions.sentInvitationRequest());
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
      console.log(result)
      if(!result.error) {
       return toast.success("Invitation Sent", {position: toast.POSITION.TOP_CENTER});
       // return dispatch(actions.sentMessageSuccess(result));
      }

      dispatch(actions.sentInvitationFailure(result.error))
      toast.error(result.error, {position: toast.POSITION.TOP_CENTER});
    } catch (error) {
        console.log(error);
    }
  }
 
    
}

  export default createInvitation;
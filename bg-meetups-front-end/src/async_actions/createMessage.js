import * as actions from "../actions/user";
import { toast } from "react-toastify";


const createMessage = async (params, userId) => {
  const URL = `${process.env.REACT_APP_URL}/users/${userId}/messages`;

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
            
          if(!result.error) toast.success("Message Sent", {position: toast.POSITION.TOP_CENTER});

          if(result.error) toast.error(result.error, {position: toast.POSITION.TOP_CENTER});
        } catch (error) {
            console.log(error);
        }
    
}

  export default createMessage;
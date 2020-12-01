import * as actions from '../constants/meetups';
import { toast } from 'react-toastify';

const URL = `${process.env.REACT_APP_URL}/sessions`;

const createMeetup = params => {
    return async (dispatch) => {
        dispatch(actions.FETCH_MEETUP_REQUEST); 

        try {
            const response = await fetch(URL, {
                credentials: "include", 
                headers: {
                    "Content-Type": "application/json", 
                    "Accept": "application/json"
                }, 
                method: "POST", 
                body: JSON.stringify(params)
            });

            const result = await response.json();

            if(!result.error) {
                toast.success("Meetup Created", {position: toast.POSITION.TOP_CENTER}); 
                dispatch(actions.FETCH_MEETUP_SUCCESS(result));
            } 

            toast.error(result.error, {
                position: toast.POSITION.TOP_CENTER
            });
        
            dispatch(actions.fetchLoginFailure(result.error));

        } catch (error) {
            console.log(error);
        }
    }
}

export default createMeetup;
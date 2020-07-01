import * as actions from "../actions/user";
import { toast } from 'react-toastify';

const URL = `${process.env.REACT_APP_URL}/users`;

const displayErrors = (errorsArray) => {
    errorsArray.forEach(error => {
        toast.error(error, {
            position: toast.POSITION.TOP_CENTER
        });
    });
};

const fetchSignup = (params) => {
    return async (dispatch) => {
        
        dispatch(actions.fetchSignupRequest());
        
        try {
            const response = await fetch(URL, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(params)
            });

            const result = await response.json();

            if(!result.errors) return dispatch(actions.fetchSignupSuccess(result));

            dispatch(actions.fetchSignupFailure(result.errors));
            displayErrors(result.errors);
            console.log(result.errors)
        
        } catch (error) {
            console.log(error)
        }
    }
};

export default fetchSignup;
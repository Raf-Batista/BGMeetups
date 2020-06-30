import * as actions from "../actions/user";
const URL = `${process.env.REACT_APP_URL}/users`;

const fetchSignup = (params) => {
    return async (dispatch) => {
        
        dispatch(actions.fetchSignupSuccess());
        
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

            dispatch(actions.fetchSignupFailure(result.errors))
        
        } catch (error) {
            console.log(error)
        }
    }
};

export default fetchSignup;
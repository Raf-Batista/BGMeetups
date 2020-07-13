import * as actions from '../actions/user';
import { toast } from 'react-toastify';

const URL = `${process.env.REACT_APP_URL}/logout`;

const fetchLogout = () => {
    return async (dispatch) => {
        dispatch(actions.fetchLogoutRequest());

        try {
            const request = await fetch(URL, {
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                },
                method: 'DELETE'
            });
            toast.success("You have logged out", {position: toast.POSITION.TOP_CENTER});
            return dispatch(actions.fetchLogoutSuccess());
        } catch (error) {
            console.log(error);
        }
    } 
}

export default fetchLogout;
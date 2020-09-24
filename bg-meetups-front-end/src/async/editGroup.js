import * as actions from "../actions/group";
import { toast } from 'react-toastify';


const editGroup = (params) => {
    return async (dispatch) => {
        try {
            const URL = `${process.env.REACT_APP_URL}/users/${params.user_id}/groups/${params.group_id}`;
            const response = await fetch(URL, {
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                method: 'PATCH',
                body: JSON.stringify(params),

            });

            const result = await response.json();
            if (!result.error) {
                toast.success("Group updated succesfully", {position: toast.POSITION.TOP_CENTER});
                return dispatch(actions.editGroupSuccess(result));
            }

            dispatch(actions.editGroupFailure(result.error));
        } catch (error) {
            console.log(error);
        }
    }
}

export default editGroup;
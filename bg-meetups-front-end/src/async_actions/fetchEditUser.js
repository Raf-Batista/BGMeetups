import * as actions from "../actions/user";
import { toast } from 'react-toastify';

const URL = `${process.env.REACT_APP_URL}/users`;

// const displayErrors = (errorsArray) => {
//     errorsArray.forEach(error => {
//         toast.error(error, {
//             position: toast.POSITION.TOP_CENTER
//         });
//     });
// };

const fetchEditUser = (params) => {
    return async (dispatch) => {

        dispatch(actions.fetchEditRequest());

        try {
            const response = await fetch(`${URL}/${params.id}`, {
                credentials: "include",
                headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                },
                method: "PATCH",
                body: JSON.stringify(params),
            });

            const result = await response.json();

            if(!result.error) {
                toast.success("Edit Successful", {position: toast.POSITION.TOP_CENTER});
                dispatch(actions.fetchEditSuccess(result));
            }

            toast.error(result.error, {
                position: toast.POSITION.TOP_CENTER
            });

            dispatch(actions.fetchEditFailure(result.error));
        } catch (error) {
            console.log(error);
        }
    }
}

export default fetchEditUser;
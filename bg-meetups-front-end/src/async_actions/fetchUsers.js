import * as actions from "../actions/users";

const URL = `${process.env.REACT_APP_URL}/users`;

const fetchUsers = () => {
    return async (dispatch) => {
        dispatch(actions.fetchUsersRequest());

        try {
            const response = await fetch(URL, {
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });

            const result = await response.json();

            if(!result.errors) return dispatch(actions.fetchUsersSuccess(result));

            dispatch(actions.fetchUsersFailure(result.errors));
        } catch (error) {
            console.log(error)
        }
    }
};

export default fetchUsers;
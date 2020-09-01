import * as actions from "../actions/invitation";

const fetchInvitations = () => {
    return async (dispatch) => {
        dispatch(actions.fetchInvitationsRequest());

        const URL = `${process.env.REACT_APP_URL}/invitations`;

        try {
            const response = await fetch(URL, {
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
            });

            const result = await response.json();

            if (!result.error) return dispatch(actions.fetchInvitationsSuccess(result));

            dispatch(actions.fetchInvitationsFailure(result.error));
        } catch (error) {
            console.log(error)
        }
    }
}

export default fetchInvitations;
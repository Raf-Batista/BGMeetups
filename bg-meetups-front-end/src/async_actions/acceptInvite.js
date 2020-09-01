import * as actions from "../actions/invitation";
import { toast } from "react-toastify";

const acceptInvite = (id, inviteLink) => {
    return async (dispatch) => {
        try {
            dispatch(actions.acceptInvitationRequest())
            const response = await fetch(inviteLink, {
                credentials: "include",
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
            })

            const result = await response.json();

            if(!result.error) {
                toast.success("Accepted Invite", {
                    position: toast.POSITION.TOP_CENTER,
                  });
                return dispatch(actions.acceptInvitationSuccess(result))
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default acceptInvite;
import * as actions from "../actions/group";
import { toast } from "react-toastify";

const createGroup = (params, userId) => {
  return async (dispatch) => {
    try {
      dispatch(actions.createGroupRequest());
      const URL = `${process.env.REACT_APP_URL}/users/${userId}/groups`;
      const response = await fetch(URL, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(params),
      });

      const result = await response.json();
      if (!result.error) {
        toast.success("Group Created", {
          position: toast.POSITION.TOP_CENTER,
        });

        return dispatch(actions.createGroupSuccess(result));
      }

      dispatch(actions.createGroupFailure(result.error));
    } catch (error) {
      console.log(error);
    }
  };
};

export default createGroup;
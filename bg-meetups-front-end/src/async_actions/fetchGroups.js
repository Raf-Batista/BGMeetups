import * as actions from '../actions/groups';

const URL = `${process.env.REACT_APP_URL}/groups`;

const fetchGroups = () => {
    return async (dispatch) => {
        dispatch(actions.fetchGroupsRequest());
        try {
            const response = await fetch(URL, {
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
              },
            });

            const result = await response.json();
            if(!result.error) return dispatch(actions.fetchGroupsSuccess(result)); 

            dispatch(actions.fetchGroupsFailure(result.error));
        } catch (error) {
            console.log(error);
        }
    }
}

export default fetchGroups;
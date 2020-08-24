const { bindActionCreators } = require("redux");

const groupsReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_GROUPS_SUCCESS": 
          return action.payload
        case "CREATE_GROUP_SUCCESS": 
          return [...state, action.payload];
        case "EDIT_GROUP_SUCCESS": 
          return state.map(group => 
            group.id === action.payload.id ? 
            action.payload : 
            group
          ) 
        default: 
          return state
    }
}

export default groupsReducer
const errorReducer = (state = {}, action) => {
    const { type, payload } = action;
    const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);
  
    if (!matches) return state;
    console.log(matches)
    const [, requestName, requestState] = matches;
    return {
      ...state,
      [requestName]: requestState === 'FAILURE' ? payload : '',
    };
  };

  export default errorReducer;

    /* 
    Link to article for this loading/error reducer pattern 

    https://medium.com/stashaway-engineering/react-redux-tips-better-way-to-handle-loading-flags-in-your-reducers-afda42a804c6
  */
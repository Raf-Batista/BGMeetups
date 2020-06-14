const loadingReducer = (state = {}, action) => {
    const { type } = action;
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);
    
    if (!matches) return state;  
    
    const [, requestName, requestState] = matches;
    return {
      ...state,
      [requestName]: requestState === 'REQUEST',
    };
  };

  export default loadingReducer;
  /* 
    Link to article for this loading reducer pattern 

    https://medium.com/stashaway-engineering/react-redux-tips-better-way-to-handle-loading-flags-in-your-reducers-afda42a804c6
  */
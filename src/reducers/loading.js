const INITIAL_STATE = {
    loadingStack: [],
};

const search = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'START_LOADING': {
            const loadingStack = state.loadingStack.concat(action.payload);
            return {
                ...state,
                loadingStack,
            };
        }
        case 'END_LOADING': {
            const loadingStack = state.loadingStack.filter((id) => id !== action.payload);
            return {
                ...state,
                loadingStack,
            };
        }
        default:
            return state;
    }
};

export default search;

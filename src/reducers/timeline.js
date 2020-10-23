const INITIAL_STATE = {
    timeline: [],
};
const search = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_TIMELINE_DATA':
            return {
                ...state,
                timeline: action.payload,
            };
        default:
            return state;
    }
};

export default search;

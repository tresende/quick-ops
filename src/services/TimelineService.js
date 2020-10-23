import getTimelineData from '../actions/timeline';

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

const TimelineService = {
    getTimelineData: () => async (dispatch) => {
        const response = await fetch(`${BASE_API_URL}/timeline`);
        const data = await response.json();
        dispatch(getTimelineData(data.content));
        return data.content;
    },
};

export default TimelineService;

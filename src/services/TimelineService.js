import getTimelineData from '../actions/timeline';

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

const TimelineService = {
    getTimelineData: () => async (dispatch) => {
        const response = await fetch(`${BASE_API_URL}/timeline`);
        const data = await response.json();
        let timeLine = data.content;
        if (timeLine) {
            timeLine = timeLine.sort((a, b) => a.cardDate + b.cardDate);
        }
        dispatch(getTimelineData(timeLine));
        return timeLine;
    },
};

export default TimelineService;

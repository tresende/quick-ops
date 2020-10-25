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

    formatTypeMessage: (request) => {
        switch (request.cardType) {
            case 'EXPENSE':
                return 'Hotel';
            case 'ACCOUNTABILITY_SUBMITTED':
            case 'ACCOUNTABILITY_CREATED':
                return `Solicitação concluída por ${request?.author?.name}`;
            case 'EVALUATION':
                return `Aprovação da solicitação por ${request?.author?.name}`;
            default:
                return '';
        }
    },

    formatSummaryText: (request) => {
        switch (request.cardType) {
            case 'EXPENSE':
                return 'Ver Recibo';
            case 'EVALUATION':
                return 'Ver Aprovações';
            default:
                return '';
        }
    },
};

export default TimelineService;

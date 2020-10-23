export default function getTimelineData(payload) {
    return {
        type: 'GET_TIMELINE_DATA',
        payload,
    };
}

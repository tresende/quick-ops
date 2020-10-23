export default function getHeaderData(payload) {
    return {
        type: 'GET_HEADER_DATA',
        payload,
    };
}

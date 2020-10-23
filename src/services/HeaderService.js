const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

const HeaderService = {
    getTimelineData: async () => {
        const response = await fetch(`${BASE_API_URL}/header`);
        const data = await response.json();
        return data;
    },
};

export default HeaderService;

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

const SidebarService = {
    getSidebarData: async () => {
        const response = await fetch(`${BASE_API_URL}/sidebar`);
        const data = await response.json();
        return data.content;
    },
};

export default SidebarService;

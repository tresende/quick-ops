const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

const HeaderService = {
    getBaseModel: () => ({
            expenseTypeCode: null,
            currencyCode: null,
            amountSpent: null,
            amountTotal: null,
            notes: null,
            resourceUrl: null,
            cardDate: null,
        }),
    validate: (model) => {
        for (const property in model) {
            if (!model[property]) return false;
        }
        return true;
    },
    save: async (model) => {
        const response = await fetch(`${BASE_API_URL}/expense/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(model),
        });
        const data = await response.json();
        return data;
    },
};

export default HeaderService;

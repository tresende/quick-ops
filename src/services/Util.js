import ptBR from '../i18n/ptBR.json';

const getCurrentLanguage = () => {
    if (navigator.languages !== undefined) {
        return navigator.languages[0];
    }
    return navigator.language;
};

const formatDate = (value) => {
    if (!value) return '';
    return new Intl.DateTimeFormat(getCurrentLanguage()).format(new Date(value));
};

const formatCurrency = (number, currency) => {
    if (!number && number !== 0) return '';
    return new Intl.NumberFormat(getCurrentLanguage(), {
        style: 'currency',
        currency,
    }).format(number);
};

const getTranslate = (key) => ptBR[key] || key;

const generateUniqueId = () => Math.random().toString(36).substr(2, 9);

export {
    getTranslate,
    formatDate,
    formatCurrency,
    generateUniqueId,
};

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

const getTranslate = (key) => ptBR[key];

export {
    getTranslate,
    formatDate,
};

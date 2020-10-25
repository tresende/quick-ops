const config = {
    mixins: {
        center: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        flexColumn: {
            flexDirection: 'column',
        },
        formContainer: {
            marginBottom: 8,
        },
        card: {
            width: '100%',
            minHeight: 154,
            borderRadius: 8,
            marginBottom: 16,
            backgroundColor: 'white',
        },
    },
    typography: {
        fontFamily: '"Nunito Sans", "Roboto", "Arial", sans-serif',
    },
    palette: {
        background: {
            default: '#f4f6fa',
        },
    },
    layout: {
        menuWidth: 88,
        color: '#053d4e',
        defaultBorderRadius: 8,
    },
};

export default config;

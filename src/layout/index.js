import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: red[500],
        },
    },
});

const Layout = ({ children }) => (
    <ThemeProvider theme={mainTheme}>
        Begin Layout
        <div>{children}</div>
            end Layout
    </ThemeProvider>
);

Layout.propTypes = {
    children: PropTypes.object.isRequired,
};

export default Layout;

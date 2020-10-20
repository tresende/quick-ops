import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Breadcrumb from '../components/Breadcrumb';
import themeConfig from './themeConfig';
import 'typeface-nunito-sans';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: '64px 27px',
    },
}));

const Layout = (props) => {
    const classes = useStyles();
    const mainTheme = createMuiTheme(themeConfig);

    return (
        <ThemeProvider theme={mainTheme}>
            <CssBaseline />
            <div className={classes.root}>
                <Header />
                <Menu />
                <main className={classes.content}>
                    <Breadcrumb />
                    {props.children}
                </main>
            </div>
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.object.isRequired,
};

export default Layout;

import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        fontSize: 16,
        color: '#51c1c3',
    },
    current: {
        color: '#5f6772',
    },
}));

const Breadcrumb = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <span>Dasboard / / QuickOps / </span>
            <span className={classes.current}>Current</span>
        </Container>
    );
};

export default Breadcrumb;

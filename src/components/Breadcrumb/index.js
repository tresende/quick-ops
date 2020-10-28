import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import TextTranslated from '../TextTranslated';

const useStyles = makeStyles(() => ({
    root: {
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
            <span><TextTranslated code="breadcrumbBase" /></span>
            <span className={classes.current}><TextTranslated code="breadcrumbCurrent" /></span>
        </Container>
    );
};

export default Breadcrumb;

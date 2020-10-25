/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
        padding: 24,
    },
    title: {
        color: '#353a40',
        fontWeight: 'bold',
    },
}));

const Form = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.title}>Form</div>
        </div>
    );
};

export default Form;

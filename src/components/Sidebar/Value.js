import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 24,
        width: '80%',
        height: 88,
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        borderBottom: '1px solid #f0f3f7',
    },
    title: {
        color: '#6b7480',
    },
    subTitle: {
        fontSize: '1.5rem',
        color: '#053d4e',
    },
}));

const Status = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.title}>VALOR A RECEBER</div>
            <div className={classes.subTitle}>-</div>
        </div>
    );
};

export default Status;

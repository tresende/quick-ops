import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 88,
        borderRadius: 6,
        border: 'solid 1px #009d43',
        backgroundColor: '#edfff5',
        ...theme.mixins.center,
        flexDirection: 'column',
    },
    title: {
        color: '#006e2f',
    },
    subTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#009d43',
    },
}));

const Status = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.title}>Status</div>
            <div className={classes.subTitle}>Concluído</div>
        </div>
    );
};

export default Status;

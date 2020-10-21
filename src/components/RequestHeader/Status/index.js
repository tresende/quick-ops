import React from 'react';
import { makeStyles } from '@material-ui/core';
import { FaGraduationCap } from 'react-icons/fa';

const useStyles = makeStyles(() => ({
    root: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
    },
    text: {
        fontWeight: 'bold',
        maxWidth: 240,
    },
}));

const Status = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div><FaGraduationCap size="16" /></div>
            <div className={classes.text}>Esta solicitação será paga com o Budget de educação / confraternização.</div>
        </div>
    );
};

export default Status;

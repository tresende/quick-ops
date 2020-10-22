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
        marginTop: 8,
        color: '#545b64',
    },
    icon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: 64,
        height: 64,
        backgroundColor: '#e6fff0',
        borderRadius: '50%',
    },
}));

const Status = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.icon}><FaGraduationCap color="#00c76a" size="24" /></div>
            <div className={classes.text}>21/05/2019</div>
        </div>
    );
};

export default Status;

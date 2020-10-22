import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'left',
    },
    title: {
        fontSize: '.7rem',
        textTransform: 'uppercase',
        color: '#d0d3d6',
    },
    text: {
        fontSize: '.8rem',
    },
    badge: {
        border: '1px solid #d6342c',
        backgroundColor: '#fbeaea',
        textAlign: 'center',
        display: 'inline-block',
        borderRadius: 12,
        fontSize: '.8rem',
        color: '#d6342c',
        padding: '0 1em',
    },
}));

const Status = ({ text }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <div className={classes.title}>Status</div>
                <div className={classes.badge}>Aprovado</div>
                <div className={classes.text}>{text}</div>
            </div>
        </div>
    );
};

Status.propTypes = {
    text: PropTypes.string,
};

export default Status;

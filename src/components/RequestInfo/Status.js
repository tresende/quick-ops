import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
        ...theme.mixins.center,
        flexDirection: 'column',
        textAlign: 'left',
        alignItems: 'flex-start',
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
        textAlign: 'center',
        display: 'inline-block',
        borderRadius: 12,
        fontSize: '.6rem',
        fontWeight: 'bold',
        padding: '0 1em',
    },
    success: {
        border: '1px solid #03a046',
        backgroundColor: '#e6fff0',
        color: '#03a046',
    },
    error: {
        border: '1px solid #d6342c',
        backgroundColor: '#fbeaea',
        color: '#d6342c',
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

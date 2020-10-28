import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { getTranslate } from '../../services/Util';

const useStyles = makeStyles((theme) => ({
    root: {
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
    SUCCESS: {
        border: '1px solid #03a046',
        backgroundColor: '#e6fff0',
        color: '#03a046',
    },
    ERROR: {
        border: '1px solid #d6342c',
        backgroundColor: '#fbeaea',
        color: '#d6342c',
    },
    PENDING: {
        border: '1px solid #1067ba',
        backgroundColor: '#e9f0fd',
        color: '#1067ba',
    },
}));

const Status = ({ request }) => {
    const classes = useStyles();
    if (!request.status) { return null; }

    const statusClass = [classes.badge, classes[request.status]].join(' ');
    const label = getTranslate('status');

    return (
        <div className={classes.root}>
            <div>
                <div className={classes.title}>{label}</div>
                <div className={statusClass}>{getTranslate(request.status)}</div>
            </div>
        </div>
    );
};

Status.propTypes = {
    request: PropTypes.object.isRequired,
};

export default Status;

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
        color: '#545b64',
    },
    text: {
        fontSize: '1.2em',
        fontWeight: 'bold',
    },
}));

const Info = ({ title, text }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <div className={classes.title}>{title}</div>
                <div className={classes.text}>{text}</div>
            </div>
        </div>
    );
};

Info.propTypes = {
    title: PropTypes.object.isRequired,
    text: PropTypes.object.isRequired,
};

export default Info;

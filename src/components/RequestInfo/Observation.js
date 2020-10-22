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
        color: '#d0d3d6',
    },
    text: {
        fontSize: '.8rem',
    },
}));

const Observation = ({ text }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <div className={classes.title}>OBSERVAÇÃO</div>
                <div className={classes.text}>{text}</div>
            </div>
        </div>
    );
};

Observation.propTypes = {
    text: PropTypes.string,
};

export default Observation;

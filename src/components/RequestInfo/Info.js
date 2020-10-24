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
        color: '#d0d3d6',
        fontSize: '.7rem',
        textTransform: 'uppercase',
    },
    text: {
        fontSize: '1.2em',
        fontWeight: 'bold',
    },
}));

const Info = ({ title, type, text }) => {
    if (!type) { return null; }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <div className={classes.title}>{title}</div>
                <div className={classes.text}>{type}</div>
                <div className={classes.info}>{text}</div>
            </div>
        </div>
    );
};

Info.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string,
};

export default Info;

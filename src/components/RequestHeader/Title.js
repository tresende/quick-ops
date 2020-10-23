import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { FaEdit } from 'react-icons/fa';

const useStyles = makeStyles(() => ({
    root: {
        flex: 1,
        display: 'flex',
        fontWeight: 'bold',
        justifyContent: 'space-between',
        fontSize: '1.2rem',
        minHeight: 48,
    },
    icon: {
        cursor: 'pointer',
    },
}));

const Title = ({ text }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>{text}</div>
            <FaEdit className={classes.icon} size="20" />
        </div>
    );
};

Title.propTypes = {
    text: PropTypes.string,
};

export default Title;

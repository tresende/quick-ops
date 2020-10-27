import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'rgb(97, 26, 21)',
        backgroundColor: 'rgb(253, 236, 234)',
        padding: 8,
        marginBottom: 8,
        borderRadius: theme?.layout?.defaultBorderRadius,
        border: '1px solid rgb(97, 26, 21)',
    },
}));

const ErrorMessage = ({ text, opened }) => {
    if (!opened) return null;
    const [show, setShow] = useState(true);
    const classes = useStyles();
    setTimeout(() => setShow(false), 5000);
    return show ? <div className={classes.root}>{text}</div> : null;
};

ErrorMessage.propTypes = {
    text: PropTypes.string.isRequired,
    opened: PropTypes.bool.isRequired,
};

export default ErrorMessage;

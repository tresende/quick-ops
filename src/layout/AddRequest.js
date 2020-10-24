import React from 'react';
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

const AddRequest = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FaEdit className={classes.icon} size="20" />
        </div>
    );
};

export default AddRequest;

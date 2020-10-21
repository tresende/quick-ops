import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: '100vh',
        backgroundColor: 'white',
    },
}));

const Sidebar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} />
    );
};

export default Sidebar;

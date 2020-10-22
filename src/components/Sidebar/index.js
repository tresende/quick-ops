import React from 'react';
import { makeStyles } from '@material-ui/core';
import Status from './Status';
import Value from './Value';
import Balance from './Balance';
import Summary from './Summary';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 16,
        [theme.breakpoints.down('sm')]: {
			borderRadius: 12,
        },
    },
}));

const Sidebar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Status />
            <Value />
            <Balance />
            <Summary />
        </div>
    );
};

export default Sidebar;

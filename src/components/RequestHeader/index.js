import React from 'react';
import { makeStyles } from '@material-ui/core';
import Title from './Title';
import Info from './Info';
import CostCenter from './CostCenter';
import Status from './Status';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        padding: 24,
        borderRadius: 12,
        color: 'white',
        fontSize: '0.8rem',
        backgroundImage: 'linear-gradient(to right, #00d7ce 3%, #00c5fc)',
    },
    requestBody: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'baseline',
    },
}));

const RequestHeader = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Title />
            <div className={classes.requestBody}>
                <Info />
                <CostCenter />
                <Status />
            </div>
        </div>
    );
};

export default RequestHeader;

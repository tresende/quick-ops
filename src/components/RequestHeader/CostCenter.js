import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.mixins.center,
        flex: 2,
        height: 96,
        border: '2px solid rgb(250 251 252 / .6)',
        borderTop: 'none',
        borderBottom: 'none',
        flexDirection: 'column',
    },
    text: {
        fontWeight: 'bold',
    },
}));

const Info = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <div className={classes.title}>Centro de Custo</div>
                <div className={classes.text}>50% - TEC-DEV-Back Office</div>
                <div className={classes.text}>50% - BKO-DEV-BI-Analytics</div>
            </div>
        </div>
    );
};

export default Info;

import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        flex: 1,
        border: '2px solid #fafbfc',
        borderTop: 'none',
        borderBottom: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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

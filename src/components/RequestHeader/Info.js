import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        flex: 3,
    },
    keyValye: {
        display: 'flex',
    },
    key: {
        minWidth: 72,
    },
    value: {
        fontWeight: 'bold',
        margin: '0 16px',
    },
}));

const Info = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.keyValye}>
                <span className={classes.key}>Justificativa</span>
                <span className={classes.value}>Reembolso referente a confraternização das equipes Backoffice / BI / Analytics.</span>
            </div>
            <div className={classes.keyValye}>
                <span className={classes.key}>Finalidade</span>
                <span className={classes.value}>Confraternização</span>
            </div>
            <div className={classes.keyValye}>
                <span className={classes.key}>Quantidade</span>
                <span className={classes.value}>33 Pessoas</span>
            </div>
            <div className={classes.keyValye}>
                <span className={classes.key}>Projeto</span>
                <span className={classes.value}> - </span>
            </div>
        </div>
    );
};

export default Info;

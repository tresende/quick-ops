import React from 'react';
import { makeStyles } from '@material-ui/core';
import Status from './Status';
import Info from './Info';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        minHeight: 154,
        borderRadius: 12,
        marginTop: 24,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        textAlign: 'center',
    },
}));

const Request = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Status />
            <Info title="Ação" text="Pagamento realizado" />
            <Info title="Valor" text="BRL 3.458,94" />
            <Status />
            <Status />
        </div>
    );
};

export default Request;

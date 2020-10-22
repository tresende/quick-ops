import React from 'react';
import { makeStyles } from '@material-ui/core';
import Icon from './Icon';
import Info from './Info';
import Observation from './Observation';
import Status from './Status';

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
            <Icon />
            <Info title="Ação" subTitle="Despesa" text="Almoço com afiliado" />
            <Info title="Valor" subTitle="Valor" text="BRL 3.458,94" />
            <Observation text="Depositamos na conta 12345-32, agência 123, Banco Itaú." />
            <Status text="Reprovado pois você está gastando demais da conta!" />
        </div>
    );
};

export default Request;

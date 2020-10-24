import React from 'react';
import { makeStyles } from '@material-ui/core';
import Icon from './Icon';
import Info from './Info';
import Observation from './Observation';
import Status from './Status';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minHeight: 154,
        borderRadius: theme.layout.defaultBorderRadius,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            padding: 8,
        },
    },
    infos: {
        flex: 4,
        display: 'flex',
        alignItems: 'baseline',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            flex: 1,
        },
    },
}));

const Request = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Icon />
            <div className={classes.infos}>
                <Info title="Ação" subTitle="Despesa" text="Almoço com afiliado" />
                <Info title="Valor" subTitle="Valor" text="BRL 3.458,94" />
                <Observation text="Depositamos na conta 12345-32, agência 123, Banco Itaú." />
                <Status text="Reprovado pois você está gastando demais da conta!" />
            </div>
        </div>
    );
};

export default Request;

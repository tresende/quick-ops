import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { FaUsers, FaConciergeBell } from 'react-icons/fa';
import Icon from './Icon';
import Info from './Info';
import Observation from './Observation';
import Status from './Status';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minHeight: 154,
        borderRadius: theme.layout.defaultBorderRadius,
        marginBottom: 16,
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

const Card = ({ request }) => {
    console.log(request);
    const size = 24;
    const configMap = {
        EVALUATION: {
            icon: <FaUsers color="#C8BCED" size={size} />,
        },
        EXPENSE: {
            type: 'Hotel',
            color: '#E9F0FD',
            icon: <FaConciergeBell color="#1067ba" size={size} />,
        },
    };
    const config = configMap[request.cardType] || {};
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Icon color={config.color} icon={config.icon} request={request} />
            <div className={classes.infos}>
                <Info title="Tipo" type={config.type} text="Almoço com afiliado" />
                <Info title="Valor" type="Valor" text="BRL 3.458,94" />
                <Observation text="Depositamos na conta 12345-32, agência 123, Banco Itaú." />
                <Status text="Reprovado pois você está gastando demais da conta!" />
            </div>
        </div>
    );
};

Card.propTypes = {
    request: PropTypes.object.isRequired,
};

export default Card;

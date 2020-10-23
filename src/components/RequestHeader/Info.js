import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { getTranslate, formatDate } from '../../services/Util';

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

const Info = ({ header }) => {
    const formatAmountOfPeople = (value) => {
        if (!value) return '';
        let term = 'Pessoa';
        if (value > 1) term = `${term}s`;
        return `${value} ${term}`;
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.keyValye}>
                <span className={classes.key}>Nome</span>
                <span className={classes.value}>{header?.collaborator?.name}</span>
            </div>
            <div className={classes.keyValye}>
                <span className={classes.key}>Email</span>
                <span className={classes.value}>{header?.collaborator?.email}</span>
            </div>
            <div className={classes.keyValye}>
                <span className={classes.key}>Justificativa</span>
                <span className={classes.value}>{header.justification}</span>
            </div>
            <div className={classes.keyValye}>
                <span className={classes.key}>Finalidade</span>
                <span className={classes.value}>{getTranslate(header.purpose)}</span>
            </div>
            <div className={classes.keyValye}>
                <span className={classes.key}>Projeto</span>
                <span className={classes.value}>{header?.project?.title}</span>
            </div>
            <div className={classes.keyValye}>
                <span className={classes.key}>Data</span>
                <span className={classes.value}>{formatDate(header?.accountabilityExtraInfo?.eventDate)}</span>
            </div>
            <div className={classes.keyValye}>
                <span className={classes.key}>Quantidade de Pessoas</span>
                <span className={classes.value}>{formatAmountOfPeople(header?.accountabilityExtraInfo?.amountOfPeople)}</span>
            </div>
            <div className={classes.keyValye}>
                <span className={classes.key}>Incluir Café da Manha</span>
                <span className={classes.value}>{formatAmountOfPeople(header?.accountabilityExtraInfo?.budgetForBreakfast)}</span>
            </div>
        </div>
    );
};

Info.propTypes = {
    header: PropTypes.object.isRequired,
};

export default Info;

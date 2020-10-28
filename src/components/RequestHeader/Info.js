import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { getTranslate, formatDate } from '../../services/Util';
import TextTranslated from '../TextTranslated';

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 3,
        [theme.breakpoints.up('lg')]: {
            borderRight: '2px solid rgb(250 251 252 / .6)',
        },
    },
    keyValye: {
        display: 'flex',
        ...theme.mixins.formContainer,
    },
    key: {
        minWidth: 136,
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
                <span className={classes.key}><TextTranslated code="name" /></span>
                <span className={classes.value}>{header?.collaborator?.name}</span>
            </div>
            <div className={classes.keyValye}>
                <span className={classes.key}><TextTranslated code="email" /></span>
                <span className={classes.value}>{header?.collaborator?.email}</span>
            </div>
            <div className={classes.keyValye}>
                <span className={classes.key}><TextTranslated code="justification" /></span>
                <span className={classes.value}>{header.justification}</span>
            </div>
            <div className={classes.keyValye}>
                <span className={classes.key}><TextTranslated code="purpose" /></span>
                <span className={classes.value}>{getTranslate(header.purpose)}</span>
            </div>
            <div className={classes.keyValye}>
                <span className={classes.key}><TextTranslated code="project" /></span>
                <span className={classes.value}>{header?.project?.title}</span>
            </div>
            <div className={classes.keyValye}>
                <span className={classes.key}><TextTranslated code="date" /></span>
                <span className={classes.value}>{formatDate(header?.accountabilityExtraInfo?.eventDate)}</span>
            </div>
            <div className={classes.keyValye}>
                <span className={classes.key}><TextTranslated code="amountOfPeople" /></span>
                <span className={classes.value}>{formatAmountOfPeople(header?.accountabilityExtraInfo?.amountOfPeople)}</span>
            </div>
            <div className={classes.keyValye}>
                <span className={classes.key}><TextTranslated code="budgetForBreakfast" /></span>
                <span className={classes.value}>{formatAmountOfPeople(header?.accountabilityExtraInfo?.budgetForBreakfast)}</span>
            </div>
        </div>
    );
};

Info.propTypes = {
    header: PropTypes.object.isRequired,
};

export default Info;

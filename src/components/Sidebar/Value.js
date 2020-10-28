import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { formatCurrency } from '../../services/Util';
import TextTranslated from '../TextTranslated';

const useStyles = makeStyles(() => ({
    root: {
        height: 88,
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        borderBottom: '1px solid #f0f3f7',
    },
    title: {
        color: '#6b7480',
    },
    subTitle: {
        fontSize: '1.5rem',
        color: '#053d4e',
    },
}));

const Value = ({ data }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <TextTranslated code="balance" />
            </div>
            <div className={classes.subTitle}>{formatCurrency(data.received - data.declared, data.currency.code)}</div>
        </div>
    );
};

Value.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Value;

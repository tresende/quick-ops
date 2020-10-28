import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { formatCurrency } from '../../services/Util';
import TextTranslated from '../TextTranslated';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        height: 88,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: '#9ea4ac',
        fontSize: '.7rem',
    },
    value: {
        color: '#32363b',
        fontSize: '.8rem',
    },
    icon: {
        marginRight: 8,
        width: 24,
        height: 24,
        border: '1px solid #d0d3d6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
    },
    container: {
        flex: 1,
        ...theme.mixins.center,
    },
    divider: {
        borderLeft: '1px solid #f0f3f7',
        height: 32,
    },
}));

const Balance = ({ data }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.icon}><FaArrowUp color="#d0d3d6" size="12" /></div>
                <div>
                    <div className={classes.title}><TextTranslated code="declared" /></div>
                    <div className={classes.value}>{formatCurrency(data.declared, data.currency.code)}</div>
                </div>
            </div>
            <div className={classes.divider} />
            <div className={classes.container}>
                <div className={classes.icon}><FaArrowDown color="#d0d3d6" size="12" /></div>
                <div>
                    <div className={classes.title}><TextTranslated code="received" /></div>
                    <div className={classes.value}>{formatCurrency(data.received, data.currency.code)}</div>
                </div>
            </div>
        </div>
    );
};

Balance.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Balance;

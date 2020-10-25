import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { FaAsterisk, FaConciergeBell, FaUsers } from 'react-icons/fa';
import { formatDate } from '../../services/Util';

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
        ...theme.mixins.center,
        flexDirection: 'column',
        textAlign: 'center',
    },
    text: {
        marginTop: 8,
        color: '#545b64',
    },
    icon: {
        ...theme.mixins.center,
        width: 64,
        height: 64,
        borderRadius: '50%',
    },
}));

const Icon = ({ request }) => {
    const size = 24;
    const configMap = {
        EVALUATION: {
            color: '#efebf9',
            icon: <FaUsers color="#C8BCED" size={size} />,
        },
        EXPENSE: {
            type: 'Hotel',
            color: '#E9F0FD',
            icon: <FaConciergeBell color="#1067ba" size={size} />,
        },
        DEFAULT: {
            icon: <FaAsterisk color="#C8BCED" size={24} />,
            color: '#efebf9',
        },
    };
    const config = configMap[request.cardType] || configMap.DEFAULT;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div style={{ backgroundColor: config.color }} className={classes.icon}>{config.icon}</div>
            <div className={classes.text}>{formatDate(request.cardDate)}</div>
        </div>
    );
};

Icon.propTypes = {
    request: PropTypes.object.isRequired,
};

export default Icon;

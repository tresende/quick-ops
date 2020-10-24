import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { FaAsterisk } from 'react-icons/fa';
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

const Icon = ({ request, icon, color }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div style={{ backgroundColor: color }} className={classes.icon}>{icon}</div>
            <div className={classes.text}>{formatDate(request.cardDate)}</div>
        </div>
    );
};

Icon.propTypes = {
    request: PropTypes.object.isRequired,
    color: PropTypes.string,
    icon: PropTypes.object,
};

Icon.defaultProps = {
    icon: <FaAsterisk color="#C8BCED" size={24} />,
    color: '#efebf9',
};

export default Icon;

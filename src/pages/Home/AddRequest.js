import React from 'react';
import { makeStyles } from '@material-ui/core';
import { FaFileAlt as Icon } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.mixins.center,
        padding: '8px 0',
        justifyContent: 'flex-end',
    },
    icon: {
        marginRight: 4,
    },
    button: {
        ...theme.mixins.center,
        backgroundColor: 'white',
        color: '#4D676C',
        border: '1px solid #4D676C',
        display: 'flex',
        borderRadius: theme.layout.defaultBorderRadius,
        height: 32,
        padding: 8,
    },
}));

const AddRequest = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <button className={classes.button} type="button">
                <Icon className={classes.icon} size="12" />
                <span>Adicionar Despesa</span>
            </button>
        </div>
    );
};

export default AddRequest;

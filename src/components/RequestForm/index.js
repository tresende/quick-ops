import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import InputFile from './InputFile';

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.mixins.card,
        padding: 24,
    },
    title: {
        fontSize: '1.2rem',
        color: '#353a40',
        fontWeight: 'bold',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-evenly',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            padding: 8,
        },
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cancel: {
        backgroundColor: 'white',
        border: '1px solid #50C2C7',
        color: '#50C2C7',
        borderRadius: theme.layout.defaultBorderRadius / 2,
        padding: '4px 8px',
    },
    save: {
        backgroundColor: '#50C2C7',
        border: '1px solid #50C2C7',
        color: 'white',
        padding: '4px 8px',
        marginLeft: 8,
        borderRadius: theme.layout.defaultBorderRadius / 2,
    },
}));

const RequestForm = ({ show, onCancel }) => {
    if (!show) return null;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.title}>Adicionar despesa</div>
            <div className={classes.container}>
                <InputFile />
                <Form />
            </div>
            <div className={classes.actions}>
                <button onClick={onCancel} className={classes.cancel} type="button">Cancelar</button>
                <button className={classes.save} type="button">Salvar</button>
            </div>
        </div>
    );
};

RequestForm.propTypes = {
    show: PropTypes.bool,
    onCancel: PropTypes.func.isRequired,
};

RequestForm.defaultProps = {
    show: false,
};

export default RequestForm;

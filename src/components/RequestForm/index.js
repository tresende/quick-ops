import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import InputFile from './InputFile';
import RequestService from '../../services/RequestService';
import LoadingService from '../../services/LoadingSerivce';
import ErrorMessage from '../ErrorMessage';
import TextTranslated from '../TextTranslated';

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
        borderRadius: theme?.layout?.defaultBorderRadius / 2,
        padding: '4px 8px',
    },
    save: {
        backgroundColor: '#50C2C7',
        border: '1px solid #50C2C7',
        color: 'white',
        padding: '4px 8px',
        marginLeft: 8,
        borderRadius: theme?.layout?.defaultBorderRadius / 2,
    },
}));

const RequestForm = ({ show, onCancel, addLoadingItem, removeLoadingItem }) => {
    if (!show) return null;
    const [error, setError] = useState('');
    const formData = RequestService.getBaseModel();
    const onModelChange = (prop, value) => {
        formData[prop] = value;
    };

    const validateAndSave = async () => {
        let id = null;
        const isValid = RequestService.validate(formData);
        if (isValid) {
            try {
                id = addLoadingItem();
               await RequestService.save(formData);
            } catch (ex) {
                setError('Aconteceu um erro ao salvar os dados, tente novamente mais tarde');
            } finally {
                removeLoadingItem(`${id}`);
            }
        } else {
            setError('Existem campos obrigatórios que não foram preenchidos');
        }
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.title}><TextTranslated code="addRequest" /></div>
            <ErrorMessage opened={!!error} text={error} />
            <div className={classes.container}>
                <InputFile onChange={onModelChange} />
                <Form onChange={onModelChange} />
            </div>
            <div className={classes.actions}>
                <button data-test="cancel" onClick={onCancel} className={classes.cancel} type="button">
                    <TextTranslated code="cancel" />
                </button>
                <button data-test="save" onClick={validateAndSave} className={classes.save} type="button">
                    <TextTranslated code="save" />
                </button>
            </div>
        </div>
    );
};

RequestForm.propTypes = {
    show: PropTypes.bool,
    onCancel: PropTypes.func.isRequired,
    addLoadingItem: PropTypes.func.isRequired,
    removeLoadingItem: PropTypes.func.isRequired,
};

RequestForm.defaultProps = {
    show: false,
};

const mapDispatchToProps = (dispatch) => ({
    addLoadingItem: () => dispatch(LoadingService.addLoadingItem()),
    removeLoadingItem: (id) => dispatch(LoadingService.removeLoadingItem(id)),
});

export default connect(null, mapDispatchToProps)(RequestForm);

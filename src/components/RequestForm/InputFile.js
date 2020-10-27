import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { FaTrashAlt, FaFilter } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 3,
        padding: '16px 16px 0 0',
        marginBottom: 8,
    },
    title: {
        color: '#353a40',
        fontWeight: 'bold',
    },
    textIconContainer: {
        display: 'flex',
        alignItems: 'center',
        minHeight: 20,
        height: 32,
    },
    icon: {
        color: '#d0d3d6',
        marginLeft: '.3rem',
        marginRight: '.3rem',
        cursor: 'pointer',
    },
    formContainer: {
        backgroundColor: '#fafbfc',
        padding: '1rem',
        border: '1px solid #dfe2df',
        ...theme.mixins.center,
        flexDirection: 'column',
        borderRadius: theme.layout.defaultBorderRadius,
    },
    button: {
        backgroundColor: 'white',
        border: '1px solid #dfe2e6',
        height: 36,
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
    },
    inputFile: {
        display: 'none',
    },
}));

const InputFile = ({ onChange }) => {
    const [fileName, setFileName] = useState();
    const inputFileRef = React.createRef();
    const classes = useStyles();

    const openInputFile = () => inputFileRef.current.click();

    const resetInputFile = () => {
        inputFileRef.current.value = null;
        setFileName(null);
    };

    const onInputFileChange = () => {
        const file = inputFileRef.current.files[0];
        const acceptedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
        if (acceptedTypes.includes(file.type)) {
            setFileName(file.name);
            onChange('resourceUrl', file);
        } else {
            resetInputFile();
        }
    };

    const renderFileName = () => {
        if (!fileName) return null;
        return (
            <>
                <span>{fileName}</span>
                <FaTrashAlt onClick={resetInputFile} className={classes.icon} size="10" />
            </>
        );
    };

    return (
        <div className={classes.root}>
            <div className={classes.formContainer}>
                <div className={classes.title}>Envie o comprovante</div>
                <small className={classes.subtitle}>Você pode inserir nos formatos PNG, JPG, ou PDF. Tamanho máx 10MB</small>
                <input accept=".jpg,.jpeg,.png" onChange={onInputFileChange} ref={inputFileRef} className={classes.inputFile} type="file" />
                <div className={classes.textIconContainer}>
                    {renderFileName()}
                </div>
                <button type="button" onClick={openInputFile} className={classes.button}>
                    <FaFilter className={classes.icon} onClick={resetInputFile} size="10" />
                    Escolher Arquivo
                </button>
            </div>
        </div>
    );
};

InputFile.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default InputFile;

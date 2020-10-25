import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaQuestionCircle, FaTrashAlt } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
        padding: 24,
    },
    title: {
        color: '#353a40',
        fontWeight: 'bold',
    },
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        minHeight: 20,
    },
    icon: {
        color: '#d0d3d6',
        marginLeft: '.3rem',
        cursor: 'pointer',
    },
    formContainer: {
        minHeight: 200,
        backgroundColor: 'white',
        border: '1px dashed #dfe2df',
        ...theme.mixins.center,
        flexDirection: 'column',
        borderRadius: theme.layout.defaultBorderRadius,
    },
    button: {
        backgroundColor: 'white',
        border: '1px solid #dfe2e6',
        height: 48,
        marginTop: 24,
        borderRadius: theme.layout.defaultBorderRadius,
    },
    inputFile: {
        display: 'none',
    },
    help: {
        color: '#848a91',
        fontSize: '.7rem',
    },
}));

const InputFile = () => {
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
            <div className={classes.titleContainer}>
                <div className={classes.title}>Recibo, cupom ou nota fiscal*</div>
                <FaQuestionCircle size="10" className={classes.icon} />
            </div>
            <div className={classes.formContainer}>
                <input accept=".jpg,.jpeg,.png" onChange={onInputFileChange} ref={inputFileRef} className={classes.inputFile} type="file" />
                <div className={classes.titleContainer}>
                    {renderFileName()}
                </div>
                <button type="button" onClick={openInputFile} className={classes.button}>Selecione um arquivo do seu computador</button>
            </div>
            <span className={classes.help}>A imagem deve estar no formato JPG ou PNG.</span>
        </div>
    );
};

export default InputFile;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import InputFile from './InputFile';

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.mixins.card,
        backgroundColor: '#fafbfc',
        padding: '24px 48px',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            padding: 8,
        },
    },
    title: {
        fontSize: '1.2rem',
        color: '#353a40',
        fontWeight: 'bold',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
}));

const RequestForm = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.title}>Nova despesa</div>
            <div className={classes.container}>
                <InputFile />
                <Form />
            </div>
        </div>
    );
};

export default RequestForm;

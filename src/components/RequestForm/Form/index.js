import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Editor from './Editor';

const useStyles = makeStyles(() => ({
    root: {
        flex: 2,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
}));

const Form = () => {
    const form = {};
    const typeValues = ['hotel-fee', 'food', 'transport'];
    const currencyValues = ['BRL', 'USD', 'MXN'];

    const onChange = (prop, value) => {
        form[prop] = value;
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Editor onChange={(value) => onChange('expenseTypeCode', value)} type="select" size={48} label="Tipo *" values={typeValues} />
            <Editor onChange={(value) => onChange('currencyCode', value)} type="select" size={48} label="Moeda *" values={currencyValues} />

            <Editor onChange={(value) => onChange('amountSpent', value)} type="number" size={56} label="Valor total da nota/cupom" />
            <Editor onChange={(value) => onChange('amountTotal', value)} type="number" size={56} label="Valor a ser considerado" />

            <Editor onChange={(value) => onChange('notes', value)} size={56} label="Descrição da despesa *" />
            <Editor onChange={(value) => onChange('cardDate', value)} type="date" size={56} label="Data do Comprovante *" />
        </div>
    );
};

export default Form;

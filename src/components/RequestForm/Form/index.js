import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Editor from './Editor';

const useStyles = makeStyles(() => ({
    root: {
        flex: 2,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
}));

const Form = ({ onChange }) => {
    const [amount, setAmount] = useState(false);
    const typeValues = ['hotel-fee', 'food', 'transport'];
    const currencyValues = ['BRL', 'USD', 'MXN'];

    const onCurrencyCodeChange = (value) => {
        setAmount(!!value);
        onChange('currencyCode', value);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Editor onChange={(value) => onChange('expenseTypeCode', value)} type="select" size={48} label="Tipo *" values={typeValues} />
            <Editor onChange={(value) => onCurrencyCodeChange(value)} type="select" size={48} label="Moeda *" values={currencyValues} />
            {
                amount && (
                    <>
                        <Editor onChange={(value) => onChange('amountSpent', value)} type="number" size={56} label="Valor total da nota/cupom" />
                        <Editor onChange={(value) => onChange('amountTotal', value)} type="number" size={56} label="Valor a ser considerado" />
                    </>
                )
            }
            <Editor onChange={(value) => onChange('notes', value)} size={56} label="Descrição da despesa *" />
            <Editor onChange={(value) => onChange('cardDate', value)} type="date" size={56} label="Data do Comprovante *" />
        </div>
    );
};

Form.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default Form;

import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';
import { formatCurrency } from '../../services/Util';

const Amount = ({ request }) => {
    if (!request.amountTotal) { return null; }
    const text = formatCurrency(request.amountTotal, request.currencyCode);
    let subtext = formatCurrency(request.amountSpent, request.currencyCode);
    subtext = `Valor da nota: ${subtext}`;
    return (<Info title="Valor" subtitle={text} text={subtext} />);
};

Amount.propTypes = {
    request: PropTypes.object.isRequired,
};

export default Amount;

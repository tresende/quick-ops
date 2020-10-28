import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';
import { getTranslate } from '../../services/Util';

const Observation = ({ request }) => {
    if (!request.notes) { return null; }
    const label = getTranslate('observation');
    return (<Info title={label} text={request?.notes} />);
};

Observation.propTypes = {
    request: PropTypes.object.isRequired,
};

export default Observation;

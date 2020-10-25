import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';

const Observation = ({ request }) => {
    if (!request.notes) { return null; }
    return (<Info title="Observação" text={request?.notes} />);
};

Observation.propTypes = {
    request: PropTypes.object.isRequired,
};

export default Observation;

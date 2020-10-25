import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';
import TimelineService from '../../services/TimelineService';

const Type = ({ request }) => {
    const text = TimelineService.formatTypeMessage(request);
    return (<Info title="Tipo" subtitle={text} text={request.notes} />);
};

Type.propTypes = {
    request: PropTypes.object.isRequired,
};

export default Type;

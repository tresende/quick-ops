import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';
import TimelineService from '../../services/TimelineService';
import { getTranslate } from '../../services/Util';

const Type = ({ request }) => {
    const text = TimelineService.formatTypeMessage(request);
    const label = getTranslate('type');
    return (<Info title={label} subtitle={text} text={request.notes} />);
};

Type.propTypes = {
    request: PropTypes.object.isRequired,
};

export default Type;

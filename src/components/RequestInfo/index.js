import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const RequestInfo = ({ request }) => <Card request={request} />;

RequestInfo.propTypes = {
    request: PropTypes.object.isRequired,
};

export default RequestInfo;

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Icon from './Icon';
import Value from './Value';
import Observation from './Observation';
import Status from './Status';
import Type from './Type';
import Summary from './Summary';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minHeight: 154,
        borderRadius: theme.layout.defaultBorderRadius,
        marginBottom: 16,
        backgroundColor: 'white',
        display: 'flex',
        paddingRight: 24,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            padding: 8,
        },
    },
    infos: {
        flex: 4,
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            flex: 1,
        },
    },
}));

const RequestInfo = ({ request }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Icon request={request} />
            <div className={classes.infos}>
                <Type request={request} />
                <Value request={request} />
                <Observation request={request} />
                <Status request={request} />
                <Summary request={request} />
            </div>
        </div>
    );
};

RequestInfo.propTypes = {
    request: PropTypes.object.isRequired,
};

export default RequestInfo;

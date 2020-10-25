import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Value from './Value';
import Balance from './Balance';
import Summary from './Summary';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem',
        width: '100%',
        border: '1px solid #f0f3f7',
        marginTop: 16,
        borderRadius: theme.layout.defaultBorderRadius,
    },
}));

const Card = ({ data }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Value data={data} />
            <Balance data={data} />
            <Summary data={data} />
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Card;

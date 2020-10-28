import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { getTranslate } from '../../services/Util';

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.mixins.center,
        flex: 2,
        minHeight: 112,
        flexDirection: 'column',
    },
    text: {
        fontWeight: 'bold',
    },
    formContainer: {
        ...theme.mixins.formContainer,
    },
    assingAnalyst: {
        border: 'none',
        padding: '.5em',
        borderRadius: 5,
    },
    [theme.breakpoints.down('md')]: {
        root: {
            border: 'none',
            display: 'inherit',
        },
    },
}));

const Analyst = ({ header }) => {
    const classes = useStyles();

    const formatCostCenter = ({ percentage, name }) => `${percentage}-${name}`;
    const assignAnalystLabel = getTranslate('assignAnalyst');
    const costCenterLabel = getTranslate('costCenter');
    return (
        <div className={classes.root}>
            <div>
                <div className={classes.formContainer}>
                    <div className={classes.title}>{assignAnalystLabel}</div>
                    <input className={classes.assingAnalyst} type="text" placeholder={assignAnalystLabel} />
                </div>
                <div className={classes.formContainer}>
                    <div className={classes.title}>{costCenterLabel}</div>
                    {header?.costCenters?.map((costCenter) => (
                        <div className={classes.text} key={costCenter.id}>{formatCostCenter(costCenter)}</div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

Analyst.propTypes = {
    header: PropTypes.object.isRequired,
};

export default Analyst;

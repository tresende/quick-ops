import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { FaChevronDown, FaReceipt } from 'react-icons/fa';
import TimelineService from '../../services/TimelineService';

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.mixins.center,
        flexDirection: 'column',
        textAlign: 'left',
        alignItems: 'flex-start',
        color: '#51c1c3',
        fontSize: '.7rem',
    },
    link: {
        textDecoration: 'none',
        color: '#51c1c3',
        fontSize: '.7rem',
        marginLeft: 8,
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
    },
}));

const Summary = ({ request }) => {
    const classes = useStyles();
    const text = TimelineService.formatSummaryText(request);
    return (
        <div className={classes.root}>
            <div>
                <div>
                    {request.cardType === 'EXPENSE'
                        && (
                            <div className={classes.iconContainer}>
                                <FaReceipt size={12} />
                                <a className={classes.link} href="/">
                                    {text}
                                </a>
                            </div>
                        )}
                    {request.cardType === 'EVALUATION'
                        && (
                            <div className={classes.iconContainer}>
                                <a className={classes.link} href="/">
                                    {text}
                                </a>
                                <FaChevronDown size={10} />
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
};

Summary.propTypes = {
    request: PropTypes.object.isRequired,
};

export default Summary;

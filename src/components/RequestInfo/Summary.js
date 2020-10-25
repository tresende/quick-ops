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
    iconContainerReverse: {
        flexDirection: 'row-reverse',
    },
}));

const Summary = ({ request }) => {
    const text = TimelineService.formatSummaryText(request);
    if (text === null) { return null; }
    const classes = useStyles();
    let icon = (<FaReceipt size={12} />);
    const iconClasses = [classes.iconContainer];
    if (request.cardType === 'EVALUATION') {
        icon = (<FaChevronDown size={12} />);
        iconClasses.push(classes.iconContainerReverse);
    }
    return (
        <div className={classes.root}>
            <div>
                <div>
                    <div className={iconClasses.join(' ')}>
                        {icon}
                        <a className={classes.link} href="/">
                            {text}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

Summary.propTypes = {
    request: PropTypes.object.isRequired,
};

export default Summary;

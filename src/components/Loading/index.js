import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import logo from '../../assets/images/logo.png';
import './loading-animation.css';

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.mixins.center,
        backgroundColor: 'rgba(255, 255, 255, .8)',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        zIndex: '1201',
    },
}));

const Loading = ({ loadingStack }) => {
    if (loadingStack.length === 0) { return null; }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img src={logo} alt="Loading" className="loading" />
        </div>
    );
};

const mapStateToProps = (state) => ({
    loadingStack: state.loadingReducer.loadingStack,
});

Loading.propTypes = {
    loadingStack: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Loading);

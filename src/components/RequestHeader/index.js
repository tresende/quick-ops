import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import HeaderService from '../../services/HeaderService';
import Title from './Title';
import Info from './Info';
import Analyst from './Analyst';
import LoadingService from '../../services/LoadingSerivce';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: 24,
        borderRadius: theme.layout.defaultBorderRadius,
        color: 'white',
        fontSize: '0.8rem',
        backgroundImage: 'linear-gradient(to right, #00d7ce 3%, #00c5fc)',
    },
    requestBody: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    [theme.breakpoints.down('md')]: {
        requestBody: {
            display: 'inherit',
        },
    },
}));

const RequestHeader = ({ addLoadingItem, removeLoadingItem }) => {
    const [headerData, setHeaderData] = useState({});
    useEffect(() => {
        const getInitialData = async () => {
            const id = addLoadingItem();
            const data = await HeaderService.getTimelineData();
            setHeaderData(data);
            removeLoadingItem(id);
        };
        getInitialData();
    }, []);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Title text={headerData.title} />
            <div className={classes.requestBody}>
                <Info header={headerData} />
                <Analyst header={headerData} />
            </div>
        </div>
    );
};

RequestHeader.propTypes = {
    addLoadingItem: PropTypes.func.isRequired,
    removeLoadingItem: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
    addLoadingItem: () => dispatch(LoadingService.addLoadingItem()),
    removeLoadingItem: (id) => dispatch(LoadingService.removeLoadingItem(id)),
});

export default connect(null, mapDispatchToProps)(RequestHeader);

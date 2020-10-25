import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import SidebarSerivce from '../../services/SidebarService';
import Status from './Status';
import Card from './Card';
import LoadingService from '../../services/LoadingSerivce';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 16,
        [theme.breakpoints.down('md')]: {
            borderRadius: 12,
        },
    },
}));

const Sidebar = ({ addLoadingItem, removeLoadingItem }) => {
    const [sidebarData, setSidebarData] = useState([]);
    useEffect(() => {
        const getInitialData = async () => {
            const id = addLoadingItem();
            const data = await SidebarSerivce.getSidebarData();
            setSidebarData(data);
            removeLoadingItem(id);
        };
        getInitialData();
    }, []);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Status />
            {
                sidebarData.map(((data, index) => (<Card key={index} data={data} />)))
            }
        </div>
    );
};

Sidebar.propTypes = {
    addLoadingItem: PropTypes.func.isRequired,
    removeLoadingItem: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
    addLoadingItem: () => dispatch(LoadingService.addLoadingItem()),
    removeLoadingItem: (id) => dispatch(LoadingService.removeLoadingItem(id)),
});

export default connect(null, mapDispatchToProps)(Sidebar);

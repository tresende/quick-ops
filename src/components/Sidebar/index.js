import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import SidebarSerivce from '../../services/SidebarService';
import Status from './Status';
import Card from './Card';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 16,
        [theme.breakpoints.down('sm')]: {
            borderRadius: 12,
        },
    },
}));

const Sidebar = () => {
    const [sidebarData, setSidebarData] = useState([]);
    useEffect(() => {
        const getInitialData = async () => {
            const data = await SidebarSerivce.getSidebarData();
            setSidebarData(data);
        };
        getInitialData();
    }, []);
    console.log(sidebarData);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Status />
            {
                sidebarData.map(((data) => (<Card key={data.id} data={data} />)))
            }
        </div>
    );
};

export default Sidebar;

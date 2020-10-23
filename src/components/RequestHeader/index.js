import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Title from './Title';
import Info from './Info';
import CostCenter from './CostCenter';
import Status from './Status';
import HeaderService from '../../services/HeaderService';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: 24,
        borderRadius: 12,
        color: 'white',
        fontSize: '0.8rem',
        backgroundImage: 'linear-gradient(to right, #00d7ce 3%, #00c5fc)',
    },
    requestBody: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    [theme.breakpoints.down('sm')]: {
        requestBody: {
            display: 'inherit',
        },
    },
}));

const RequestHeader = () => {
    const [headerData, setHeaderData] = useState({});
    useEffect(() => {
        const getInitialData = async () => {
            const data = await HeaderService.getTimelineData();
            setHeaderData(data);
        };
        getInitialData();
    }, []);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Title text={headerData.title} />
            <div className={classes.requestBody}>
                <Info header={headerData} />
                <CostCenter />
                <Status />
            </div>
        </div>
    );
};

export default RequestHeader;

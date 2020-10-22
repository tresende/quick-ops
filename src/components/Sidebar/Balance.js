import React from 'react';
import { makeStyles } from '@material-ui/core';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        display: 'flex',
        height: 88,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: '#9ea4ac',
        fontSize: '.7rem',
    },
    value: {
        color: '#32363b',
        fontSize: '.8rem',
    },
    icon: {
        marginRight: 8,
        width: 24,
        height: 24,
        border: '1px solid #d0d3d6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
    },
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    divider: {
        borderLeft: '1px solid #f0f3f7',
        height: 32,
    },
}));

const Status = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.icon}><FaArrowUp color="#d0d3d6" size="12" /></div>
                <div>
                    <div className={classes.title}>Gastou</div>
                    <div className={classes.value}>BRL 1.147,13</div>
                </div>
            </div>
            <div className={classes.divider} />
            <div className={classes.container}>
                <div className={classes.icon}><FaArrowDown color="#d0d3d6" size="12" /></div>
                <div>
                    <div className={classes.title}>Recebeu</div>
                    <div className={classes.value}>BRL 00,00</div>
                </div>
            </div>
        </div>
    );
};

export default Status;

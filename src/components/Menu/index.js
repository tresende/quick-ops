import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: theme.layout.menuWidth,
            flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: theme.layout.menuWidth,
        border: 0,
        backgroundColor: theme.layout.color,
    },
}));

const Menu = () => {
    const classes = useStyles();
    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden xsDown implementation="css">
                <Drawer
                  classes={{ paper: classes.drawerPaper }}
                  variant="permanent"
                />
            </Hidden>
        </nav>
    );
};

export default Menu;

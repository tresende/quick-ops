import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.layout.color,
    minHeight: 48,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${theme.layout.menuWidth}px)`,
      marginLeft: theme.layout.menuWidth,
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar} />
  );
};

export default Header;

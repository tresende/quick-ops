import React from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

const Content = ({ children }) => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12} sm={8}>
                {children}
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
        </Grid>
    );
};

Content.propTypes = {
    children: PropTypes.object.isRequired,
};

export default Content;

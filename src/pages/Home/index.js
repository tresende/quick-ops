import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import RequestHeader from '../../components/RequestHeader';
import RequestInfo from '../../components/RequestInfo';
import Sidebar from '../../components/Sidebar';

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
	},
	sideBar: {
		backgroundColor: 'white',
	},
	content: {
		paddingTop: 16,
		paddingRight: 32,
	},
}));

const Home = () => {
	const classes = useStyles();
	return (
		<Grid container>
			<Grid item xs={12} sm={9}>
				<div className={classes.content}>
					<RequestHeader />
					<RequestInfo />
					<RequestInfo />
					<RequestInfo />
					<RequestInfo />
					<RequestInfo />
					<RequestInfo />
				</div>
			</Grid>
			<Grid item xs={12} sm={3} className={classes.sideBar}>
				<Sidebar />
			</Grid>
		</Grid>
	);
};

export default Home;

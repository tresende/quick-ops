import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import RequestHeader from '../../components/RequestHeader';
import Sidebar from '../../components/Sidebar';
import Timeline from './Timeline';
import AddRequest from './AddRequest';

const useStyles = makeStyles((theme) => ({
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
	[theme.breakpoints.down('md')]: {
		root: {
			borderRadius: 12,
		},
		content: {
			paddingRight: 0,
		},
		sideBar: {
			marginTop: 24,
			borderRadius: 12,
		},
	},
}));

const Home = () => {
	const classes = useStyles();
	return (
		<Grid container>
			<Grid item xs={12} lg={9}>
				<div className={classes.content}>
					<RequestHeader />
					<AddRequest />
					<Timeline />
				</div>
			</Grid>
			<Grid item xs={12} lg={3} className={classes.sideBar}>
				<Sidebar />
			</Grid>
		</Grid>
	);
};

export default Home;

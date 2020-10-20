import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

const Routes = () => (
	<Switch>
		<Route path="/" component={Home} />
		<Redirect to="/" />
	</Switch>
);

export default Routes;

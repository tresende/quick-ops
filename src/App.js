import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import reducers from './reducers';
import Routes from './Routes';
import Layout from './layout';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

const App = () => (
	<Provider store={store}>
		<Layout>
			<Router history={createBrowserHistory}>
				<Routes />
			</Router>
		</Layout>
	</Provider>
);

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../../App';
import Movie from '../../pages/Movie';

const RouterApps = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={App}></Route>		
			<Route path="/movie" component={Movie}></Route>		
		</Switch>
	</BrowserRouter>
);

export default RouterApps;

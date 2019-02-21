import React from 'react';
import ReactDOM from 'react-dom';
import Router from './pages/routers-app/Router'
import WebFont from 'webfontloader';
import * as serviceWorker from './serviceWorker';
//connetion components to redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers/index';

//styles
import "./styles/scss/filmogram.scss";

WebFont.load({
  google: {
    families: ['Aleo', 'serif']
  }
});

const store = createStore(allReducers);

ReactDOM.render(<Provider store={store}>
					<Router/>
				</Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

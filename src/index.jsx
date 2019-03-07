import React from 'react';
import ReactDOM from 'react-dom';
import Router from './pages/routers-app/Router'
import WebFont from 'webfontloader';
import * as serviceWorker from './serviceWorker';
//connetion components to redux
import { Provider } from 'react-redux';
import store from './reducers/store';

//styles
import "./styles/scss/filmogram.scss";

WebFont.load({
  google: {
    families: ['Aleo', 'serif']
  }
});

ReactDOM.render(
<Provider store={store}>
  <Router/>
</Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

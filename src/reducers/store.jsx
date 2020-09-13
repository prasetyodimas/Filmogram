import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from '../reducers/reducers'; => avoid single reducer
import Movie from '../reducers/movie/movie-reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({ Movie }), /* preloadedState, */ composeEnhancers(
	applyMiddleware(thunk)
));

export default store;

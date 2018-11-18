import { combineReducers } from 'redux';
import { createReducers } from '../common/redux.helpers';

const movieBrowser = createReducers({isOpen :false}, {


});

const movieBrowserReducer = combineReducers({
	movieModal : movieModalReducer
});


export default movieBrowserReducer;

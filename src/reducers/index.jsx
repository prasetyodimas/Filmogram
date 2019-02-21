import { combineReducers } from 'redux';
import userReducer from './reducer-user';

const allReducers = combineReducers({
	users: userReducer,
});

export default allReducers;
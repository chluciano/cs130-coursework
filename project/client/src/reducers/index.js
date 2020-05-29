import { combineReducers } from 'redux';
import usersReducer from './users';
import coursesReducer from './courses';

const rootReducer = combineReducers({
	users: usersReducer,
	courses: coursesReducer
});


export default rootReducer;
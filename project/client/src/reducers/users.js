import {
	FETCH_USERS_PENDING,
	FETCH_USERS_SUCCESS,
	FETCH_USERS_ERROR
} from '../actions/types';
import { combineReducers } from 'redux';

const userState = {
	isFetching: false,
	didInvalidate: false,
	userList: []
}

const usersReducer = (state = userState, action) => {
	switch (action.type) {
		case FETCH_USERS_PENDING:
			return {
				...state,
				isFetching: true
			}
		case FETCH_USERS_SUCCESS:
			return {
				...state, 
				isFetching: false,
				userList: action.userList
			}
		case FETCH_USERS_ERROR:
			return {
				...state,
				isFetching: false,
				didInvalidate: true
			}
		default:
			return state;
	}
}


export default usersReducer;
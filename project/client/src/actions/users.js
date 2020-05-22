import {
	FETCH_USERS_PENDING,
	FETCH_USERS_SUCCESS,
	FETCH_USERS_ERROR
} from './types';
import axios from 'axios';


export const invalidateUsers = () => {
	return {
		type: FETCH_USERS_ERROR
	}
}

export const requestUsers = () => {
	return {
		type: FETCH_USERS_PENDING
	}
}

export const receiveUsers = (userList) => {
	return {
		type: FETCH_USERS_SUCCESS,
		userList: userList,
		receivedAt: Date.now()
	}
}

export const fetchUsers = (params) => (dispatch) => {
	dispatch(requestUsers(params));
	return axios.get('http://localhost:9000/users', {
		params: {
			...params
		}
	})
    	.then(response => {
    		console.log(response);
    		return response.data.data
    	})
    	.then(userList => dispatch(receiveUsers(userList)))
}

const shouldFetchUsers = (state) => {
	const userList = state.users.userList;
	if (state.users.isFetching) {
		return false;
	} 
	else if (userList.length === 0) {
		return true;
	} else {
		return state.users.didInvalidate;
	}
}

export const fetchUsersIfNeeded = (params=null) => (dispatch, getState) => {
	if (shouldFetchUsers(getState())) {
		return dispatch(fetchUsers(params));
	}
}


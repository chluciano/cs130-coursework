import {
	FETCH_COURSES_PENDING,
	FETCH_COURSES_SUCCESS,
	FETCH_COURSES_ERROR,
	FETCH_COURSE_USERS_PENDING,
	FETCH_COURSE_USERS_SUCCESS,
	FETCH_COURSE_USERS_ERROR,
	SAVE_COURSE_USERS_PENDING,
	SAVE_COURSE_USERS_SUCCESS,
	SAVE_COURSE_USERS_ERROR
} from './types';
import axios from 'axios';

/*** COURSE INFORMATION ***/
export const invalidateCourses = () => {
	return {
		type: FETCH_COURSES_ERROR
	}
}

export const requestCourses = () => {
	return {
		type: FETCH_COURSES_PENDING
	}
}

export const receiveCourses = (courseList) => {
	return {
		type: FETCH_COURSES_SUCCESS,
		courseList: courseList,
		receivedAt: Date.now()
	}
}

export const fetchCourses = (params) => (dispatch) => {
	dispatch(requestCourses(params));
	return axios.get('http://localhost:9000/courses', {
		params: {
			...params
		}
	})
    	.then(response => {
    		console.log(response);
    		return response.data.data
    	})
    	.then(courseList => dispatch(receiveCourses(courseList)))
}

const shouldFetchCourses = (state) => {
	const courseList = state.courses.course.courseList;
	if (state.courses.course.isFetching) {
		return false;
	} 
	else if (courseList.length === 0) {
		return true;
	} else {
		return state.courses.course.didInvalidate;
	}
}

export const fetchCoursesIfNeeded = (params=null) => (dispatch, getState) => {
	if (shouldFetchCourses(getState())) {
		return dispatch(fetchCourses(params));
	}
}

/*** COURSE USERS ***/
export const invalidateCourseUsers = () => {
	return {
		type: FETCH_COURSE_USERS_ERROR
	}
}

export const requestCourseUsers = () => {
	return {
		type: FETCH_COURSE_USERS_PENDING
	}
}

export const receiveCourseUsers = (courseUserList) => {
	return {
		type: FETCH_COURSE_USERS_SUCCESS,
		teachers: courseUserList.teachers,
		students: courseUserList.students,
		receivedAt: Date.now()
	}
}

export const fetchCourseUsers = (id) => (dispatch) => {
	dispatch(requestCourseUsers());
	return axios.get('http://localhost:9000/courses/' + id + '/roster')
    	.then(response => {
    		console.log(response)
    		return response.data.data
    	})
    	.then(courseUserList => dispatch(receiveCourseUsers(courseUserList)))
}

const shouldFetchCourseUsers = (state) => {
	const courseUserList = [...state.courses.courseUsers.teacherList, ...state.courses.courseUsers.studentList];
	if (state.courses.courseUsers.isFetching) {
		return true;
	} else {
		return state.courses.courseUsers.didInvalidate;
	}
}

export const fetchCourseUsersIfNeeded = (id=null) => (dispatch, getState) => {
	if (shouldFetchCourseUsers(getState())) {
		return dispatch(fetchCourseUsers(id));
	}
}

// Save course users
// 
export const invalidateSaveCourseUsers = () => {
	return {
		type: SAVE_COURSE_USERS_ERROR
	}
}

export const requestSaveCourseUsers = () => {
	return {
		type: SAVE_COURSE_USERS_PENDING
	}
}

export const receiveSaveCourseUsers = (courseUserList) => {
	return {
		type: FETCH_COURSE_USERS_SUCCESS,
		teachers: courseUserList.teachers,
		students: courseUserList.students,
		receivedAt: Date.now()
	}
}

export const saveCourseUsers = (id, payload) => (dispatch) => {
	dispatch(requestSaveCourseUsers);
	return axios.post('http://localhost:9000/courses/'+ id + '/roster', payload)
		.then(response => {
			return response.data.data;
		})
		.then(courseUserList => dispatch(receiveSaveCourseUsers(courseUserList)))
}

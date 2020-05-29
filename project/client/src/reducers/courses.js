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
} from '../actions/types';
import { combineReducers } from 'redux';

const courseState = {
	isFetching: false,
	didInvalidate: false,
	courseList: []
}

const coursesReducer = (state = courseState, action) => {
	switch (action.type) {
		case FETCH_COURSES_PENDING:
			return {
				...state,
				isFetching: true
			}
		case FETCH_COURSES_SUCCESS:
			return {
				...state, 
				isFetching: false,
				courseList: action.courseList
			}
		case FETCH_COURSES_ERROR:
			return {
				...state,
				isFetching: false,
				didInvalidate: true
			}
		default:
			return state;
	}
}

const courseUserState = {
	isFetching: true,
	didInvalidate: false,
	teacherList: [],
	studentList: []
}

const courseUserReducer = (state = courseUserState, action) => {
	switch (action.type) {
		case FETCH_COURSE_USERS_PENDING:
			return {
				...state,
				isFetching: true
			}
		case FETCH_COURSE_USERS_SUCCESS:
			return {
				...state, 
				isFetching: false,
				teacherList: action.teachers,
				studentList: action.students
			}
		case FETCH_COURSE_USERS_ERROR:
			return {
				...state,
				isFetching: false,
				didInvalidate: true
			}
		case SAVE_COURSE_USERS_PENDING:
			return {
				...state,
				isFetching: true
			}
		case SAVE_COURSE_USERS_SUCCESS:
			return {
				...state, 
				isFetching: false,
				teacherList: [...state.teacherList, action.teachers],
				studentList: [...state.studentList, action.students]
			}
		case SAVE_COURSE_USERS_ERROR:
			return {
				...state,
				isFetching: false,
				didInvalidate: true
			}
		default:
			return state;
	}
}

export default combineReducers({
	course: coursesReducer,
	courseUsers: courseUserReducer
});
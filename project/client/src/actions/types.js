const createFetchRestStatus = key => ({
	[`FETCH_${key}_PENDING`]: `FETCH_${key}_PENDING`,
	[`FETCH_${key}_SUCCESS`]: `FETCH_${key}_SUCCESS`,
	[`FETCH_${key}_ERROR`]: `FETCH_${key}_ERROR` 
});

const createSaveRestStatus = key => ({
	[`SAVE_${key}_PENDING`]: `SAVE_${key}_PENDING`,
	[`SAVE_${key}_SUCCESS`]: `SAVE_${key}_SUCCESS`,
	[`SAVE_${key}_ERROR`]: `SAVE_${key}_ERROR` 
});

export const {FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR} = createFetchRestStatus("USERS");
export const {FETCH_COURSES_PENDING, FETCH_COURSES_SUCCESS, FETCH_COURSES_ERROR} = createFetchRestStatus("COURSES");
export const {SAVE_COURSES_PENDING, SAVE_COURSES_SUCCESS, SAVE_COURSES_ERROR} = createSaveRestStatus("COURSES");


export const {FETCH_COURSE_USERS_PENDING, FETCH_COURSE_USERS_SUCCESS, FETCH_COURSE_USERS_ERROR} = createFetchRestStatus("COURSE_USERS");
export const {SAVE_COURSE_USERS_PENDING, SAVE_COURSE_USERS_SUCCESS, SAVE_COURSE_USERS_ERROR} = createSaveRestStatus("COURSE_USERS");

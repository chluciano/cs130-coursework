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

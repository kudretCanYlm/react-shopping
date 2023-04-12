//types
const USER_ROLE_AND_DESCRIPTION_IS_LOADING = 'USER_ROLE_AND_DESCRIPTION_IS_LOADING';
const USER_ROLE_AND_DESCRIPTION_LOADING_ERROR = 'USER_ROLE_AND_DESCRIPTION_LOADING_ERROR';
const USER_ROLE_AND_DESCRIPTION_LOADED = 'USER_ROLE_AND_DESCRIPTION_LOADED';

//types functions
const userRoleAndDescriptionIsLoading = (bool) => {
  return {
    type: USER_ROLE_AND_DESCRIPTION_IS_LOADING,
    isLoading: bool
  };
};

const userRoleAndDescriptionIsLoadingError = (err) => {
  return {
    type: USER_ROLE_AND_DESCRIPTION_LOADING_ERROR,
    errCode: err.response.status,
    errMessage: err.message,
    isError: true
  };
};

const userRoleAndDescriptionLoaded = (data) => {
  return {
    type: USER_ROLE_AND_DESCRIPTION_LOADED,
    payload: data,
    loaded: true
  };
};

//actions

const GET_USER_ROLE_AND_DESCRIPTION_BY_RANGE = (pageNumber, PageSize) => {
  return (dispatch) => {
    dispatch(userRoleAndDescriptionIsLoading(true));
  };
};

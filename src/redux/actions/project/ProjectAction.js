import { GetProjectsByRange } from 'api/project/project-api';

//types
const PROJECT_IS_LOADING = 'PROJECT_IS_LOADING';
const PROJECT_LOADING_ERROR = 'PROJECT_LOADING_ERROR';
const PROJECT_LOADED = 'PROJECT_LOADED';

//types functions
const projectIsLoading = (bool) => {
  return {
    type: PROJECT_IS_LOADING,
    isLoading: bool
  };
};

const projectLoadingError = (err) => {
  return {
    type: PROJECT_LOADING_ERROR,
    errCode: err.code,
    errMessage: err.message,
    isError: true
  };
};

const projectLoaded = (data) => {
  return {
    type: PROJECT_LOADED,
    payload: data,
    loaded: true
  };
};

//actions

//get
const GET_PROJECTS_BY_RANGE = (pageNumber, pageSize) => {
  return (dispatch) => {
    dispatch(projectIsLoading(true));

    GetProjectsByRange(pageNumber, pageSize)
      .then((response) => {
        dispatch(projectIsLoading(false));
        dispatch(projectLoaded(response.data));
      })
      .catch((err) => dispatch(projectLoadingError(err)));
  };
};

//posts

export { PROJECT_IS_LOADING, PROJECT_LOADING_ERROR, PROJECT_LOADED, GET_PROJECTS_BY_RANGE };

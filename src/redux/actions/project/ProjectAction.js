import { GetProjectsByRange } from 'api/project/project-api';

//types
const PROJECT_IS_LOADING = 'PROJECT_IS_LOADING';
const PROJECT_LOADING_ERROR = 'PROJECT_LOADING_ERROR';
const PROJECT_LOADED = 'PROJECT_LOADED';
const PROJECT_CLEAR = 'PROJECT_CLEAR';
const PROJECT_SET_PAGE = 'PROJECT_SET_PAGE';
const PROJECT_SET_END = 'PROJECT_SET_END';

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

const projectLoaded = (data, isEnd) => {
  return {
    type: PROJECT_LOADED,
    payload: data,
    loaded: true,
    isEnd
  };
};

const projectClear = () => {
  return {
    type: PROJECT_CLEAR
  };
};

const projectSetPage = () => {
  return {
    type: PROJECT_SET_PAGE
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

        if ([...response.data].length == 0)
          dispatch(projectLoaded(response.data, true));
        else {
          dispatch(projectLoaded(response.data, false));
          dispatch(projectSetPage());
        }

      })
      .catch((err) => {
        dispatch(projectLoadingError(err));
        dispatch(projectIsLoading(false));
      });
      
  };
};

const CLEAR_PROJECT = () => {
  return (dispatch) => {
    dispatch(projectClear());
  };
};

const GET_PROJECT_FIRST_PAGE = () => {
  return (dispatch) => {
    dispatch(projectIsLoading(true));

    GetProjectsByRange(1, 3)
      .then((response) => {
        dispatch(projectIsLoading(false));
        dispatch(projectLoaded(response.data));
        dispatch(projectSetPage());
      })
      .catch((err) => {
        dispatch(projectLoadingError(err));
        projectIsLoading(false);
      });
  };
};

//posts

export {
  PROJECT_IS_LOADING,
  PROJECT_LOADING_ERROR,
  PROJECT_LOADED,
  PROJECT_SET_PAGE,
  PROJECT_SET_END,
  GET_PROJECTS_BY_RANGE,
  PROJECT_CLEAR,
  CLEAR_PROJECT,
  GET_PROJECT_FIRST_PAGE
};

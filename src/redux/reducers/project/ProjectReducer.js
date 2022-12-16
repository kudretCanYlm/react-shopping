import {
  PROJECT_IS_LOADING,
  PROJECT_LOADING_ERROR,
  PROJECT_LOADED
} from 'redux/actions/project/ProjectAction';

const ProjectReducer = (state = [], action) => {
  switch (action.type) {
    case PROJECT_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };

    case PROJECT_LOADING_ERROR:
      return {
        ...state,
        isError: action.isError,
        errCode: action.errCode,
        errMessage: action.errMessage
      };
    case PROJECT_LOADED:
      return {
        ...state,
        payload: action.payload,
        loaded: action.loaded
      };

    default:
      return state;
  }
};

export default ProjectReducer;

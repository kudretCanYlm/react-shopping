import {
  PROJECT_IS_LOADING,
  PROJECT_LOADING_ERROR,
  PROJECT_LOADED,
  PROJECT_CLEAR,
  PROJECT_SET_PAGE
} from 'redux/actions/project/ProjectAction';

const ProjectReducer = (state = { payload: [], pageCount: 1,isEnd:false }, action) => {
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
        payload: [...state.payload, ...action.payload],
        loaded: action.loaded,
        isEnd: state.isEnd
      };
    case PROJECT_SET_PAGE:
      return {
        ...state,
        pageCount: state.pageCount + 1
      };
    case PROJECT_CLEAR:
      return {
        isError: false,
        isLoading: false,
        payload: [],
        pageCount: 1
      };
    default:
      return state;
  }
};

export default ProjectReducer;

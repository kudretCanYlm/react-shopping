import {
  ARTICLE_IS_LOADING,
  ARTICLE_LOADING_ERROR,
  ARTICLE_LOADED
} from 'redux/actions/article/ArticleAction';

const ArticleReducer = (state = [], action) => {
  switch (action.type) {
    case ARTICLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };

    case ARTICLE_LOADING_ERROR:
      return {
        ...state,
        isError: action.isError,
        errCode: action.errCode,
        errMessage: action.errMessage
      };

    case ARTICLE_LOADED:
      return {
        ...state,
        payload: action.payload,
        loaded: action.loaded
      };

    default:
      return state;
  }
};

export default ArticleReducer;

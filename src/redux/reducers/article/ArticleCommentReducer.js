import {
  ARTICLE_COMMENT_IS_LOADING,
  ARTICLE_COMMENT_LOADING_ERROR,
  ARTICLE_COMMENT_LOADED
} from 'redux/actions/article/ArticleCommentAction';

const ArticleCommentReducer = (state = [], action) => {
  switch (action.type) {
    case ARTICLE_COMMENT_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };

    case ARTICLE_COMMENT_LOADING_ERROR:
      return {
        ...state,
        errCode: action.errCode,
        errMessage: action.errMessage,
        isError: action.isError
      };

    case ARTICLE_COMMENT_LOADED:
      return {
        ...state,
        loaded: action.loaded,
        payload: action.payload
      };

    default:
      return state;
  }
};

export default ArticleCommentReducer;

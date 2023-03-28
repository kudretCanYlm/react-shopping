import { GetArticleCommentsById } from 'api/article/article-api';

//types
const ARTICLE_COMMENT_IS_LOADING = 'ARTICLE_COMMENT_IS_LOADING';
const ARTICLE_COMMENT_LOADING_ERROR = 'ARTICLE_COMMENT_LOADING_ERROR';
const ARTICLE_COMMENT_LOADED = 'ARTICLE_COMMENT_LOADED';

//types functions
const articleCommentIsLoading = (bool) => {
  return {
    type: ARTICLE_COMMENT_IS_LOADING,
    isLoading: bool
  };
};

const articleCommentLoadingError = (err) => {
  return {
    type: ARTICLE_COMMENT_LOADING_ERROR,
    errCode: err.code,
    errMessage: err.message,
    isError: true
  };
};

const articleCommentLoaded = (data) => {
  return {
    type: ARTICLE_COMMENT_LOADED,
    payload: data,
    loaded: true
  };
};

//actions

//get
const GET_COMMENTS_BY_ARTICLE_ID = (articleId) => {
  return (dispatch) => {
    dispatch(articleCommentIsLoading(true));

    GetArticleCommentsById(articleId)
      .then((response) => {
        dispatch(articleCommentLoaded(response.data));
        dispatch(articleCommentIsLoading(false));
      })
      .catch((err) => dispatch(articleCommentLoadingError(err)));
  };
};

//post
const POST_COMMENT = (comment) => {};

export {
  ARTICLE_COMMENT_IS_LOADING,
  ARTICLE_COMMENT_LOADING_ERROR,
  ARTICLE_COMMENT_LOADED,
  GET_COMMENTS_BY_ARTICLE_ID,
  POST_COMMENT
};

import { GetArticlesByUserId } from 'api/article/article-api';

//types
const ARTICLE_IS_LOADING = 'ARTICLE_IS_LOADING';
const ARTICLE_LOADING_ERROR = 'ARTICLE_LOADING_ERROR';
const ARTICLE_LOADED = 'ARTICLE_LOADED';

//types functions
const articleIsLoading = (bool) => {
  return {
    type: ARTICLE_IS_LOADING,
    isLoading: bool
  };
};

const articleLoadingError = (err) => {
  return {
    type: ARTICLE_LOADING_ERROR,
    errCode: err.code,
    errMessage: err.message,
    isError: true
  };
};

const articleLoaded = (data) => {
  return {
    type: ARTICLE_LOADED,
    payload: data,
    loaded: true
  };
};

//actions

//get
const GET_ARTICLES_BY_USER_ID = (userId) => {
  return (dispatch) => {
    dispatch(articleIsLoading(true));

    GetArticlesByUserId(userId)
      .then((response) => {
        dispatch(articleIsLoading(false));
        dispatch(articleLoaded(response.data));
      })
      .catch((err) => dispatch(articleLoadingError(err)));
  };
};

const GET_ARTICLE_BY_ID = (articleId) => {};

//post
const POST_ARTICLE = (article) => {};

export {
  ARTICLE_IS_LOADING,
  ARTICLE_LOADING_ERROR,
  ARTICLE_LOADED,
  GET_ARTICLES_BY_USER_ID,
  GET_ARTICLE_BY_ID,
  POST_ARTICLE
};

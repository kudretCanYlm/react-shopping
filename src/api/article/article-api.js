import BaseApi from 'api/utils/base-api';

const articleBaseUrl = '/article';
BaseApi.defaults.baseURL = BaseApi.defaults.baseURL + articleBaseUrl;

//routes
const getUserArticles = '/getUserArticles';
const getArticleComments = '/getComments';
const addArticleComment = '/addComment';

//get
const GetArticlesByUserId = async (userId) => {
  const articles = await BaseApi.get(getUserArticles + `/${userId}`);
  return articles;
};

const GetArticleById = async (articleId) => {
  const article = await BaseApi.get(`/${articleId}`);
  return article;
};

const GetArticleCommentsById = async (articleId) => {
  const articleComments = await BaseApi.get(`${getArticleComments}/${articleId}`);
  return articleComments;
};

//post
const PostArticle = async (article) => {
  //will add validation control
  const status = await BaseApi.post('', {
    ArticleTitle: article.ArticleTitle,
    Summary: article.Summary,
    Content: article.Content,
    IsPublic: article.IsPublic
  });
  return status;
};

const PostArticleComment = async (articleComment) => {
  //will add validation control
  const status = await BaseApi.post(`${addArticleComment}`, {
    Comment: articleComment.Comment,
    ArticleId: articleComment.ArticleId
  });

  return status;
};

export {
  GetArticlesByUserId,
  GetArticleById,
  PostArticle,
  GetArticleCommentsById,
  PostArticleComment
};

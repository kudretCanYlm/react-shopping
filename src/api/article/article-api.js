import BaseApiClass from 'api/utils/base-api';

const articleBaseUrl = '/article';

//routes
const getUserArticles = articleBaseUrl + '/getUserArticles';
const getArticleComments = articleBaseUrl + '/getComments';
const addArticleComment = articleBaseUrl + '/addComment';

//get
const GetArticlesByUserId = async (userId) => {
  const baseApiClass = new BaseApiClass();
  const articles = await baseApiClass.BaseApi().get(getUserArticles + `/${userId}`);
  return articles;
};

const GetArticleById = async (articleId) => {
  const baseApiClass = new BaseApiClass();
  const article = await baseApiClass.BaseApi().get(`/${articleId}`);
  return article;
};

const GetArticleCommentsById = async (articleId) => {
  const baseApiClass = new BaseApiClass();
  const articleComments = await baseApiClass.BaseApi().get(`${getArticleComments}/${articleId}`);
  return articleComments;
};

//post
const PostArticle = async (article) => {
  const baseApiClass = new BaseApiClass();
  const status = await baseApiClass.BaseApi().post('', {
    ArticleTitle: article.ArticleTitle,
    Summary: article.Summary,
    Content: article.Content,
    IsPublic: article.IsPublic
  });
  return status;
};

const PostArticleComment = async (articleComment) => {
  const baseApiClass = new BaseApiClass();
  const status = await baseApiClass.BaseApi().post(`${addArticleComment}`, {
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

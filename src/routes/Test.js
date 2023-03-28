/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import ProjectCard from 'components/main/cards/ProjectCard';
import { useTitle } from 'hooks/page-hooks';
import ClassicButton from 'components/base/buttons/ClassicButton';
import { GetArticleById, GetArticlesByUserId, PostArticle } from 'api/article/article-api';
import ArticleCard from 'components/main/cards/ArticleCard';
import { connect } from 'react-redux';
import { GET_ARTICLES_BY_USER_ID } from 'redux/actions/article/ArticleAction';
import { GET_COMMENTS_BY_ARTICLE_ID } from 'redux/actions/article/ArticleCommentAction';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import $ from 'jquery';

const mapStateToProp = (state) => ({
  articleReducer: state.ArticleReducer,
  articleCommentReducer: state.ArticleCommentReducer
});

const mapDispatchToProps = (dispatch) => {
  return {
    getArticlesByUserId: (userId) => dispatch(GET_ARTICLES_BY_USER_ID(userId)),
    getCommentsByArticleId: (articleId) => dispatch(GET_COMMENTS_BY_ARTICLE_ID(articleId))
  };
};

const Test = (props) => {
  useTitle(`Test`);

  const { getArticlesByUserId, articleReducer, articleCommentReducer, getCommentsByArticleId } =
    props;

  const [articles, setArticles] = useState([]);
  const [comments, setComments] = useState([]);

  const clickBtn = () => {
    const userId = '0b382dfd-9660-444f-9f2c-0bf9b65cb3d4';

    getArticlesByUserId(userId);
  };

  const btnGetComments = () => {
    const articleId = '31671c8f-d4bb-4bff-86f3-4d8c2eac546b';

    getCommentsByArticleId(articleId);

    console.log(articleCommentReducer.loaded);
  };

  useEffect(() => {
    articleCommentReducer.loaded === true ? setComments([...articleCommentReducer.payload]) : '';
    articleReducer.loaded === true ? setArticles([...articleReducer.payload]) : '';

    console.log('updated: ' + articleCommentReducer.loaded);
  }, [articleCommentReducer, articleReducer]);

  const clickBtnSingle = () => {
    const articleId = 'c71283c6-40bc-4183-a6bf-0a3223f570eb';
  };

  const ClickBtnPost = () => {
    const articlePostModel = {
      ArticleTitle: 'Deneme title',
      Summary: 'Deneme Summay',
      Content:
        'Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content,Deneme Content',
      IsPublic: true
    };

    PostArticle(articlePostModel)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });
  };

  return (
    <div className="test">
      <ClassicButton text="GetArticlesByUserId" onClick={clickBtn} />
      <ClassicButton text="GetArticleById" onClick={clickBtnSingle} />
      <ClassicButton text="PostArticle" onClick={ClickBtnPost} />
      <ClassicButton text="GetCommentsss" onClick={btnGetComments} />

      <ReactPlaceholder type="media" showLoadingAnimation rows={7} ready={false}>
        <ProjectCard project={{ imgUrl: 'dasd', to: 'asdsad', about: 'asdasd', title: 'asdasd' }} />
      </ReactPlaceholder>

      {articleReducer.isLoading && articleReducer.isError
        ? 'loading'
        : articles.map((article, key) => (
            <ArticleCard
              article={{
                articleId: article.Id,
                title: article.ArticleTitle,
                summary: article.Summary,
                BackImg:
                  'https://images.pexels.com/photos/589840/pexels-photo-589840.jpeg?cs=srgb&dl=pexels-valiphotos-589840.jpg&fm=jpg'
              }}
              key={key}
            />
          ))}
      {articleReducer.isError
        ? `error code:${articleReducer.errCode} \n error message::${articleReducer.errMessage} `
        : ''}
    </div>
  );
};

export default connect(mapStateToProp, mapDispatchToProps)(Test);

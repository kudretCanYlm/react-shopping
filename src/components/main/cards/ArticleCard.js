import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { DEFAULT_IMG_URL } from 'components/base/img/common/common-props';
import { DEFAULT_CONTENT_TEXT } from 'components/base/texts/common/common-props';
import BackgroundImg from 'components/base/img/BackgroundImg';
import ThinMidTitle from 'components/base/headers/ThinMidTitle';
import ContentText from 'components/base/texts/ContentText';
import ClassicButton from 'components/base/buttons/ClassicButton';
import { toArticleDetailPage } from 'utils/Redirects';

const ArticleCard = ({ article, className }) => {
  const navigate = useNavigate();

  const toArticlePage = () => {
    navigate(toArticleDetailPage(article.articleId));
  };

  return (
    <div className={`article-card flex-row ${className}`}>
      <div className="article-card-left flex-row">
        <BackgroundImg imgUrl={article.BackImg} className="" />
      </div>
      <div className="article-card-right flex-column">
        <ThinMidTitle className="title-color-5 title-fontsize-1 title-margin-2">
          {article.title}
        </ThinMidTitle>
        <ContentText>{article.summary}</ContentText>
        <ClassicButton text="Details" className="icon-margin-2" onClick={toArticlePage} />
      </div>
    </div>
  );
};

//prop-types
ArticleCard.propTypes = {
  article: PropTypes.shape({
    articleId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    BackImg: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired
  }).isRequired,
  className: PropTypes.string
};

//default props
ArticleCard.defaultProps = {
  article: {
    articleId: '',
    title: 'Empty Title',
    BackImg: DEFAULT_IMG_URL,
    summary: DEFAULT_CONTENT_TEXT
  },
  className: ''
};

export default ArticleCard;

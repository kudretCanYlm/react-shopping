import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IMG_1 } from 'components/base/img/common/stock-images';
import { DEFAULT_IMG_URL } from 'components/base/img/common/common-props';
import ContentText from 'components/base/texts/ContentText';
import MiniRadiusImg from 'components/base/img/MiniRadiusImg';
import TextA from 'components/base/texts/TextA';
import ThinMidTitle from 'components/base/headers/ThinMidTitle';
import IconButton from 'components/base/buttons/IconButton';
import { HiOutlineDotsHorizontal, HiOutlineShare } from 'react-icons/hi';
import BackgroundImg from 'components/base/img/BackgroundImg';
import ThreeImg from 'components/base/img/ThreeImg';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import TextButton from 'components/base/buttons/TextButton';
import { takeTextWithWholeWord } from 'utils/StringFunctions';

const PostCard = ({ post, className }) => {
  const iconFontSize = 30;

  const isConstrainButtonText = 'read more...';
  const isNotConstrainButtonText = 'read less..';
  const constrainSize = 100;

  const [constrainText, setConstrainText] = useState({
    postText: takeTextWithWholeWord(post.postText, constrainSize),
    buttonText: isConstrainButtonText
  });

  const optionsClick = () => {
    //will change
    console.log('clicked optionsClick');
  };

  const likeAmountOnClick = () => {
    //will change
    console.log('clicked likeAmountOnClick');
  };

  const commentAmountOnClick = () => {
    //will change
    console.log('clicked commentAmountOnClick');
  };

  const likeOnClick = () => {
    //will change
    console.log('clicked likeOnClick');
  };

  const commentOnClick = () => {
    //will change
    console.log('clicked commentOnClick');
  };

  const shareOnclick = () => {
    //will change
    console.log('clicked shareOnclick');
  };

  const readMore = () => {
    if (constrainText.buttonText === isConstrainButtonText)
      setConstrainText({
        postText: post.postText,
        buttonText: isNotConstrainButtonText
      });
    else
      setConstrainText({
        postText: takeTextWithWholeWord(post.postText, constrainSize),
        buttonText: isConstrainButtonText
      });
  };

  return (
    <div className={`post-card ${className}`}>
      <div className="post-top flex-column">
        <div className="shared-actor flex-row">
          <div className="post-user-card flex-row">
            <MiniRadiusImg url={post.postOwner.profileImg} className="" />
            <div className="flex-column flex-start-items icon-margin-left-2">
              <ThinMidTitle className="title-color-5 title-fontsize-min-3">
                {post.postOwner.name}
              </ThinMidTitle>
              <TextA color="gray-1" className="title-fontsize-min-1">
                {post.postTimeSpan}
              </TextA>
            </div>
          </div>
          <IconButton onClick={optionsClick} className="" text="">
            <HiOutlineDotsHorizontal fontSize={iconFontSize} />
          </IconButton>
        </div>
        <ContentText>{constrainText.postText}</ContentText>
        <TextButton text={constrainText.buttonText} onClick={readMore} className="btn-read-more" />
      </div>
      <div className="post-center">
        {/*will add for multiple images */}
        <BackgroundImg imgUrl={post.postImages[0]} className="" />
      </div>
      <div className="post-bottom">
        <div className="post-datas flex-row">
          <div className="post-likes flex-row">
            <ThreeImg className="images" />
            <TextButton text={post.PostLikeAmount} onClick={likeAmountOnClick} />
          </div>
          <TextButton
            text={`${post.PostCommentAmount} comment`}
            onClick={commentAmountOnClick}
            className="icon-margin-right-2"
          />
        </div>
        <div className="post-buttons flex-row">
          <IconButton onClick={likeOnClick} text={post.isLiked ? 'Liked' : 'Like'} className="btn">
            {post.isLiked ? (
              <AiFillLike fontSize={iconFontSize * 0.7} />
            ) : (
              <AiOutlineLike fontSize={iconFontSize * 0.7} />
            )}
          </IconButton>
          <IconButton onClick={commentOnClick} text="Comment" className="btn">
            <BiCommentDetail fontSize={iconFontSize * 0.7} />
          </IconButton>
          <IconButton onClick={shareOnclick} text="Share" className="btn">
            <HiOutlineShare fontSize={iconFontSize * 0.7} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

//prop-types
PostCard.propTypes = {
  post: PropTypes.shape({
    postId: PropTypes.string.isRequired,
    postOwner: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profileImg: PropTypes.string.isRequired
    }),
    postTimeSpan: PropTypes.string.isRequired,
    postText: PropTypes.string.isRequired,
    postImages: PropTypes.arrayOf(PropTypes.string).isRequired,
    PostLikeAmount: PropTypes.number.isRequired,
    PostCommentAmount: PropTypes.number.isRequired,
    isLiked: PropTypes.bool.isRequired
  }).isRequired,
  className: PropTypes.string
};

//default props
PostCard.defaultProps = {
  post: {
    postId: 'Empty Id',
    postOwner: {
      name: 'Empty Name',
      profileImg: IMG_1
    },
    postTimeSpan: '2 hour',
    postText: 'Empty Text',
    postImages: [DEFAULT_IMG_URL],
    PostLikeAmount: -1,
    PostCommentAmount: -1,
    isLiked: false
  },
  className: ''
};

export default PostCard;

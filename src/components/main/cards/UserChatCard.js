import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_IMG_URL } from 'components/base/img/common/common-props';
import ThinMidTitle from 'components/base/headers/ThinMidTitle';
import MiniRadiusImg from 'components/base/img/MiniRadiusImg';
import ContentText from 'components/base/texts/ContentText';

//will add is online
const UserChatCard = ({ userChat, isWithMessage, className, onClickUser = (id) => id }) => {
  return (
    <div
      className={`user-chat-card flex-row ${className}`}
      onClick={() => onClickUser(userChat.id)}>
      <div className="flex-row">
        <MiniRadiusImg className="icon-margin-right-2" url={userChat.img} />
        <div className="flex-column flex-space-evenly">
          <ThinMidTitle className="title-color-5 title-fontsize-min-3">
            {userChat.name}
          </ThinMidTitle>
          {isWithMessage ? <ContentText>{userChat.lastMessage}</ContentText> : ''}
        </div>
      </div>
      {isWithMessage ? (
        <div className="flex-column flex-space-evenly flex-center-items">
          <ContentText className="title-color-5">{userChat.lastMessageTime}</ContentText>
          {userChat.unreadCount > 0 ? (
            <span className="user-chat-count-icon">
              +{userChat.unreadCount > 9 ? 9 : userChat.unreadCount}
            </span>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

UserChatCard.propTypes = {
  userChat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    lastMessageTime: PropTypes.string,
    lastMessage: PropTypes.string,
    unreadCount: PropTypes.number
  }).isRequired,
  isWithMessage: PropTypes.bool.isRequired,
  className: PropTypes.string
};

UserChatCard.defaultProps = {
  userChat: {
    id: '',
    name: 'Empty Name',
    img: DEFAULT_IMG_URL,
    lastMessageTime: 'Empty Time',
    lastMessage: '',
    unreadCount: 0
  },
  isWithMessage: true,
  className: ''
};

export default UserChatCard;

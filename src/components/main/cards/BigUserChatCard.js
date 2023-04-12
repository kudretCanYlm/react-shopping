import React from 'react';
import PropTypes from 'prop-types';
import MiniRadiusImg from 'components/base/img/MiniRadiusImg';
import { AiFillPhone, AiFillCamera } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import IconButton from 'components/base/buttons/IconButton';
import ThinMidTitle from 'components/base/headers/ThinMidTitle';
import ContentText from 'components/base/texts/ContentText';
import { DEFAULT_IMG_URL } from 'components/base/img/common/common-props';

const BigUserChatCard = ({
  selectedUserChat,
  className,
  onClickChatCall,
  onClickChatVideo,
  onClickPersonOptions
}) => {
  return (
    <div className={`big-user-chat-card flex-row ${className}`}>
      <div className="flex-row">
        <MiniRadiusImg
          url={selectedUserChat.img}
          className="icon-margin-right-2 big-user-chat-card-img"
        />
        <div className="flex-column flex-space-evenly">
          <ThinMidTitle className="title-color-1 title-fontsize-1">
            {selectedUserChat.name}
          </ThinMidTitle>
          <ContentText className="gray-3">{selectedUserChat.lastOnline}</ContentText>
        </div>
      </div>
      <div className="flex-row flex-center-items">
        <IconButton
          text=""
          className="bg-col-2 icon-color-1 big-user-chat-card-icons"
          onClick={() => onClickChatCall(selectedUserChat.id)}
        >
          <AiFillPhone />
        </IconButton>
        <IconButton
          text=""
          className="bg-col-2 icon-color-1 big-user-chat-card-icons"
          onClick={() => onClickChatVideo(selectedUserChat.id)}
        >
          <AiFillCamera />
        </IconButton>
        <IconButton
          text=""
          className="bg-col-2 icon-color-1 big-user-chat-card-icons"
          onClick={() => onClickPersonOptions(selectedUserChat.id)}
        >
          <BsThreeDots />
        </IconButton>
      </div>
    </div>
  );
};

BigUserChatCard.propTypes = {
  selectedUserChat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    lastOnline: PropTypes.string.isRequired
  }).isRequired,
  className: PropTypes.string
};

BigUserChatCard.defaultProps = {
  selectedUserChat: {
    id: '',
    name: 'Empty Name',
    img: DEFAULT_IMG_URL,
    lastOnline: 'Empty'
  },
  className: ''
};

export default BigUserChatCard;

import React from 'react';
import PropTypes from 'prop-types';
import ContentText from 'components/base/texts/ContentText';
import ThinMidTitle from 'components/base/headers/ThinMidTitle';
import IconButton from 'components/base/buttons/IconButton';
import { BsThreeDotsVertical } from 'react-icons/bs';
const MessageCard = ({ message, onClick = (id) => id, className }) => {
  const messageStyle = {
    backgroundColor: message.isOwner ? 'bg-col-1' : 'bg-col-2',
    color: message.isOwner ? 'white' : 'black',
    flex: message.isOwner ? 'flex-row-reverse' : 'flex-row',
    after: message.isOwner ? 'is-owner-after' : 'is-not-after'
  };

  return (
    <div className={`message-card ${messageStyle.flex} ${className}`}>
      <div className="message-card-capture flex-column">
        <div
          className={`message-card-message flex-row ${messageStyle.after} ${messageStyle.backgroundColor}`}>
          <ContentText className={` ${messageStyle.color}`}>{message.text}</ContentText>
          <IconButton
            className={`message-card-button ${messageStyle.color}`}
            text=""
            onClick={() => onClick(message.id)}>
            <BsThreeDotsVertical />
          </IconButton>
        </div>
        <ThinMidTitle className="title-color-2 title-fontsize-min-1">
          {message.sendTime}
        </ThinMidTitle>
      </div>
    </div>
  );
};

MessageCard.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.string.isRequired,
    senderId: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isOwner: PropTypes.bool.isRequired,
    sendTime: PropTypes.string.isRequired
  }),
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

MessageCard.defaultProps = {
  message: {
    id: '',
    senderId: '',
    text: 'Empty Message',
    isOwner: false,
    sendTime: 'null Time'
  },
  className: ''
};

export default MessageCard;

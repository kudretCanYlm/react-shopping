import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { RiSendPlaneFill, RiAttachment2 } from 'react-icons/ri';

const SendMessageCard = ({ onClick = (text) => text, className }) => {
  const text = useRef();

  return (
    <div className={`send-message-card flex-row ${className}`}>
      <div className="send-message-card-file-icon flex-row">
        {/* will add onClick*/}
        <RiAttachment2 />
      </div>
      <div className="send-message-card-text-box flex-row">
        <input
          type={'text'}
          ref={text}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onClick(text.current.value);
            }
          }}
        />
      </div>
      <div className="send-message-card-send-icon flex-row">
        <RiSendPlaneFill onClick={() => onClick(text.current.value)} />
      </div>
    </div>
  );
};

SendMessageCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

SendMessageCard.defaultProps = {
  className: ''
};

export default SendMessageCard;

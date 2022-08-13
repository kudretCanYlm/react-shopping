import React from 'react';
import PropTypes from 'prop-types';
import MiniRadiusImg from 'components/base/img/MiniRadiusImg';
import { DEFAULT_IMG_URL } from 'components/base/img/common/common-props';

const UserCard = ({ user, onClick = (f) => f, className }) => {
  return (
    <div className={`user-card flex-row ${className}`} onClick={onClick}>
      <div className="content flex-column">
        <p className="top-text">{user.userName}</p>
        <p className="bottom-text">{user.role}</p>
      </div>
      <MiniRadiusImg url={user.imgUrl} />
    </div>
  );
};

//propsType
UserCard.propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
  }),
  onclick: PropTypes.func,
  className: PropTypes.string
};

//default props
UserCard.defaultProps = {
  user: {
    userName: 'Empty',
    role: 'Empty',
    imgUrl: DEFAULT_IMG_URL
  },
  className: ''
};

export default UserCard;

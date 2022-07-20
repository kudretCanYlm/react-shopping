import React from 'react';
import PropTypes from 'prop-types';
import MiniRadiusImg from '../../../base/img/MiniRadiusImg';

const UserCard = ({ user, onClick = (f) => f }) => {
  return (
    <div className="user-card flex-row" onClick={onClick}>
      <div className="content flex-column">
        <p className="top-text">{user.userName}</p>
        <p className="bottom-text">{user.role}</p>
      </div>
      <MiniRadiusImg url={user.imgUrl} />
    </div>
  );
};

export default UserCard;

//propsType
UserCard.propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
  }),
  onclick: PropTypes.func
};

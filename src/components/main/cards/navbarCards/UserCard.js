import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import MiniRadiusImg from 'components/base/img/MiniRadiusImg';
import { DEFAULT_IMG_URL } from 'components/base/img/common/common-props';
import IconLink from 'components/base/links/IconLink';
import { AiOutlineProject, AiFillSetting, AiOutlineLogout } from 'react-icons/ai';
import { BsCardList } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';

const UserCard = ({ user, onClick = (f) => f, loaded, className }) => {
  Modal.defaultStyles.overlay.backgroundColor = 'transparent';
  Modal.defaultStyles.overlay.position = 'absolute';
  Modal.defaultStyles.overlay.zIndex = '9999';

  const userCardRef = useRef();
  const [startPoss, setStartPoss] = useState(0);
  //udemydeki gibi yap
  const customStyles = {
    content: {
      top: `${startPoss}px`,
      left: 'auto',
      right: '0',
      bottom: 'auto',
      padding: '0'
    }
  };

  let subtitle;

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    setStartPoss(userCardRef.current.offsetHeight + userCardRef.current.offsetTop * 2);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div ref={userCardRef} className={`user-card flex-row ${className}`} onClick={openModal}>
        <MiniRadiusImg url={user.imgUrl} />
      </div>
      {loaded ? (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}>
          <div className="flex-row flex-center-items title-border-bottom-1 padding-4">
            <MiniRadiusImg url={user.imgUrl} className="icon-margin-right-3" />
            <div className="flex-column flex-start-items">
              <p className="title-color-5 title-fontsize-min-3">{user.userName}</p>
              <p className="title-color-3 title-fontsize-min-2">{user.mail}</p>
            </div>
          </div>
          <div className="flex-column padding-4">
            <IconLink
              text="My Projects"
              to="myproject"
              className="title-fontsize-min-2 padding-horizontal-2 card-col-3 icon-margin-1 border-radius-1">
              <AiOutlineProject />
            </IconLink>

            <IconLink
              text="My Posts"
              to="/myposts"
              className="title-fontsize-min-2 padding-horizontal-2 card-col-3 icon-margin-1 border-radius-1">
              <BsCardList />
            </IconLink>

            <IconLink
              text="Options"
              to="/options"
              className="title-fontsize-min-2 padding-horizontal-2 card-col-3 icon-margin-1 border-radius-1">
              <AiFillSetting />
            </IconLink>

            <IconLink
              text="Profile"
              to="/profile"
              className="title-fontsize-min-2 padding-horizontal-2 card-col-3 icon-margin-1 border-radius-1">
              <BiUserCircle />
            </IconLink>

            <IconLink
              text="Log Out"
              to="/logout"
              className="title-fontsize-min-2 padding-horizontal-2 card-col-3 icon-margin-1 border-radius-1">
              <AiOutlineLogout />
            </IconLink>
          </div>
        </Modal>
      ) : (
        ''
      )}
    </>
  );
};

//propsType
UserCard.propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
  }),
  onclick: PropTypes.func,
  loaded: PropTypes.bool,
  className: PropTypes.string
};

//default props
UserCard.defaultProps = {
  user: {
    userName: 'Empty',
    mail: 'Empty',
    imgUrl: DEFAULT_IMG_URL
  },
  loaded: true,
  className: ''
};

export default UserCard;

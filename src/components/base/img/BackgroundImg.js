import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_IMG_URL } from './common/common-props';

const BackgroundImg = ({ imgUrl, className }) => {
  return (
    <div className={`background-img flex-column ${className}`}>
      <img src={imgUrl} />
    </div>
  );
};

//prop-types
BackgroundImg.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  className: PropTypes.string
};

//default props
BackgroundImg.defaultProps = {
  imgUrl: DEFAULT_IMG_URL,
  className: ''
};

export default BackgroundImg;

import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_IMG_URL } from './common/common-props';

const LogoImg = ({ imgUrl, className }) => {
  return (
    <div className={`logo-img flex-column flex-center-items ${className}`}>
      <img src={imgUrl} />
    </div>
  );
};

//prop-type
LogoImg.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  className: PropTypes.string
};

//default props
LogoImg.defaultProps = {
  imgUrl: DEFAULT_IMG_URL,
  className: ''
};

export default LogoImg;

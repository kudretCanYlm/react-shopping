import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_IMG_URL } from './common/common-props';

const MiniRadiusImg = ({ url, className }) => {
  return (
    <div className={`img mini-img ${className}`}>
      <img alt="" src={url} />
    </div>
  );
};

//prop-type
MiniRadiusImg.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string
};

//default props
MiniRadiusImg.defaultProps = {
  url: DEFAULT_IMG_URL,
  className: ''
};

export default MiniRadiusImg;

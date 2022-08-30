import React from 'react';
import PropTypes from 'prop-types';
import { IMG_1, IMG_2, IMG_3 } from './common/stock-images';

const ThreeImg = ({ img_1, img_2, img_3, className }) => {
  return (
    <div className={`three-img flex-row flex-center-items ${className}`}>
      <img src={img_1} />
      <img className="transform-1" src={img_2} />
      <img className="transform-2" src={img_3} />
    </div>
  );
};

//prop-types
ThreeImg.propTypes = {
  img_1: PropTypes.string.isRequired,
  img_2: PropTypes.string.isRequired,
  img_3: PropTypes.string.isRequired,
  className: PropTypes.string
};

//default props
ThreeImg.defaultProps = {
  img_1: IMG_1,
  img_2: IMG_2,
  img_3: IMG_3,
  className: ''
};

export default ThreeImg;

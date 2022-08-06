import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_IMG_URL } from './common/common-props';

const CardImg = ({ imgUrl, className }) => {
  return (
    <div className={`flex-column card-img ${className}`}>
      <img src={imgUrl} />
    </div>
  );
};

//proptype
CardImg.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  className: PropTypes.string
};

//default props
CardImg.defaultProps = {
  imgUrl: DEFAULT_IMG_URL,
  className: ''
};

export default CardImg;

import React from 'react';
import PropTypes from 'prop-types';

const CardImg = ({ imgUrl, className = '' }) => {
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

export default CardImg;

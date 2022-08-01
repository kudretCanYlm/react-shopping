import React from 'react';
import PropTypes from 'prop-types';

const MiniRadiusImg = ({ url }) => {
  return (
    <div className="img mini-img">
      <img alt="" src={url} />
    </div>
  );
};

//prop-type
MiniRadiusImg.propTypes = {
  url: PropTypes.string.isRequired
};

export default MiniRadiusImg;

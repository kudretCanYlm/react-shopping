import React from 'react';

const ThreeImg = ({ img_1, img_2, img_3, className }) => {
  return (
    <div className={`three-img flex-row flex-center-items ${className}`}>
      <img src={img_1} />
      <img className="transform-1" src={img_2} />
      <img className="transform-2" src={img_3} />
    </div>
  );
};

export default ThreeImg;

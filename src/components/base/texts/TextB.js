import React from 'react';

const TextB = ({ children, color = 'purple' }) => {
  return (
    <>
      <p className={'text-b ' + color}>{children}</p>
    </>
  );
};

export default TextB;

import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/base/base.css';

const IconLink = ({ children, text, to = '/' }) => {
  return (
    <div className="link-base">
      <Link className="link link-icon flex-row" to={to}>
        <div className="icon">{children}</div>
        <h2>{text}</h2>
      </Link>
    </div>
  );
};

export default IconLink;

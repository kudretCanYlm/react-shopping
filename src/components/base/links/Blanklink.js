import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineLink } from 'react-icons/ai';

const BlankLink = ({ href, className }) => {
  return (
    <div className={`blank-link flex-center-items flex-row ${className}`}>
      <AiOutlineLink className="icon-margin-right-1" />
      <a href={'https://' + href} target="blank">
        {href.length < 20 ? href : href.substring(0, 20)}
      </a>
    </div>
  );
};

//propTypes
BlankLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string
};

//default props
BlankLink.defaultProps = {
  href: '',
  className: ''
};

export default BlankLink;

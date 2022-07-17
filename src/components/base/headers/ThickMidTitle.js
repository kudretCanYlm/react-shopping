import PropTypes from 'prop-types';

const ThickMidTitle = ({ children, className = '' }) => {
  return <h2 className={`title-mid title-thick title-purple ${className}`}>{children}</h2>;
};

//prop-type
ThickMidTitle.propTypes = {
  children: PropTypes.object.isRequired
};

export default ThickMidTitle;

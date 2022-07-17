import PropTypes from 'prop-types';

const ThinMidTitle = ({ children, className = '' }) => {
  return <h2 className={`title-mid title-thin title-purple ${className}`}>{children}</h2>;
};

//prop-type
ThinMidTitle.propTypes = {
  children: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default ThinMidTitle;

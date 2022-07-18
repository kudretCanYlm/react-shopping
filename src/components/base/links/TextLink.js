import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TextLink = ({ children, to, className = '' }) => {
  return (
    <Link className={`link-text ${className}`} to={to}>
      {children}
    </Link>
  );
};

export default TextLink;

//proptypes
TextLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string
};

import PropTypes from 'prop-types';

const TextA = ({ children, color = 'purple' }) => {
  return <p className={'text-a ' + color}>{children}</p>;
};

export default TextA;

TextA.propTypes = {
  children: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired
};

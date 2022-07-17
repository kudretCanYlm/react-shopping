import PropTypes from 'prop-types';

const IconButton = ({ children, text, onClick = (f) => f, className = '' }) => {
  return (
    <div className={`btn-icon flex-row ${className}`} onClick={onClick}>
      {children}
      <p className="fontsize-dashboard white">{text}</p>
    </div>
  );
};

export default IconButton;

IconButton.propTypes = {
  children: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

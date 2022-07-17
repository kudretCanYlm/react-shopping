import PropTypes from 'prop-types';
import MiniRadiusImg from '../../base/img/MiniRadiusImg';
import TextLink from '../../base/links/TextLink';
import TextA from '../../base/texts/TextA';

const PersonCard = ({ name, imgUrl, linkTo, className = '' }) => {
  return (
    <div className={`person-card flex-row ${className}`}>
      <div className="flex-column">
        <TextA>{name}</TextA>
        <TextLink to={linkTo}>click here details</TextLink>
      </div>
      <MiniRadiusImg url={imgUrl} />
    </div>
  );
};

export default PersonCard;

//propTypes
PersonCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  className: PropTypes.string
};

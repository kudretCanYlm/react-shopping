import PropTypes from 'prop-types';
import MiniRadiusImg from '../../base/img/MiniRadiusImg';
import TextLink from '../../base/links/TextLink';
import TextA from '../../base/texts/TextA';

const SalesCard = ({ imgUrl, productName, price, linkTo, className = '' }) => {
  return (
    <div className={`sales-card flex-row ${className}`}>
      <MiniRadiusImg url={imgUrl} />
      <div className="flex-column">
        <TextA>{productName}</TextA>
        <TextLink to={linkTo}>click here details</TextLink>
      </div>
      <TextA>{'$' + price}</TextA>
    </div>
  );
};

export default SalesCard;

//propTypes
SalesCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  linkTo: PropTypes.string.isRequired,
  className: PropTypes.string
};

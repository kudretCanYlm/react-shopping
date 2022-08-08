import React from 'react';
import PropTypes from 'prop-types';
import MiniRadiusImg from 'components/base/img/MiniRadiusImg';
import TextLink from 'components/base/links/TextLink';
import TextA from 'components/base/texts/TextA';
import { DEFAULT_IMG_URL } from 'components/base/img/common/common-props';

const SalesCard = ({ imgUrl, productName, price, linkTo, className }) => {
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

//propTypes
SalesCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  linkTo: PropTypes.string.isRequired,
  className: PropTypes.string
};

//default props
SalesCard.defaultProps = {
  imgUrl: DEFAULT_IMG_URL,
  productName: 'Empty',
  price: -1,
  linkTo: '',
  className: ''
};

export default SalesCard;

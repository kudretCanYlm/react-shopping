import React from 'react';
import PropTypes from 'prop-types';
import ThinMidTitle from 'components/base/headers/ThinMidTitle';
import SalesCard from './SalesCard';
import { DEFAULT_IMG_URL } from 'components/base/img/common/common-props';

const YearlySalesCard = ({ productInfo, className }) => {
  return (
    <div className={`yearly-sales-report-card main-card flex-column ${className}`}>
      <ThinMidTitle className="title-margin-3 title-border-bottom-1">Yearly Sales</ThinMidTitle>

      {productInfo.length > 0 ? (
        productInfo.map((product, key) => (
          <SalesCard
            productName={product.productName}
            price={product.price}
            imgUrl={product.imgUrl}
            linkTo={product.linkTo}
            className={'card-margin'}
            key={key}
          />
        ))
      ) : (
        <ThinMidTitle>There isn&apos;t nothing</ThinMidTitle>
      )}
    </div>
  );
};

//propTypes
YearlySalesCard.propTypes = {
  productInfo: PropTypes.arrayOf(
    PropTypes.shape({
      productName: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      linkTo: PropTypes.string.isRequired
    })
  ),
  className: PropTypes.string
};

//default props
YearlySalesCard.defaultProps = {
  productInfo: [
    {
      productName: 'Empty',
      Price: 'Empty',
      imgUrl: DEFAULT_IMG_URL,
      linkTo: ''
    }
  ]
};

export default YearlySalesCard;

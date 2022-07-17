import ThinMidTitle from '../../base/headers/ThinMidTitle';
import SalesCard from './SalesCard';

const YearlySalesCard = ({ productInfo = [], className = '' }) => {
  return (
    <div className={`yearly-sales-report-card main-card flex-column ${className}`}>
      <ThinMidTitle className="title-margin-3 title-border-bottom-1">Yearly Sales</ThinMidTitle>

      {productInfo.length > 0 ? (
        productInfo.map((product) => (
          <SalesCard
            productName={product.productName}
            price={product.price}
            imgUrl={product.imgUrl}
            linkTo={product.LinkTo}
            className={'card-margin'}
          />
        ))
      ) : (
        <ThinMidTitle>There isn't nothing</ThinMidTitle>
      )}
    </div>
  );
};

export default YearlySalesCard;

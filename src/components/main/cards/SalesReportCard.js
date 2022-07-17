import PropTypes from 'prop-types';
import ColumnChart from '../../base/charts/ColumnChart';
import ThinMidTitle from '../../base/headers/ThinMidTitle';
import SalesCardInfo from './SalesCardInfo';
import '../../../styles/common/common.css';

const SalesReportCard = ({
  chart_x_values,
  chart_y_values,
  totalSales,
  totalRefunds,
  totalIncome,
  className = ''
}) => {
  return (
    <div className={`sales-report-card main-card flex-row ${className}`}>
      <div className="col-left">
        <ThinMidTitle>Sales Report</ThinMidTitle>
        <ColumnChart x_values={chart_x_values} y_values={chart_y_values} />
      </div>
      <div className="col-right">
        <ThinMidTitle>Details</ThinMidTitle>
        <SalesCardInfo title={'TOTAL SALES'} info={totalSales} className={'sales-card'} />
        <SalesCardInfo title={'TOTAL REFUNDS'} info={totalRefunds} className={'sales-card'} />
        <SalesCardInfo title={'TOTAL INCOME'} info={totalIncome} className={'sales-card'} />
      </div>
    </div>
  );
};

export default SalesReportCard;

//propTypes
SalesReportCard.propTypes = {
  chart_x_values: PropTypes.arrayOf(PropTypes.string),
  chart_y_values: PropTypes.arrayOf(PropTypes.number),
  totalSales: PropTypes.number.isRequired,
  totalRefunds: PropTypes.number.isRequired,
  totalIncome: PropTypes.number.isRequired,
  className: PropTypes.string
};

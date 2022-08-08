import React from 'react';
import PropTypes from 'prop-types';
import ColumnChart from 'components/base/charts/ColumnChart';
import ThinMidTitle from 'components/base/headers/ThinMidTitle';
import SalesCardInfo from './SalesCardInfo';
import { DEFAULT_X_VALUES, DEFAULT_Y_VALUES } from 'components/base/charts/common/common-props';

const SalesReportCard = ({
  chart_x_values,
  chart_y_values,
  totalSales,
  totalRefunds,
  totalIncome,
  className
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

//propTypes
SalesReportCard.propTypes = {
  chart_x_values: PropTypes.arrayOf(PropTypes.string),
  chart_y_values: PropTypes.arrayOf(PropTypes.number),
  totalSales: PropTypes.string.isRequired,
  totalRefunds: PropTypes.string.isRequired,
  totalIncome: PropTypes.string.isRequired,
  className: PropTypes.string
};

//default props
SalesReportCard.defaultProps = {
  chart_x_values: DEFAULT_X_VALUES,
  chart_y_values: DEFAULT_Y_VALUES,
  totalSales: 'Empty',
  totalRefunds: 'Empty',
  totalIncome: 'Empty',
  className: ''
};

export default SalesReportCard;

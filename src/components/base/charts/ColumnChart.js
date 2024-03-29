import React from 'react';
import ReactApexChart from 'react-apexcharts';
import PropTypes from 'prop-types';
import { Chart, Colors, DataLabels, PlotOptions, Tooltip } from './common/CommonChartOptions';
import { DEFAULT_X_VALUES, DEFAULT_Y_VALUES } from './common/common-props';

const ColumnChart = ({ x_values, y_values, className }) => {
  const chartData = {
    plotOptions: PlotOptions.PlotOptionsTopBar,
    colors: Colors.Purple,
    dataLabels: DataLabels.EnabledPurple12px,

    chart: Chart.ChartLinePurple,
    xaxis: {
      categories: [...x_values]
    },

    tooltip: Tooltip.EnabledFalse,

    series: [
      {
        name: 'Sales Report',
        type: 'column',
        data: [...y_values]
      }
    ]
  };

  return (
    <div className={`col-chart ${className}`}>
      <ReactApexChart options={chartData} series={chartData.series} />
    </div>
  );
};

//prop-type
ColumnChart.propTypes = {
  x_values: PropTypes.array.isRequired,
  y_values: PropTypes.arrayOf(PropTypes.number).isRequired,
  className: PropTypes.string
};

//default props
ColumnChart.defaultProps = {
  x_values: DEFAULT_X_VALUES,
  y_values: DEFAULT_Y_VALUES,
  className: ''
};

export default ColumnChart;

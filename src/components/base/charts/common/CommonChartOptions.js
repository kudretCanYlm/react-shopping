const PlotOptions = {
  PlotOptionsTopBar: {
    bar: {
      borderRadius: 12,
      dataLabels: {
        position: 'top'
      }
    }
  },
  PlotOptionsBottomBar: {
    bar: {
      borderRadius: 12,
      dataLabels: {
        position: 'bottom'
      }
    }
  }
};

const Colors = {
  Purple: ['#8b25ff']
};

const DataLabels = {
  EnabledPurple12px: {
    enabled: true,
    formatter: function (val) {
      return val;
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ['#8b25ff']
    }
  }
};

const Chart = {
  ChartLinePurple: {
    chart: {
      type: 'line',
      id: 'apexchart-example',
      foreColor: '#8b25ff'
    }
  }
};

const Tooltip = {
  EnabledTrue: {
    enabled: true
  },
  EnabledFalse: {
    enabled: false
  }
};

export { PlotOptions, Colors, DataLabels, Chart, Tooltip };

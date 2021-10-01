import React from 'react';
import { cloneDeep } from 'lodash';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  plugins: {
    title: {
      display: true,
      text: '',
    },
  },
};

const assetChartOption = cloneDeep(options);
assetChartOption.plugins.title.text = 'ASSETS STATISTIC';

const incomeChartOption = cloneDeep(options);
incomeChartOption.plugins.title.text = 'INCOMES STATISTIC';

const AInvestmentStatistic = ({ assetData, incomeData }) => {
  if (!assetData) return null;
  return (
    <>
      <Bar data={assetData} options={assetChartOption} />
      <Bar data={incomeData} options={incomeChartOption} />
    </>
  );
};

AInvestmentStatistic.defaultProps = {
  assetData: null,
  incomeData: null,
};

AInvestmentStatistic.propTypes = {
  assetData: PropTypes.objectOf(PropTypes.any),
  incomeData: PropTypes.objectOf(PropTypes.any),
};

export default AInvestmentStatistic;

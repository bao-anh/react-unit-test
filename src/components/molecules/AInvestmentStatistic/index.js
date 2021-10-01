import React from 'react';
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
      text: 'ASSETS STATISTIC',
    },
  },
};

const AInvestmentStatistic = ({ assetData }) => {
  if (!assetData) return null;
  return (
    <Bar data={assetData} options={options} />
  );
};

AInvestmentStatistic.defaultProps = {
  assetData: null,
};

AInvestmentStatistic.propTypes = {
  assetData: PropTypes.objectOf(PropTypes.any),
};

export default AInvestmentStatistic;

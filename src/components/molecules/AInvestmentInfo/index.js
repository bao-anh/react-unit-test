import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { ACard, ATypography, AButton } from '../../atoms';
import StyledInvestmentInfo from './styled';

const AInvestmentInfo = ({ investment }) => {
  if (!investment) return null;
  return (
    <StyledInvestmentInfo>
      <ACard
        title={investment.planName}
        extra={<AButton icon={<EditOutlined />} type="text" />}
      >
        <div className="investment-info">
          <div className="investment-info__item">
            <ATypography>
              Investment Target
            </ATypography>
            {investment.investmentTarget}
          </div>
          <div className="investment-info__item">
            <ATypography>
              Year target
            </ATypography>
            {investment.yearTarget}
          </div>
          <div className="investment-info__item">
            <ATypography>
              Interest rate
            </ATypography>
            {investment.interestRate}
          </div>
          <div className="investment-info__item">
            <ATypography>
              Current self assets
            </ATypography>
            {investment.currentSelfAssets}
          </div>
          <div className="investment-info__item">
            <ATypography>
              Current parent assets
            </ATypography>
            {investment.currentParentAssets}
          </div>
          <div className="investment-info__item">
            <ATypography>
              Current income
            </ATypography>
            {investment.currentIncome}
          </div>
          <div className="investment-info__item">
            <ATypography>
              Accumulate income per year
            </ATypography>
            {investment.accumulateIncomePerYear}
          </div>
        </div>
      </ACard>
    </StyledInvestmentInfo>
  );
};

AInvestmentInfo.propTypes = {
  investment: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default AInvestmentInfo;

import React from 'react';
import moment from 'moment';
import { Progress } from 'antd';
import { EditOutlined, DeleteOutlined, ArrowRightOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { ACard, ATypography, AButton } from '../../atoms';
import { toMoney, getRemainDay, getPercentCompleteInvestmentPlan } from '../../../utils/convert';
import { DATE_FORMAT } from '../../../constants/format';
import StyledInvestmentInfo from './styled';

const AInvestmentInfo = ({
  investment,
  onDeleteInvestment,
  onEditInvestment,
  onAccessInvestment,
}) => {
  if (!investment) return null;
  return (
    <StyledInvestmentInfo>
      <ACard
        title={investment.planName}
        extra={(
          <div className="investment-info__actions">
            <AButton
              icon={<ArrowRightOutlined />}
              type="text"
              onClick={() => onAccessInvestment(investment.id)}
            />
            <AButton
              icon={<EditOutlined />}
              type="text"
              onClick={() => onEditInvestment(investment.id)}
            />
            <AButton
              icon={<DeleteOutlined />}
              type="text"
              onClick={() => onDeleteInvestment(investment.id)}
            />
          </div>
        )}
      >
        <div className="investment-info__progress">
          <ATypography className="investment-info__progress__title">
            Current progress
          </ATypography>
          <Progress
            percent={getPercentCompleteInvestmentPlan(
              investment.investmentTarget,
              investment.initSelfAssets,
              investment.initParentAssets,
              investment.currentSelfAssets,
              investment.currentParentAssets,
            )}
            status="active"
          />
        </div>
        <div className="investment-info">
          <div className="investment-info__item">
            <ATypography>
              Investment Target
            </ATypography>
            <ATypography type="statistic">
              {toMoney(investment.investmentTarget)}
            </ATypography>
          </div>
          <div className="investment-info__item">
            <ATypography>
              Due plan
            </ATypography>
            <ATypography type="statistic">
              {`${investment.targetYears} years`}
            </ATypography>
          </div>
          <div className="investment-info__item">
            <ATypography>
              Interest rate
            </ATypography>
            <ATypography type="statistic">
              {`${investment.interestRate * 100}%`}
            </ATypography>
          </div>
          <div className="investment-info__item">
            <ATypography>
              Init self assets
            </ATypography>
            <ATypography type="statistic">
              {toMoney(investment.initSelfAssets)}
            </ATypography>
          </div>
          <div className="investment-info__item">
            <ATypography>
              Init parent assets
            </ATypography>
            <ATypography type="statistic">
              {toMoney(investment.initParentAssets)}
            </ATypography>
          </div>
          <div className="investment-info__item">
            <ATypography>
              Init income
            </ATypography>
            <ATypography type="statistic">
              {toMoney(investment.initIncome)}
            </ATypography>
          </div>
          <div className="investment-info__item">
            <ATypography>
              Current self assets
            </ATypography>
            <ATypography type="statistic">
              {toMoney(investment.currentSelfAssets)}
            </ATypography>
          </div>
          <div className="investment-info__item">
            <ATypography>
              Current parent assets
            </ATypography>
            <ATypography type="statistic">
              {toMoney(investment.currentParentAssets)}
            </ATypography>
          </div>
          <div className="investment-info__item">
            <ATypography>
              Current income
            </ATypography>
            <ATypography type="statistic">
              {toMoney(investment.currentIncome)}
            </ATypography>
          </div>
          <div className="investment-info__item">
            <ATypography>
              Start date
            </ATypography>
            <ATypography type="statistic">
              {moment(investment.startDate).format(DATE_FORMAT)}
            </ATypography>
          </div>
          <div className="investment-info__item">
            <ATypography>
              Due date
            </ATypography>
            <ATypography type="statistic">
              {moment(investment.dueDate).format(DATE_FORMAT)}
            </ATypography>
          </div>
          <div className="investment-info__item">
            <ATypography>
              Time remaining
            </ATypography>
            <ATypography type="statistic">
              {getRemainDay(investment.dueDate)}
            </ATypography>
          </div>
        </div>
      </ACard>
    </StyledInvestmentInfo>
  );
};

AInvestmentInfo.propTypes = {
  investment: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.number),
  ])).isRequired,
  onDeleteInvestment: PropTypes.func.isRequired,
  onEditInvestment: PropTypes.func.isRequired,
  onAccessInvestment: PropTypes.func.isRequired,
};

export default AInvestmentInfo;

import React from 'react';
import { Divider } from 'antd';
import PropTypes from 'prop-types';
import { AInput, ACard, AButton } from '../../atoms';
import StyledAAddInvestment from './styled';

const AAddInvestment = ({
  newInvestment,
  onAddInvestment,
  onCancelInvestment,
  onChangeNewInvestment,
}) => {
  if (!newInvestment) return null;
  return (
    <StyledAAddInvestment>
      <ACard>
        <div className="add-investment">
          <AInput
            label="Investment plan name"
            value={newInvestment.planName}
            onChange={(e) => onChangeNewInvestment(newInvestment.id, 'planName', e.target.value)}
          />
          <AInput
            label="Investment Target"
            value={newInvestment.investmentTarget}
            onChange={(e) => onChangeNewInvestment(newInvestment.id, 'investmentTarget', e.target.value)}
          />
          <AInput
            label="Year target"
            value={newInvestment.yearTarget}
            onChange={(e) => onChangeNewInvestment(newInvestment.id, 'yearTarget', e.target.value)}
          />
          <AInput
            label="Interest rate"
            value={newInvestment.interestRate}
            onChange={(e) => onChangeNewInvestment(newInvestment.id, 'interestRate', e.target.value)}
          />
          <AInput
            label="Current self assets"
            value={newInvestment.currentSelfAssets}
            onChange={(e) => onChangeNewInvestment(newInvestment.id, 'currentSelfAssets', e.target.value)}
          />
          <AInput
            label="Current parent assets"
            value={newInvestment.currentParentAssets}
            onChange={(e) => onChangeNewInvestment(newInvestment.id, 'currentParentAssets', e.target.value)}
          />
          <AInput
            label="Current income"
            value={newInvestment.currentIncome}
            onChange={(e) => onChangeNewInvestment(newInvestment.id, 'currentIncome', e.target.value)}
          />
          <AInput
            label="Accumulate income per year"
            value={newInvestment.accumulateIncomePerYear}
            onChange={(e) => onChangeNewInvestment(newInvestment.id, 'accumulateIncomePerYear', e.target.value)}
          />
        </div>
        <Divider />
        <div className="add-investment__actions">
          <AButton type="default" onClick={onCancelInvestment}>
            Cancel
          </AButton>
          <AButton onClick={onAddInvestment}>
            Save
          </AButton>
        </div>
      </ACard>
    </StyledAAddInvestment>
  );
};

AAddInvestment.propTypes = {
  newInvestment: PropTypes.objectOf(PropTypes.string).isRequired,
  onAddInvestment: PropTypes.func.isRequired,
  onCancelInvestment: PropTypes.func.isRequired,
  onChangeNewInvestment: PropTypes.func.isRequired,
};

export default AAddInvestment;

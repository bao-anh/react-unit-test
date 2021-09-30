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
            label="Due plan"
            value={newInvestment.yearTarget}
            onChange={(e) => onChangeNewInvestment(newInvestment.id, 'yearTarget', e.target.value)}
          />
          <AInput
            label="Interest rate"
            value={newInvestment.interestRate}
            onChange={(e) => onChangeNewInvestment(newInvestment.id, 'interestRate', e.target.value)}
          />
          <AInput
            label="Init self assets"
            value={newInvestment.initSelfAssets}
            onChange={(e) => onChangeNewInvestment(newInvestment.id, 'initSelfAssets', e.target.value)}
          />
          <AInput
            label="Init parent assets"
            value={newInvestment.initParentAssets}
            onChange={(e) => onChangeNewInvestment(newInvestment.id, 'initParentAssets', e.target.value)}
          />
          <AInput
            label="Init income"
            value={newInvestment.initIncome}
            onChange={(e) => onChangeNewInvestment(newInvestment.id, 'initIncome', e.target.value)}
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

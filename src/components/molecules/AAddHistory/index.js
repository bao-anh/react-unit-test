import React from 'react';
import { Divider } from 'antd';
import PropTypes from 'prop-types';
import {
  AInput,
  ACard,
  AButton,
  ASelect,
  ARadio,
  ADatepicker,
} from '../../atoms';
import { HISTORY_TYPE, HISTORY_OWNER } from '../../../constants/format';
import StyledAAddHistory from './styled';

const AAddHistory = ({
  newHistory,
  onAddHistory,
  onCancelHistory,
  onChangeNewHistory,
}) => {
  if (!newHistory) return null;
  return (
    <StyledAAddHistory>
      <ACard>
        <div className="add-history">
          <ARadio
            className="radio"
            label="History type"
            options={HISTORY_TYPE}
            value={newHistory.type}
            onChange={(e) => onChangeNewHistory('type', e.target.value)}
          />
          <ASelect
            className="select"
            label="History owner"
            options={HISTORY_OWNER}
            value={newHistory.owner}
            onChange={(e) => onChangeNewHistory('owner', e.value)}
          />
          <ADatepicker
            className="date"
            label="Date"
            value={newHistory.date}
            onChange={(value) => onChangeNewHistory('date', value)}
          />
          <AInput
            className="amount"
            label="Amount"
            value={newHistory.amount}
            onChange={(e) => onChangeNewHistory('amount', e.target.value)}
          />
          <AInput
            className="reason"
            label="Reason"
            value={newHistory.reason}
            onChange={(e) => onChangeNewHistory('reason', e.target.value)}
          />
        </div>
        <Divider />
        <div className="add-history__actions">
          <AButton type="default" onClick={onCancelHistory}>
            Cancel
          </AButton>
          <AButton onClick={onAddHistory}>
            Save
          </AButton>
        </div>
      </ACard>
    </StyledAAddHistory>
  );
};

AAddHistory.defaultProps = {
  newHistory: null,
};

AAddHistory.propTypes = {
  newHistory: PropTypes.objectOf(PropTypes.any),
  onAddHistory: PropTypes.func.isRequired,
  onCancelHistory: PropTypes.func.isRequired,
  onChangeNewHistory: PropTypes.func.isRequired,
};

export default AAddHistory;

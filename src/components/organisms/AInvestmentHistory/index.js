import React from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import { AAddHistory } from '../../molecules';
import { AButton } from '../../atoms';
import StyledAInvestmentHistory from './styled';

const AInvestmentHistory = ({
  newHistory,
  onChangeNewHistory,
  onAddHistory,
  onCancelHistory,
  handleAddNewEmptyHistory,
}) => (
  <StyledAInvestmentHistory>
    <AAddHistory
      newHistory={newHistory}
      onChangeNewHistory={onChangeNewHistory}
      onAddHistory={onAddHistory}
      onCancelHistory={onCancelHistory}
    />
    <AButton
      className="investment__add-button"
      icon={<PlusOutlined />}
      shape="circle"
      size="large"
      onClick={handleAddNewEmptyHistory}
    />
  </StyledAInvestmentHistory>
);

AInvestmentHistory.defaultProps = {
  newHistory: null,
};

AInvestmentHistory.propTypes = {
  newHistory: PropTypes.objectOf(PropTypes.any),
  onChangeNewHistory: PropTypes.func.isRequired,
  onCancelHistory: PropTypes.func.isRequired,
  onAddHistory: PropTypes.func.isRequired,
  handleAddNewEmptyHistory: PropTypes.func.isRequired,
};

export default AInvestmentHistory;

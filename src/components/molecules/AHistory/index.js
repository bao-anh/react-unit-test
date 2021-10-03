import React from 'react';
import { Collapse } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { ATypography, ATag } from '../../atoms';
import { HISTORY_TYPE, HISTORY_OWNER } from '../../../constants/format';
import StyledAHistory, { StyledIcon } from './styled';

const { Panel } = Collapse;

const AHistory = ({ histories }) => {
  const renderHistoryHeader = (history) => {
    const {
      type,
      amount,
      owner,
      date,
    } = history;
    const isTypeUp = type === HISTORY_TYPE[0].value;
    const isOwnerSelf = owner === HISTORY_OWNER[0].value;

    const renderIcon = () => {
      if (isTypeUp) return <CaretUpOutlined />;
      return <CaretDownOutlined />;
    };

    return (
      <div className="history-item">
        <div className="history-item__left">
          <div className="history-item__left__amount">
            <StyledIcon isTypeUp={isTypeUp}>
              {renderIcon()}
            </StyledIcon>
            <ATypography type={isTypeUp ? 'up' : 'down'}>
              {parseInt(amount, 10).toLocaleString()}
            </ATypography>
          </div>
          <ATag type="date" value={date} />
        </div>
        <div className="history-item__right">
          <ATag
            type={isOwnerSelf ? 'self' : 'parent'}
            value={HISTORY_OWNER[owner - 1].label}
          />
        </div>
      </div>
    );
  };

  if (!histories) return null;
  return (
    <StyledAHistory>
      {
        histories.map((history) => (
          <Collapse collapsible="header" key={history.id}>
            <Panel
              showArrow={false}
              header={renderHistoryHeader(history)}
              key={history.id}
            >
              {history.reason}
            </Panel>
          </Collapse>
        ))
      }
    </StyledAHistory>
  );
};

AHistory.defaultProps = {
  histories: null,
};

AHistory.propTypes = {
  histories: PropTypes.arrayOf(PropTypes.any),
};

export default AHistory;

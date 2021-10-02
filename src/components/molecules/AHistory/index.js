import React from 'react';
import { Collapse } from 'antd';
import PropTypes from 'prop-types';
import StyledAHistory from './styled';

const { Panel } = Collapse;

const AHistory = ({ histories }) => {
  if (!histories) return null;
  return (
    <StyledAHistory>
      {
        histories.map((history) => (
          <Collapse collapsible="header" key={history.id}>
            <Panel header="This panel can only be collapsed by clicking text" key={history.id}>
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

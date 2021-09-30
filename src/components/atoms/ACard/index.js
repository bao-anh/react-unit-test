import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

const ACard = ({ children, ...props }) => (
  <Card {...props}>
    {children}
  </Card>
);

ACard.defaultProps = {
  children: null,
};

ACard.propTypes = {
  children: PropTypes.node,
};

export default ACard;

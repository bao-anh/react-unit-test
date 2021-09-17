import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const AButton = ({ type, children }) => (
  <Button type={type}>
    {children}
  </Button>
);

AButton.defaultProps = {
  type: 'primary',
};

AButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AButton;

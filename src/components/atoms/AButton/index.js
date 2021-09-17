import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const AButton = ({
  type,
  children,
  size,
  onClick,
  disabled,
  loading,
  ...props
}) => (
  <Button
    type={type}
    size={size}
    onClick={onClick}
    loading={loading}
    disabled={disabled}
    {...props}
  >
    {children}
  </Button>
);

AButton.defaultProps = {
  type: 'primary',
  size: 'middle',
  onClick: null,
  loading: false,
  disabled: false,
};

AButton.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default AButton;

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
  icon,
  ...props
}) => (
  <Button
    type={type}
    size={size}
    onClick={onClick}
    loading={loading}
    disabled={disabled}
    icon={icon}
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
  icon: null,
  children: null,
};

AButton.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
};

export default AButton;

import React from 'react';
import { Checkbox } from 'antd';
import PropTypes from 'prop-types';

const ACheckbox = ({
  checked,
  disabled,
  onChange,
  label,
}) => (
  <Checkbox
    checked={checked}
    disabled={disabled}
    onChange={onChange}
  >
    {label}
  </Checkbox>
);

ACheckbox.defaultProps = {
  checked: false,
  disabled: false,
  onChange: null,
  label: null,
};

ACheckbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

export default ACheckbox;
